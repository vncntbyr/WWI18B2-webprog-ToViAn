"use strict";

/**
*   Klasse PageLogin:Ermöglicht dem Benutzer das Anmelden
**/
class PageLogin {
    /**
     * Konstruktor
     * @param {App} app Zentrale Instanz der App-Klasse
     */
    constructor(app) {
        this._app = app;
    }

    /**
     * Seite anzeigen. Wird von der App-Klasse aufgerufen.
     */
    async show(matches) {
        // Anzuzeigenden Seiteninhalt nachladen
        let html = await fetch("page-login/page-login.html");
        let css = await fetch("page-login/page-login.css");

        if (html.ok && css.ok) {
            html = await html.text();
            css = await css.text();
        } else {
            console.error("Fehler beim Laden des HTML/CSS-Inhalts");
            return;
        }

        // Seite zur Anzeige bringen

        let pageDom = document.createElement("div");
        pageDom.innerHTML = html;

        //Buttonlistener für Öffnen und Schließen des Modals
        pageDom.querySelector("#reset").addEventListener("click", () => this.openresetmodal());
        pageDom.getElementsByClassName("close")[0].addEventListener("click", () => this.closeresetmodal());

        //Buttonlistener um form box zu submitten und abzugleichen
        pageDom.querySelector("#login").addEventListener("submit", (e) => this.submitform(e));

        //ButtonListener für box2 im Modal => Passwortreset
        pageDom.querySelector("#resetmodal").addEventListener("submit", (e) => this.sendmail(e));


        this._app.setPageTitle(`Startseite`, {isSubPage: true});
        this._app.setPageCss(css);
        this._app.setPageHeader(pageDom.querySelector("header"));
        this._app.setPageContent(pageDom.querySelector("main"));
    }

    openresetmodal() {
        document.querySelector("#pwreset").style.display = "block";
    }

    closeresetmodal() {
        document.querySelector("#pwreset").style.display = "none";
    }

    submitform(e) {
        //Nachladen verhindern bzw Submit Button hat jetzt keine Funktion (wegen des Umfangs)
        e.preventDefault();
        const promise = this._app.database.login(document.querySelector("#email").value, document.querySelector("#password").value);
        this._app.database.realtimeListener();
    }
    sendmail(e) {
        //Nachladen verhindern bzw Submit Button hat jetzt keine Funktion (wegen des Umfangs)
        e.preventDefault();
        this._app.database.resetMail(document.querySelector("#resetemail").value);

        document.querySelector("#resetemail").style.display ="none";
        document.querySelector("#resetsubmit").style.display ="none";
        document.querySelector(".successfull").style.display ="block";


    }

}

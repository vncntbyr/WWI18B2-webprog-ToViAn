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

        //Buttonlistener um form zu submitten und abzugleichen
        pageDom.querySelector("#login").addEventListener("submit", (e) => this.submitform(e));


        this._app.setPageTitle("R&C - Login");
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

        //Abgleich mit Datenbank, ob die Werte übereinstimmen
        if(document.querySelector("#email").value.toLowerCase() == "testemail@test.de"
            && document.querySelector("#password").value == "42") {
                //Login funktioniert
                document.querySelector("#hidden").style.display = "block";
                document.querySelector("#email").style.display ="none";
                document.querySelector("#password").style.display ="none";
                document.querySelector("#submit").style.display ="none";
            } else {
                alert("Die Eingegebenen Daten sind falsch");
                document.querySelector("#email").value = "";
                document.querySelector("#password").value ="";
                //funktioniertnichtdiv.style.display="block";
                //unsichtbares Div zum Anzeigen bringen/Text erzeugen der sagt, dass der Login fehlgeschlagen ist
                //zusätzlich rotes Anzeigen der Login Felder
            }
        document.querySelector("header nav .menu-right").style.display="none";
        document.querySelector("header nav .loggedin").style.display="block";
    }

}

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


        pageDom.querySelector("#reset").addEventListener("click", () => this.openmodal());
        pageDom.getElementsByClassName("close")[0].addEventListener("click", () => this.closemodal());


        this._app.setPageTitle("R&C - Login");
        this._app.setPageCss(css);
        this._app.setPageHeader(pageDom.querySelector("header"));
        this._app.setPageContent(pageDom.querySelector("main"));

    }
    openmodal() {
        document.querySelector("#pwreset").style.display = "block";
    }
    closemodal() {
        document.querySelector("#pwreset").style.display = "none";
    }
}

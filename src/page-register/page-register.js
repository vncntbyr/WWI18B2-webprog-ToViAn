"use strict";

/**
*   Klasse PageRegister:Ermöglicht dem Benutzer das Registrieren
**/
class PageRegister {
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
        let html = await fetch("page-register/page-register.html");
        let css = await fetch("page-register/page-register.css");

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


        this._app.setPageTitle("Passwort zurücksetzen");
        this._app.setPageCss(css);
        this._app.setPageHeader(pageDom.querySelector("header"));
        this._app.setPageContent(pageDom.querySelector("main"));
    }


    }

"use strict";

/**
 * Klasse PageDetail: Stellt die Detailseite der App zur Verfügung
 */
class PageDetail {
    /**
     * Konstruktor
     * @param {App} app Zentrale Instanz der App-Klasse
     */
    constructor(app) {
        this._app = app;
        this._recordId = -1;
        this._data = null;

    }

    /**
     * Seite anzeigen. Wird von der App-Klasse aufgerufen.
     */
    async show(matches) {
        // URL-Parameter auswerten
        this._recordId = matches[1];
        this._data = this._app.database.getRecordById(this._recordId);

        // Anzuzeigenden Seiteninhalt nachladen
        let html = await fetch("page-detail/page-detail.html");
        let css = await fetch("page-detail/page-detail.css");

        if (html.ok && css.ok) {
            html = await html.text();
            css = await css.text();
        } else {
            console.error("Fehler beim Laden des HTML/CSS-Inhalts");
            return;
        }

        // Seite zur Anzeige bringen
        let pageDom = this._processTemplate(html);

        this._app.setPageTitle(`Hardwareverleih ${this._data.name}`, {isSubPage: true});
        this._app.setPageCss(css);
        this._app.setPageHeader(pageDom.querySelector("header"));
        this._app.setPageContent(pageDom.querySelector("main"));


    }

     /**
     * Hilfsmethode, welche den HTML-Code der eingelesenen HTML-Datei bearbeitet
     * und anhand der eingelesenen Daten ergänzt. Zusätzlich wird hier ein
     * Event Handler für den Button registriert.
     *
     * @param {HTMLElement} pageDom Wurzelelement der eingelesenen HTML-Datei
     * mit den HTML-Templates dieser Seite.
     */
    _processTemplate(html) {
        // Platzhalter mit den eingelesenen Daten ersetzen
        html = html.replace(/{IMG}/g, this._data.img);
        html = html.replace(/{NAME}/g, this._data.name);
        html = html.replace(/{PREIS}/g, this._data.preis1);
        html = html.replace(/{CURRENCY}/g, this._data.currency);
        html = html.replace(/{STATUS}/g, this._data.status);
        html = html.replace(/{VERFÜGBAR}/g, this._data.verfügbar);



        // HTML-Template in echte DOM-Objekte umwandeln, damit wir es mit den
        // DOM-Methoden von JavaScript weiterbearbeiten können
        let pageDom = document.createElement("div");
        pageDom.innerHTML = html;

        // Event Handler für den Button registrieren
        pageDom.querySelectorAll(".id").forEach(e => e.textContent = this._recordId);
        //pageDom.querySelector("#show-more-button").addEventListener("click", () => this._onShowMoreButtonClicked());

        pageDom.querySelector("#einMonat").addEventListener("click", () => this._PreisWechsel(this._data.preis1, this._data.currency));
        pageDom.querySelector("#dreiMonat").addEventListener("click", () => this._PreisWechsel(this._data.preis3, this._data.currency));
        pageDom.querySelector("#sechsMonat").addEventListener("click", () => this._PreisWechsel(this._data.preis6, this._data.currency));
        pageDom.querySelector("#zwölfMonat").addEventListener("click", () => this._PreisWechsel(this._data.preis12, this._data.currency));


        // Fertig bearbeitetes HTML-Element zurückgeben
        return pageDom;
    }

    _PreisWechsel(preisNeu, währung) {
      document.getElementById("preis").innerHTML = preisNeu + " "+ währung;
        }
}

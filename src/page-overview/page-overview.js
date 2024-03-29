"use strict";

/**
 * Klasse PageOverview: Stellt die Startseite der App zur Verfügung
 */
class PageOverview {
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
    async show() {
        // Anzuzeigenden Seiteninhalt nachladen
        let html = await fetch("page-overview/page-overview.html");
        let css = await fetch("page-overview/page-overview.css");

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

        this._renderHardwareTiles(pageDom);

        document.querySelector("header .category #laptop").addEventListener("click", () => this.filter(pageDom, 10));
        document.querySelector("header .category #smartphone").addEventListener("click", () => this.filter(pageDom, 20));
        document.querySelector("header .category #monitore").addEventListener("click", () => this.filter(pageDom, 30));
        document.querySelector("header .category #kameras").addEventListener("click", () => this.filter(pageDom, 40));
        document.querySelector("header .category #accessories").addEventListener("click", () => this.filter(pageDom, 50));

        document.querySelector("#laptop").addEventListener("click", () => this.filter(pageDom, 10));
        document.querySelector("#smartphone").addEventListener("click", () => this.filter(pageDom, 20));
        document.querySelector("#monitore").addEventListener("click", () => this.filter(pageDom, 30));
        document.querySelector("#kameras").addEventListener("click", () => this.filter(pageDom, 40));
        document.querySelector("#accessories").addEventListener("click", () => this.filter(pageDom, 50));

        document.querySelector("header nav #logo").addEventListener("click", () => this.reload(pageDom));

        this._app.setPageTitle("Rent & Collect");
        this._app.setPageCss(css);
        this._app.setPageHeader(pageDom.querySelector("header"));
        this._app.setPageContent(pageDom.querySelector("main"));
    }

    /**
     * Hilfsmethode, welche den HTML-Code zur Darstellung der Kacheln auf
     * der Startseite erzeugt.
     *
     * @param {HTMLElement} pageDom Wurzelelement der eingelesenen HTML-Datei
     * mit den HTML-Templates dieser Seite.
     */
    _renderHardwareTiles(pageDom) {
        let mainElement = pageDom.querySelector("main");
        let templateElement = pageDom.querySelector("#template-tile");

        this._app.database.getAllRecords().forEach(hardware => {
            let html = templateElement.innerHTML;
            html = html.replace("{HREF}", `#/Detail/${hardware.id}`);
            html = html.replace("{IMG}", hardware.img);
            html = html.replace("{NAME}", hardware.name);
            html = html.replace("{PREIS}", hardware.preis12);

            mainElement.innerHTML += html;
        });
    }


    /** Veränderung der Titel je nach eingeblendeter Kategorie die durch eine 2-stellige Zahl übergeben wird */
    filter(pageDom, n){

      switch (n) {
  case 10:

    document.querySelector(" header .wrapper #title").innerHTML ="Laptops";
    break;

  case 20:
    document.querySelector(" header .wrapper #title").innerHTML ="Smartphones";
    break;

  case 30:
  document.querySelector(" header .wrapper #title").innerHTML ="Monitore";
    break;

  case 40:
  document.querySelector(" header .wrapper #title").innerHTML ="Kameras";
    break;

  case 50:
  document.querySelector(" header .wrapper #title").innerHTML ="Zubehör";
    break;

  default:
  console.log("default case");
  alert("fehler");
    break;
}

        /** Ersetzen der Tiles je nach selektierter Kategorie aus dem Navigationsbereich */
        let mainElement = pageDom.querySelector("main");
        let templateElement = pageDom.querySelector("#template-tile");

        this._app.database.getRecordByCategory(n).forEach(hardware => {
            let html = templateElement.innerHTML;
            html = html.replace("{HREF}", `#/Detail/${hardware.id}`);
            html = html.replace("{IMG}", hardware.img);
            html = html.replace("{NAME}", hardware.name);
            html = html.replace("{PREIS}", hardware.preis12);
            mainElement.innerHTML += html;
        });
        this._app.setPageContent(pageDom.querySelector("main"));
    }

    reload(pageDom) {
        document.querySelector(" header .wrapper #title").innerHTML ="Produktübersicht"; /** Zurücksetzen des Titels nach Klick auf Start */
        this._renderHardwareTiles(pageDom);
        this._app.setPageContent(pageDom.querySelector("main"));

    }
}

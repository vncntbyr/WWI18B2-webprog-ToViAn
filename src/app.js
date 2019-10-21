class App {

    //// Funktionert so nicht!
    // database = new Database();
    // halloString = "Hallo, Welt";

    constructor() {
        this.database = new Database();
        this._title = title
        this._pages = pages
        this._currentPage = null;
    }

    run() {
        // Klick auf das Hamburger-Menu abfangen
        let menuIcon = document.querySelector("header nav .toggle-menu a");
        menuIcon.addEventListener("click", this.toggleHamburgerMenu);

        // Klick auf den Zurück-Pfeil abfangen
        let backIcon = document.querySelector("header nav .go-back a");
        backIcon.addEventListener("click", () => window.history.back());

        // Inhalt der ersten Seite anzeigen
        window.addEventListener("hashchange", () => this._handleRouting());
        this._handleRouting();
    }

    toggleHamburgerMenu() {
        // Menü ein- oder ausblenden
        let menuList = document.querySelector("header nav .menu-right");

        if (menuList.classList.contains("small-screen-hidden")) {
            menuList.classList.remove("small-screen-hidden");
        } else {
            menuList.classList.add("small-screen-hidden");
        }
    }
    /**
    *
    * Single Page Router: Wertet die aktuelle URl aus und entscheidet
    * anhand der Suchmuster in this._pages, welche Klasse aufgerufen werden soll, um
    * die angeforderte App-Seite anzuzegen
    */
    _handleRouting() {
        // Url der anzuzeigenden Seite ermitteln
        let pageUrl = location.hash.slice(1);        // # Zeichen noch am Anfang des Hashs, Slice entfernt die Raute

        if (pageUrl.length === 0) pageUrl = "/";     //Gehe auf Startseite, wenn nichts angegeben

        // RegExes prüfen, welche Klasse aufgerufen werden soll -> kann auch mit Schleife gemacht werden, so aber besser
        let page = this._pages.find{p => matches = pageUrl.match(p.url)};

        if(!page) {
            console.error(`Keine Seite für $(pageUrl) gefunden!`);
        //} else {
        //    console.log(page);
        //}

        // Gefundene Klasse aufrufen, damit die Seite sichtbar wird
        this._currentPage = new page.klass(this);
        this._currentPage.show(matches);
        }
    }
    setPageTitle(title, options) {
        // Optionen auswerten
        options = options ? options : {};
        let isSubPage = options.isSubPage ? options.isSubPage : false;

        // Titel setzen
        document.querySelectorAll(".page-name").forEach(e => e.textContent = title);
        document.title = `${title} – ${this._title}`;

        // Entscheiden, ob der Zurückbutton angezeigt wird, oder nicht
        if (isSubPage) {
            document.querySelector("header nav .go-back").classList.remove("hidden");
            document.querySelector("header nav .dont-go-back").classList.add("hidden");
        } else {
            document.querySelector("header nav .go-back").classList.add("hidden");
            document.querySelector("header nav .dont-go-back").classList.remove("hidden");
        }
    }

    /**
     * Seitenspezifischen CSS-Code aktivieren. Diese Methode muss von den
     * Page-Klassen aufgerufen werden, um seitenspezifische Stylesheet-Regeln
     * zu aktivieren. Das Stylesheet muss hierfür als String übergeben werden.
     *
     * @param {String} css Seitenspezifischer CSS-Code
     */
    setPageCss(css) {
        document.querySelector("#page-css").innerHTML = css;
    }

    /**
    * Austauschen des Inhalts im Kopfbereich der App. Diese Methode muss
    * von den Page-Klassen aufgerufen werden, um etwas im Kopfbereich der
    * App anzuzeigen. Hierfür muss ein (ggf. dynamisch nachgeladenes)
    * HTML-Element mit dem anzuzeigenden Inhalt übergeben werden.
    *
    * BEACHTE: Nicht das HTML-Element selbst, sondern seine Kindelemente
    * werden in der App angezeigt. Somit werden Probleme vermieden, wenn
    * das nachgeladene Element selbst ein <header> oder <main> ist, für
    * dass in der app.css bereits globale Layoutoptionen definiert sind.
    *
     * @param {HTMLElement} element HTML-Element mit dem anzuzeigenden Inhalt
     */
    setPageHeader(element) {
        let container = document.querySelector("header > .content");
        container.innerHTML = "";

        if (!element) return;
        let len = element.childNodes.length;

        for (var i = 0; i < len; i++) {
            let child = element.childNodes[0];
            element.removeChild(child);
            container.appendChild(child);
        }
    }

    /**
     * Austauschen des Inhalts im Hauptbereich der App. Diese Methode muss
     * von den Page-Klassen aufgerufen werden, um etwas im Hauptbereich der
     * App anzuzeigen. Hierfür muss ein (ggf. dynamisch nachgeladenes)
     * HTML-Element mit dem anzuzeigenden Inhalt übergeben werden.
     *
     * BEACHTE: Nicht das HTML-Element selbst, sondern seine Kindelemente
     * werden in der App angezeigt. Somit werden Probleme vermieden, wenn
     * das nachgeladene Element selbst ein <header> oder <main> ist, für
     * dass in der app.css bereits globale Layoutoptionen definiert sind.
     *
     * @param {HTMLElement} element HTML-Element mit dem anzuzeigenden Inhalt
     */
    setPageContent(element) {
        let container = document.querySelector("#app-main-area");
        container.innerHTML = "";

        if (!element) return;
        let len = element.childNodes.length;

        for (var i = 0; i < len; i++) {
            let child = element.childNodes[0];
            element.removeChild(child);
            container.appendChild(child);
        }
    }    
}

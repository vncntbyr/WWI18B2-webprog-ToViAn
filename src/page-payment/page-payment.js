"use strict";

/**
*   Klasse PageLogin:Ermöglicht dem Benutzer das Anmelden
**/
class PagePayment {



    /**
     * Konstruktor
     * @param {App} app Zentrale Instanz der App-Klasse
     */
    constructor(app) {
        this._app = app;
        this.counter = 1;
    }

    /**
     * Seite anzeigen. Wird von der App-Klasse aufgerufen.
     */
    async show(matches) {
        // Anzuzeigenden Seiteninhalt nachladen
        let html = await fetch("page-payment/page-payment.html");
        let css = await fetch("page-payment/page-payment.css");

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

        //Setzt ersten Tab bei Start der Seite aktiv
        pageDom.querySelector("#overview").classList.add("active");

        //Event Listener für den Weiter Knopf
        pageDom.querySelector("#next").addEventListener("click", () => this.switchpage(this.counter));

        //Event Listener für Zahlmethoden
        pageDom.querySelector("#paypal").addEventListener("click", () => this.openpaypalmodal());
        pageDom.querySelector("#creditcard").addEventListener("click", () => this.opencreditcardmodal());
        pageDom.querySelector("#transaction").addEventListener("click", () => this.opentransactionmodal());

        //Event Listener für Schließen der Modals
        pageDom.getElementsByClassName("close1")[0].addEventListener("click", () => this.closepaypalmodal());
        pageDom.getElementsByClassName("close2")[0].addEventListener("click", () => this.closecreditcardmodal());
        pageDom.getElementsByClassName("close3")[0].addEventListener("click", () => this.closetransactionmodal());

        this._app.setPageTitle(`Startseite`, {isSubPage: true});
        this._app.setPageCss(css);
        this._app.setPageHeader(pageDom.querySelector("header"));
        this._app.setPageContent(pageDom.querySelector("main"));
    }

    //Diese Funktion schaltet zwischen der verschiedenen Seiten durch
    switchpage(counter){

        switch(counter) {
            //Standardsicht entfernen, Adresseingabensicht aktivieren
            case 1:
            document.querySelector("#overview").classList.remove("active");
            document.querySelector("#adress").classList.add("active");
            document.querySelector("#content-overview").style.display ="none";
            document.querySelector("#content-adress").style.display ="block";
            this.counter = 2;
            break;

            //Adresseingabensicht entfernen, Zahlungssicht aktivieren
            case 2:
            document.querySelector("#adress").classList.remove("active");
            document.querySelector("#paymethod").classList.add("active");
            document.querySelector("#content-adress").style.display ="none";
            document.querySelector("#content-paymethod").style.display ="block";
            this.counter = 3;
            break;

            //Zahlungssiccht entfernen, Bestellabschlusssicht aktivieren
            case 3:
            document.querySelector("#paymethod").classList.remove("active");
            document.querySelector("#finish").classList.add("active");
            document.querySelector("#content-paymethod").style.display ="none";
            document.querySelector("#content-finish").style.display ="block";
            document.querySelector("#next").style.display ="none";
            break;

        }
    }
    openpaypalmodal(){
        document.querySelector("#paypalmodal").style.display = "block";
    }
    opencreditcardmodal(){
        document.querySelector("#creditcardmodal").style.display = "block";
    }
    opentransactionmodal(){
        document.querySelector("#transactionmodal").style.display = "block";
    }

    closepaypalmodal(){
        document.querySelector("#paypalmodal").style.display = "none";
    }
    closecreditcardmodal(){
        document.querySelector("#creditcardmodal").style.display = "none";
    }
    closetransactionmodal(){
        document.querySelector("#transactionmodal").style.display = "none";
    }
}

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
        let counter = 0;
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


        pageDom.querySelector("#next").addEventListener("click", () => this.switchpage());

        this._app.setPageTitle("R&C - Zahlvorgang");
        this._app.setPageCss(css);
        this._app.setPageHeader(pageDom.querySelector("header"));
        this._app.setPageContent(pageDom.querySelector("main"));
    }

    switchpage(){
        alert("Hilfe");
        let stepElements = document.querySelectorAll(".pagination .step");
        stepElements.forEach(e => e.classList.remove("active"));



        let currentStep = 1;

        let currentStepElement = document.querySelector(`.pagination .step[data-step-number="${currentStep}"]`);
        if (currentStepElement) currentStepElement.classList.add("active")
    }
}

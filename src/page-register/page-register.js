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

        pageDom.querySelector("#signup").addEventListener("submit", (e) => this.stopsubmit(e));

        this._app.setPageTitle(`Startseite`, {isSubPage: true});
        this._app.setPageCss(css);
        this._app.setPageHeader(pageDom.querySelector("header"));
        this._app.setPageContent(pageDom.querySelector("main"));
    }

    stopsubmit(e){
        //Nachladen verhindern bzw Submit Button hat jetzt keine Funktion (wegen des Umfangs)
        e.preventDefault();

        if(document.getElementById("vorname").value == "" || document.getElementById("nachname").value =="" || document.getElementById("password").value =="") {
            //Felder wurden nicht ausgefüllt
            alert("Bitte Angaben machen");
            document.getElementById("vorname").value = "";
            document.getElementById("nachname").value ="";
            document.getElementById("email").value = "";
            document.getElementById("password").value ="";
        } else {
            //Jedes notwendige Feld wurde auusgefüllt
            document.getElementById("vorname").value = "";
            document.getElementById("nachname").value ="";
            document.getElementById("email").value = "";
            document.getElementById("password").value ="";

            document.getElementById("hidden").style.display = "block";
            document.getElementById("vorname").style.display ="none";
            document.getElementById("nachname").style.display ="none";
            document.getElementById("email").style.display ="none";
            document.getElementById("password").style.display ="none";
            document.getElementById("submit").style.display ="none";

            //nach kurzem Warten wird man zum Login weitergeführt
            setTimeout(function(){
                window.location.href = "/#/Login"}
            , 550);
        }
    }



}

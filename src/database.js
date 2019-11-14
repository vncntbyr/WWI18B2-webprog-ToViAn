"use strict";

/**
 * Klasse Database: Kümmert sich um die Datenhaltung der App
 *
 * Diese Klasse beinhaltet alle Datensätze der App. Entgegen dem Namen handelt
 * es sich nicht wirklich um eine Datenbank, da sie lediglich ein paar statische
 * Testdaten enthält. Ausgefeilte Methoden zum Durchsuchen, Ändern oder Löschen
 * der Daten fehlen komplett, könnten aber in einer echten Anwendung relativ
 * einfach hinzugefügt werden.
 */
class Database {
    /**
     * Konstruktor.
     */
    constructor() {
        this._data = [
            {
                id:          1,
                img:        "images/Kamera.png",
                name:       "Kamera",
                preis:      "149",
                currency:   "Euro",
                status:     "available",
                size:       "medium",
                verfügbar:  "images/verfügbar.png",
            },{
                id:          2,
                img:        "images/Laptop.png",
                name:       "Laptop",
                preis1:     "99",
                preis3:     "199",
                preis6:     "499",
                preis12:    "899",
                currency:   "Euro",
                status:     "available",
                size:       "medium",
                verfügbar:  "images/verfügbar.png",
                category:   10,
            },{
                id:          3,
                img:        "images/Maus.png",
                name:       "Maus",
                preis:      "29",
                currency:   "Euro",
                status:     "available",
                size:       "medium",
                verfügbar:  "images/verfügbar.png",
                category:   "equimpent",
            },{
                id:          4,
                img:        "images/Monitor.png",
                name:       "Monitor",
                preis:      "129",
                currency:   "Euro",
                status:     "available",
                size:       "medium",
                verfügbar:  "images/verfügbar.png",
            },{
                id:          5,
                img:        "images/Smartphone.png",
                name:       "Smartphone",
                preis:      "699",
                currency:   "Euro",
                status:     "available",
                size:       "medium",
                verfügbar:  "images/verfügbar.png",
            },{
                id:          6,
                img:        "images/Tastatur.png",
                name:       "Tastatur",
                preis:      "49",
                currency:   "Euro",
                status:     "available",
                size:       "medium",
                verfügbar:  "images/verfügbar.png",
                category:   "equimpent",
            },
        ];
    }

    /**
     * Diese Methode sucht einen Datensazt anhand seiner ID in der Datenbank
     * und liefert den ersten, gefundenen Treffer zurück.
     *
     * @param  {Number} id Datensatz-ID
     * @return {Object} Gefundener Datensatz
     */
    getRecordById(id) {
        id = parseInt(id);
        return this._data.find(r => r.id === id);
    }

    /**
     * Diese Methode gibt eine Liste mit allen Datensätzen zurück.
     * @return {Array} Liste aller Datensätze
     */
    getAllRecords() {
        return this._data;
    }

    /*Funktion einfügen, welche heißt getRecordByCategory{} Soll nach Category Datensätze holen*/
    getRecordByCategory(category){
        category = parseInt(category);
        return this._data.find(r => r.category === category);
    }

}

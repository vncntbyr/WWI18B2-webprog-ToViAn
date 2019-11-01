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
                preis:      "100",
                currency:   "Euro",
                status:     "available",
                size:       "medium",
            },{
                id:          2,
                img:        "images/Laptop.png",
                name:       "Laptop",
                preis:      "100",
                currency:   "Euro",
                status:     "available",
                size:       "medium",
            },{
                id:          3,
                img:        "images/Maus.png",
                name:       "Maus",
                preis:      "100",
                currency:   "Euro",
                status:     "available",
                size:       "medium",
            },{
                id:          4,
                img:        "images/Monitor.png",
                name:       "Monitor",
                preis:      "100",
                currency:   "Euro",
                status:     "available",
                size:       "medium",
            },{
                id:          5,
                img:        "images/Smartphone.png",
                name:       "Smartphone",
                preis:      "100",
                currency:   "Euro",
                status:     "available",
                size:       "medium",
            },{
                id:          6,
                img:        "images/Tastatur.png",
                name:       "Tastatur",
                preis:      "100",
                currency:   "Euro",
                status:     "available",
                size:       "medium",
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
}

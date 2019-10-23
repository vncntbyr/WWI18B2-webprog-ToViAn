class Database {
    /**
     * Konstruktor.
     *Ist jetzt einfach mal aus der Ausgabe rauskopiert und abgeändert auf unser Beispiel
     *Noch zu fragen, ob man das so oder als einzelne JSON Dateien realisieren soll?
     */
    constructor() {
        this._data = [
            {
                id:          1,
                img:        "xxx",
                name:       "Laptop",
                preis:      "299.99",
                currency:   "Euro";
                status:     "available",
                size:       "medium",
            },{
                id:          2,
                img:        "xxx",
                name:       "Smartphone",
                preis:      "299.99",
                currency:   "Euro";
                status:     "available",
                size:       "small",
            },{
                id:          3,
                img:        "xxx",
                name:       "Drohne",
                preis:      "299.99",
                currency:   "Euro";
                status:     "available",
                size:       "large",
            },{
                id:          4,
                img:        "xxx",
                name:       "Tastatur",
                preis:      "299.99",
                currency:   "Euro";
                status:     "available",
                size:       "medium",
            },{
                id:          5,
                img:        "xxx",
                name:       "Kamera",
                preis:      "299.99",
                currency:   "Euro";
                status:     "available",
                size:       "medium",
            },{
                id:          6,
                img:        "xxx",
                name:       "Maus",
                preis:      "299.99",
                currency:   "Euro";
                status:     "available",
                size:       "small",
            },{
                id:          7,
                img:        "xxx",
                name:       "Bildschirm",
                preis:      "299.99",
                currency:   "Euro";
                status:     "available",
                size:       "large",
            },
            {
                id:         8,
                img:        "xxx",
                name:       "Stativ",
                preis:      "299.99",
                currency:   "Euro";
                status:     "available",
                size:       "large",
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

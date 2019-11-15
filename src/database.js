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
 /*
 Kategorien:
 Laptops = 10
 sets = 20
 monitore = 30
 kamera = 40
 accessories = 50
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
                name:       "CANON EOS 250D",
                preis1:     "64,90",
                preis3:     "44,90",
                preis6:     "29,90",
                preis12:    "24,90",
                status:     "available",
                size:       "medium",
                verfügbar:  "images/verfügbar.png",
                nverfügbar: "images/nictVerfügbar.png",
                bverüfgbar: "images/baldVerfügbar.png",
                tDetail1:   "Effektive Fotoauflösung",
                tDetail1Inf:"24.1 Megapixel",
                tDetail2:   "Bildschirmdiagonale (cm/Zoll)",
                tDetail2Inf:"7.7 cm / 3.0 Zoll",
                tDetail3:   "Akku",
                tDetail3Inf:"2000mAh",
                tDetail4:   "Brennweite",
                tDetail4Inf:"18-55 mm",
                category:   40,
            },{
                id:          2,
                img:        "images/Laptop.png",
                name:       "APPLE MacBook Pro",
                preis1:     "229,90",
                preis3:     "169,90",
                preis6:     "149,90",
                preis12:    "129,90",
                status:     "available",
                size:       "medium",
                verfügbar:  "images/verfügbar.png",
                nverfügbar: "images/nictVerfügbar.png",
                bverüfgbar: "images/baldVerfügbar.png",
                tDetail1:   "Prozessor",
                tDetail1Inf:"2,3 GHz 8‑Core Intel Core i9",
                tDetail2:   "Arbeitsspeicher",
                tDetail2Inf:"16 GB",
                tDetail3:   "Festplatte",
                tDetail3Inf:"SSD, 512 GB",
                tDetail4:   "Grafikkarte",
                tDetail4Inf:"Radeon™ Pro 560X",
                category:   10,
            },{
                id:          3,
                img:        "images/Maus.png",
                name:       "ACER Nitro Gaming Maus",
                preis1:     "99",
                preis3:     "199",
                preis6:     "499",
                preis12:    "899",
                status:     "available",
                size:       "medium",
                verfügbar:  "images/verfügbar.png",
                nverfügbar: "images/nictVerfügbar.png",
                bverüfgbar: "images/baldVerfügbar.png",
                tDetail1:   "Max. Auflösung",
                tDetail1Inf:"4000 DPI",
                tDetail2:   "Anzahl Funktionstasten",
                tDetail2Inf:"6",
                tDetail3:   "Beleuchtete Tasten",
                tDetail3Inf:"Ja",
                tDetail4:   "Anschlüsse",
                tDetail4Inf:"USB",
                category:   50,
            },{
                id:          4,
                img:        "images/Monitor.png",
                name:       "PHILIPS 278E8QJAB",
                preis1:     "19,90",
                preis3:     "9,90",
                preis6:     "7,90",
                preis12:    "5,90",
                currency:   "Euro",
                status:     "available",
                size:       "medium",
                verfügbar:  "images/verfügbar.png",
                nverfügbar: "images/nictVerfügbar.png",
                bverüfgbar: "images/baldVerfügbar.png",
                tDetail1:   "Sichtbare Bildschirmdiagonale (cm)",
                tDetail1Inf:"69,00 cm  (27,00 Zoll)",
                tDetail2:   "Bildschirmauflösung",
                tDetail2Inf:"1920 x 1080 (Full HD)",
                tDetail3:   "Hintergrundbeleuchtung",
                tDetail3Inf:"LED",
                tDetail4:   "Curved Design",
                tDetail4Inf:"Ja",
                category:   30,
            },{
                id:          5,
                img:        "images/Iphonexs64.png",
                name:       "APPLE Iphone XS 64GB",
                preis1:     "89,90",
                preis3:     "49,90",
                preis6:     "39,90",
                preis12:    "34,90",
                currency:   "Euro",
                status:     "available",
                size:       "medium",
                verfügbar:  "images/verfügbar.png",
                nverfügbar: "images/nictVerfügbar.png",
                bverüfgbar: "images/baldVerfügbar.png",
                tDetail1:   "Betriebssystem",
                tDetail1Inf:"iOS 12",
                tDetail2:   "Prozessor",
                tDetail2Inf:"A12 Bionic",
                tDetail3:   "Displaydiagonale",
                tDetail3Inf:"14.7 cm / 5.8 Zoll",
                tDetail4:   "Speicherkapazität",
                tDetail4Inf:"64 GB",
                category:   20,
            },{
                id:          6,
                img:        "images/Tastatur.png",
                name:       "Roccat Vulcan 120 AIMO",
                preis1:     "22,90",
                preis3:     "12,90",
                preis6:     "9,90",
                preis12:    "7,90",
                currency:   "Euro",
                status:     "available",
                size:       "medium",
                verfügbar:  "images/verfügbar.png",
                nverfügbar: "images/nictVerfügbar.png",
                bverüfgbar: "images/baldVerfügbar.png",
                tDetail1:   "Schaltertechnologie",
                tDetail1Inf:"Rubber Dome",
                tDetail2:   "Beleuchtung",
                tDetail2Inf:"RGB, 6 Zonen",
                tDetail3:   "Anpassbare Beleuchtung",
                tDetail3Inf:"Ja",
                tDetail4:   "Handballenauflage",
                tDetail4Inf:"Integriert",
                category:   50,
            },{
                id:          7,
                img:        "images/Laptop.png",
                name:       "MICROSOFT Surface Pro X 16GB",
                preis1:     "119,90",
                preis3:     "79,90",
                preis6:     "69,90",
                preis12:    "59,90",
                status:     "available",
                size:       "medium",
                verfügbar:  "images/verfügbar.png",
                nverfügbar: "images/nictVerfügbar.png",
                bverüfgbar: "images/baldVerfügbar.png",
                tDetail1:   "Prozessor",
                tDetail1Inf:"Microsoft® SQ1™ basierend auf Qualcomm®",
                tDetail2:   "Arbeitsspeicher",
                tDetail2Inf:"16 GB",
                tDetail3:   "Festplatte",
                tDetail3Inf:"SSD, 256 GB",
                tDetail4:   "Grafikkarte",
                tDetail4Inf:"Microsoft® SQ1™ Adreno™ 685 GPU",
                category:   10,
            },{
                id:          8,
                img:        "images/Smartphone.png",
                name:       "HUAWEI P30 Pro 128GB",
                preis1:     "139,90",
                preis3:     "109,90",
                preis6:     "99,90",
                preis12:    "69,90",
                currency:   "Euro",
                status:     "available",
                size:       "medium",
                verfügbar:  "images/verfügbar.png",
                nverfügbar: "images/nictVerfügbar.png",
                bverüfgbar: "images/baldVerfügbar.png",
                tDetail1:   "Betriebssystem",
                tDetail1Inf:"Android 9.0, EMUI 9.1",
                tDetail2:   "Prozessor",
                tDetail2Inf:"Kirin 980",
                tDetail3:   "Displaydiagonale",
                tDetail3Inf:"16.43 cm / 6.47 Zoll",
                tDetail4:   "Speicherkapazität",
                tDetail4Inf:"128 GB",
                category:   20,
            },{
                id:          9,
                img:        "images/LG34UC79G.png",
                name:       "LG 34UC79G",
                preis1:     "49,90",
                preis3:     "32,90",
                preis6:     "27,90",
                preis12:    "22,90",
                currency:   "Euro",
                status:     "available",
                size:       "medium",
                verfügbar:  "images/verfügbar.png",
                nverfügbar: "images/nictVerfügbar.png",
                bverüfgbar: "images/baldVerfügbar.png",
                tDetail1:   "Sichtbare Bildschirmdiagonale (cm)",
                tDetail1Inf:"86,00 cm  (34,00 Zoll)",
                tDetail2:   "Bildschirmauflösung",
                tDetail2Inf:"3440 x 1440 (UWQHD)",
                tDetail3:   "Hintergrundbeleuchtung",
                tDetail3Inf:"LED",
                tDetail4:   "Curved Design",
                tDetail4Inf:"Ja",
                category:   30,
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
        return this._data.filter(r => r.category === category);
    }

}

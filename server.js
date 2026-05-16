const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`[CONNESSIONE APP] URL Richiesto: ${req.url}`);

    // Se l'applicazione sta cercando il file ReadingCorner.js
    if (req.url.includes('ReadingCorner.js')) {
        console.log(`[HACK] Invio il file ReadingCorner.js personalizzato!`);
        
        // Diciamo all'app che questo è un file JavaScript valido
        res.writeHead(200, { 'Content-Type': 'application/javascript; charset=utf-8' });
        
        // Questo codice dice all'app che l'angolo lettura è "pronto" ma vuoto, evitando il crash
        res.end(`
            (function() {
                "use strict";
                WinJS.Namespace.define("Yum.ReadingCorner", {
                    initialize: function() { 
                        console.log("ReadingCorner avviato dal server di Andrea!"); 
                    }
                });
            })();
        `);
    } else {
        // Risposta standard per le altre chiamate dell'applicazione
        res.writeHead(200, { 'Content-Type': 'application/xml; charset=utf-8' });
        res.end(`<?xml version="1.0" encoding="utf-8"?><tile><visual><binding template="TileSquareBlock"><text id="1">Pronto</text></binding></visual></tile>`);
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server configurato sulla porta ${PORT}`);
});

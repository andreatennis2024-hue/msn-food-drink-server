const http = require('http');

const server = http.createServer((req, res) => {
    // Questo mostrerà nei log di Render la richiesta esatta dell'app MSN!
    console.log(`[CONNESSIONE APP] Richiesta ricevuta: ${req.url}`);

    // Risposta XML standard per evitare che l'app dia errore all'avvio
    res.writeHead(200, { 'Content-Type': 'application/xml; charset=utf-8' });
    res.end(`<?xml version="1.0" encoding="utf-8"?><tile><visual><binding template="TileSquareBlock"><text id="1">Server Pronto</text></binding></visual></tile>`);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server finto attivo sulla porta ${PORT}`);
});

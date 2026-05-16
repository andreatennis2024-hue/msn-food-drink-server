const http = require('http');

const server = http.createServer((req, res) => {
    // Stampa l'Host (es. ://bing.com) e l'URL richiesto
    console.log(`[CONNESSIONE] Host: ${req.headers.host} | URL: ${req.url}`);

    res.writeHead(200, { 'Content-Type': 'application/xml; charset=utf-8' });
    res.end(`<?xml version="1.0" encoding="utf-8"?><tile><visual><binding template="TileSquareBlock"><text id="1">Server Pronto</text></binding></visual></tile>`);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server configurato sulla porta ${PORT}`);
});

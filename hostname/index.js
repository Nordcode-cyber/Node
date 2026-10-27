// Cargar el módulo HTTP
const http = require("http");

const hostname = "localhost";
const port = 7000;

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  // Establecer el encabezado HTTP de la respuesta con el estado HTTP y el tipo de contenido
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Enviar el cuerpo de la respuesta "Hello World"
  res.end("Hello World from  Node.js\n");
});

// Muestra un registro cuando el servidor empieza a escuchar
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

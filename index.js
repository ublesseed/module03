// Simple Node.js Hello World application with name input
const readline = require('readline');
const http = require('http');
const url = require('url');

// Create readline interface for console input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to get greeting message
function getGreeting(name) {
  return name ? `Hello, ${name}!` : 'Hello, World!';
}

// Console interaction
rl.question('What is your name? (Press Enter for "World"): ', (name) => {
  const greeting = getGreeting(name.trim());
  console.log(greeting);
  rl.close();
});

// HTTP server that accepts name as query parameter
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const name = parsedUrl.query.name;
  const greeting = getGreeting(name);
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`${greeting}\nTry: http://localhost:${PORT}/?name=YourName\n`);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Try visiting: http://localhost:${PORT}/?name=YourName`);
});
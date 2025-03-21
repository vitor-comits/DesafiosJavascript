const { createServer } = require('node:http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

let counter = 0;

function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

const server = createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (req.url === '/count' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const incrementBy = data.incrementBy;

        if (typeof incrementBy === 'number' && Number.isInteger(incrementBy) && incrementBy > 0) {
          counter += incrementBy;
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ counter }));
        } else {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Invalid input' }));
        }
      } catch (error) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Invalid input' }));
      }
    });
  } else if (req.url.startsWith('/is-prime-number') && req.method === 'GET') {
    const numberParam = parsedUrl.query.number;

    if (!numberParam || isNaN(numberParam) || parseInt(numberParam) < 1) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Invalid input' }));
      return;
    }

    const number = parseInt(numberParam);
    const result = { isPrime: isPrime(number) };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
  } else if (req.url === '/health-check' && req.method === 'GET') {
    const timestamp = new Date().toISOString();
    const response = {
      success: true,
      timestamp: timestamp,
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Rota não encontrada');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
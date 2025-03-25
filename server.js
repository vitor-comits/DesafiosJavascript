//Para USD: http://localhost:3000/stock-insight
//Para BRL: http://localhost:3000/stock-insight?currency=brl
//Desafio 2
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/stock-insight', async (req, res) => {
  const currency = req.query.currency ? req.query.currency.toLowerCase() : 'usd';

  if (currency !== 'usd' && currency !== 'brl') {
    return res.status(400).json({ error: 'Moeda inválida. Use usd ou brl.' });
  }

  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
    );
    const btcPrice = response.data.bitcoin[currency];

    let suggestion;
    if (currency === 'brl') {
      if (btcPrice < 300000) {
        suggestion = 'Bom momento para compra!';
      } else if (btcPrice >= 300000 && btcPrice <= 450000) {
        suggestion = 'Preço razoável. Avalie antes de comprar.';
      } else {
        suggestion = 'Bitcoin está caro. Pode ser melhor esperar.';
      }
    } else {
      if (btcPrice < 60000) {
        suggestion = 'Bom momento para compra!';
      } else if (btcPrice >= 60000 && btcPrice <= 80000) {
        suggestion = 'Preço razoável. Avalie antes de comprar.';
      } else {
        suggestion = 'Bitcoin está caro. Pode ser melhor esperar.';
      }
    }

    res.json({
      btc_price: btcPrice,
      currency: currency,
      suggestion: suggestion,
    });
  } catch (error) {
    console.error('Erro ao buscar dados da API CoinGecko:', error);
    res.status(500).json({ error: 'Falha ao buscar dados da API CoinGecko.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
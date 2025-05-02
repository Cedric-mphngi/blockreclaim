const ticker = document.getElementById("ticker-content");

async function fetchPrices() {
  try {
    const cryptoRes = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd");
    const stockRes = await fetch("https://api.twelvedata.com/price?symbol=AAPL,TSLA,GOOGL&apikey=demo");

    const cryptoData = await cryptoRes.json();
    const stockData = await stockRes.json();

    let tickerText = `Crypto: BTC $${cryptoData.bitcoin.usd} | ETH $${cryptoData.ethereum.usd} | DOGE $${cryptoData.dogecoin.usd} || `;

    tickerText += `Stocks: AAPL $${stockData.AAPL.price} | TSLA $${stockData.TSLA.price} | GOOGL $${stockData.GOOGL.price}`;

    ticker.textContent = tickerText;
  } catch (error) {
    ticker.textContent = "Error loading market data.";
    console.error(error);
  }
}

fetchPrices();
setInterval(fetchPrices, 30000); // update every 30 seconds

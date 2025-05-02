
// Live Crypto Data from CoinGecko
fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd")
  .then(response => response.json())
  .then(data => {
    document.getElementById("crypto-prices").innerHTML = `
      <p>Bitcoin: $${data.bitcoin.usd}</p>
      <p>Ethereum: $${data.ethereum.usd}</p>
    `;
  });

// Dummy Stock Data (Alpha Vantage needs a real API key)
document.getElementById("stock-prices").innerHTML = `
  <p>Apple (AAPL): $170.50</p>
  <p>Google (GOOGL): $2823.10</p>
`;

// Chart.js for client distribution
const ctx = document.getElementById('geoChart').getContext('2d');
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['South Africa', 'Pakistan', 'Portugal', 'Others'],
    datasets: [{
      label: 'Client Distribution',
      data: [15, 7, 25, 53],
      backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0']
    }]
  }
});

// Animated Counters
function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  let startTime = null;
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    obj.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}

window.onload = () => {
  animateValue("clients", 0, 10000, 2000);
  animateValue("portfolios", 0, 6100, 2000);
  animateValue("countries", 0, 26, 2000);
  animateValue("success", 0, 98, 2000);
};

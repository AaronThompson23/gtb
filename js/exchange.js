// Fetch exchange rates using the Fixer API
fetch('http://data.fixer.io/api/latest?access_key=6d246e843e9b7f280df7317354326182')
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      const rates = data.rates;

      // Define the top currencies you want to display, including USD
      const topCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD'];

      // Filter the rates for the top currencies
      const labels = topCurrencies.filter(currency => rates[currency] !== undefined);
      const values = labels.map(currency => rates[currency]);

      // Get the canvas context
      const ctx = document.getElementById('exchangeRateChart').getContext('2d');

      // Create the flowing line chart
      const myChart = new Chart(ctx, {
        type: 'line', // Line chart
        data: {
          labels: labels, // Currency codes (e.g., USD, GBP, etc.)
          datasets: [{
            label: 'Exchange Rate (Base EUR)',
            data: values, // Corresponding exchange rates
            backgroundColor: 'rgba(239, 243, 255, 0.2)', // Light fill color (transparent)
            borderColor: '#ccd8fe', // Line color
            borderWidth: 2, // Thickness of the line
            pointBackgroundColor: '#ccd8fe', // Color of the points on the line
            pointBorderColor: '#ccd8fe', // Border color of the points
            pointRadius: 0, // Remove intersection points
            fill: true, // Fill the area under the line
            tension: 0.4 // Set tension for smooth curves
          }]
        },
        options: {
          responsive: false, // Disable responsiveness to keep the chart fixed in size
          maintainAspectRatio: false, // Disable aspect ratio to allow precise control of size
          scales: {
            x: {
              grid: {
                display: false // Remove x-axis grid lines
              },
              ticks: {
                color: '#e0eaf2' // Set x-axis label color
              }
            },
            y: {
              beginAtZero: true,
              grid: {
                display: false // Remove y-axis grid lines
              },
              ticks: {
                color: '#e0eaf2' // Set y-axis label color
              }
            }
          }
        }
      });
    } else {
      console.error('Error fetching data:', data.error);
    }
  })
  .catch(error => console.error('Error:', error));

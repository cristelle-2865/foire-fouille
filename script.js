// Exemple de code pour récupérer des données Google Analytics
async function fetchAnalyticsData() {
    const response = await fetch('https://analytics.googleapis.com/v4/reports:batchGet', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            reportRequests: [{
                viewId: 'YOUR_VIEW_ID',
                dateRanges: [{ startDate: '2023-10-01', endDate: '2023-10-31' }],
                metrics: [{ expression: 'ga:sessions' }]
            }]
        })
    });
    const data = await response.json();
    console.log(data);
    // Affichez les données dans votre backoffice
}
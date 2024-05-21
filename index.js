const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/api/standings', async (req, res) => {
    try {
        const response = await axios.get('https://apiv3.apifootball.com/', {
            params: {
                action: 'get_standings',
                league_id: 194,
                APIkey: '9c74298f5318dd689108c32545b765a71b32c2eecce0de8ddf4660151c724393'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

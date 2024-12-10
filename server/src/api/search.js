const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();
const GUARDIAN_API_URL = 'https://content.guardianapis.com/search';
const API_KEY = process.env.GUARDIAN_API_KEY;

router.get('/', async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: 'Enter query' });
  }

  const response = await fetch(`${GUARDIAN_API_URL}?q=${encodeURIComponent(query)}&api-key=${API_KEY}`);
  const data = await response.json();

  // console.log('Guardian API Response:');
  // console.log(JSON.stringify(data, null, 2)));

  if (!data.response || !data.response.results) {
    return res.status(500).json({ error: 'Guardian API - Response error' });
  }

  // Iterate through results
  const results = data.response.results.map(item => ({
    title: item.webTitle,
    url: item.webUrl,
    section: item.sectionName,
    publicationDate: new Date(item.webPublicationDate).toLocaleDateString('en-GB'),
  }));

  res.json({ results });
});

module.exports = router;

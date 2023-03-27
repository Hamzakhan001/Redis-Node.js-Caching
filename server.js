const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 3000;



async function fetchApiData(species) {
	const apiResponse = await axios.get(
	  `https://www.fishwatch.gov/api/species/${species}`
	);
	console.log("Request sent to the API");
	return apiResponse.data;
  }


app.get("/fish/:species", getSpeciesData);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
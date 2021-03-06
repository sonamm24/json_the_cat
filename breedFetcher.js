//const { fetchBreedDescription } = require('./breedFetcher');
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
 
  
    request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
      if (error) {
       callback(error, null)
       return; 
      } 

         const data = JSON.parse(body); 
         //console.log(data);
         callback(null, data[0].description)
    });
  
  

};

module.exports = { fetchBreedDescription };
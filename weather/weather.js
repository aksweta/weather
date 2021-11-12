var weatherApi = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  params: {
    q: 'Ontario,Ca',
    units: 'imperial',
    
  },
  headers: {
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    'x-rapidapi-key': '5ff1866368msh39865b1b7e43bb4p1b83c2jsn05d3d50e0cb6'
  }
};



function getCurrentTemp(response){
    let allDetails = response;
    var currentTemp = 0;
     
    console.log(allDetails);
    currentTemp = allDetails.data.main.temp;
    document.getElementById('temp').innerHTML = parseFloat(currentTemp).toFixed(0);
    
}

function doNotGetTemp(err){
    console.log(err);
}

axios.request(weatherApi)
.then(getCurrentTemp) 
.catch(doNotGetTemp)





const daysweather = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
    params: {q: 'san francisco,us',units: 'imperial'},
    
    headers: {
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    'x-rapidapi-key': '5ff1866368msh39865b1b7e43bb4p1b83c2jsn05d3d50e0cb6'
  }
}

  

function getDaysWeather(response){
    
    var daysWeatherTemp = '';
    var daysWeatherTime = '';


    
    for(var i=0; i < 5;i++){
        
        const n = parseFloat(response.data.list[i].main.temp).toFixed(0);

        daysWeatherTemp 
        += `<div style="font-size:smaller;"><p style="display:inline-block; font-size:large;">${n}</p><p style="display:inline-block; font-size:large;"> °C </p></div>`;  
    } 
    for(var i=0; i < 5;i++){
        const d = new Date(response.data.list[i].dt_txt);
        const n = d.toLocaleTimeString();
        daysWeatherTime
        += `<div style="font-size:smaller;"><p style="display:inline-block;" >${n}</p></div>`;
    }
    
    document.getElementById('hourstemp').innerHTML= daysWeatherTemp;
    document.getElementById('hourstime').innerHTML= daysWeatherTime;
 
}

function doNotGetDays(err){
    console.log(err);
}


axios.request(daysweather)
.then(getDaysWeather) 
.catch(doNotGetDays)






  


  var dispalyDay = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
    params: {
      q: 'ontario,ca',
      units: 'metric or imperial'
    },
    headers: {
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      'x-rapidapi-key': '5ff1866368msh39865b1b7e43bb4p1b83c2jsn05d3d50e0cb6'
    }
  };
  
  
  function getDisplayDay(response){
      let allDetails = response;
      console.log(allDetails);
      
  }
  
  function doNotGetDisplayDay(err){
      console.log(err);
  }
  
  axios.request(dispalyDay)
  .then(getDisplayDay) 
  .catch(doNotGetDisplayDay)
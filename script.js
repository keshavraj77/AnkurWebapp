// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '465b3350dfmsh62cd56c954e3ddfp1d0b0djsnb21eee0c88bc',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

const getWeather = (city)=>{
	cityName.innerHTML = city

fetch('https://api.openweathermap.org/data/2.5/weather?q=+'+city+'&appid=95e549950166bcc380d82fb7825804ab')
	.then(response => response.json())
	.then((response) => {
		console.log(response.main.humidity+"hiii")

		// cloud_number.innerHTML = response.clouds.all
		 city_latitude.innerHTML = response.coord.lat
		 city_longitude.innerHTML = response.coord.lon
		 temp.innerHTML =response.main.temp
		 city_temp2.innerHTML =response.main.temp
		 feels_like.innerHTML = response.main.feels_like
		 city_humidity.innerHTML = response.main.humidity
		 city_humidity2.innerHTML = response.main.humidity
		 min_temp.innerHTML = response.main.temp_min
		 max_temp.innerHTML = response.main.temp_max
		 wind_speed.innerHTML = response.wind.speed
		 wind_speed2.innerHTML = response.wind.speed
		 city_pressure.innerHTML = response.main.pressure
		 city_sunrise.innerHTML = response.sys.sunrise
		 city_sunset.innerHTML = response.sys.sunset
	})
	.catch(err => console.error(err));

	fetch('https://api.openweathermap.org/data/2.5/weather?q=+Lucknow&appid=95e549950166bcc380d82fb7825804ab')
	.then(response => response.json())
	.then((response) => {
		console.log(response.main.humidity+"hiii")
lcw_cloud.innerHTML = response.clouds.all
lcw_humidity.innerHTML=response.main.humidity
lcw_feelslike.innerHTML=response.main.feels_like
lcw_maxtemp.innerHTML=response.main.temp_max
lcw_mintemp.innerHTML=response.main.temp_min
lcw_sunrise.innerHTML=response.sys.sunrise
lcw_sunset.innerHTML=response.sys.sunset
lcw_temp.innerHTML=response.main.temp
lcw_winspd.innerHTML=response.wind.speed
	})
	.catch(err => console.error(err));


fetch('https://api.openweathermap.org/data/2.5/weather?q=+Varanasi&appid=95e549950166bcc380d82fb7825804ab')
	.then(response => response.json())
	.then((response) => {
		console.log(response.main.humidity+"hiii")
var_cloud.innerHTML = response.clouds.all
var_humidity.innerHTML=response.main.humidity
var_feelslike.innerHTML=response.main.feels_like
var_maxtemp.innerHTML=response.main.temp_max
var_mintemp.innerHTML=response.main.temp_min
var_sunrise.innerHTML=response.sys.sunrise
var_sunset.innerHTML=response.sys.sunset
var_temp.innerHTML=response.main.temp
var_winspd.innerHTML=response.wind.speed
	})
	.catch(err => console.error(err));

	fetch('https://api.openweathermap.org/data/2.5/weather?q=+Patna&appid=95e549950166bcc380d82fb7825804ab')
	.then(response => response.json())
	.then((response) => {
		console.log(response.main.humidity+"hiii")
pat_cloud.innerHTML = response.clouds.all
pat_humidity.innerHTML=response.main.humidity
pat_feelslike.innerHTML=response.main.feels_like
pat_maxtemp.innerHTML=response.main.temp_max
pat_mintemp.innerHTML=response.main.temp_min
pat_sunrise.innerHTML=response.sys.sunrise
pat_sunset.innerHTML=response.sys.sunset
pat_temp.innerHTML=response.main.temp
pat_winspd.innerHTML=response.wind.speed
	})
	.catch(err => console.error(err));

	
	fetch('https://api.openweathermap.org/data/2.5/weather?q=+Kolkata&appid=95e549950166bcc380d82fb7825804ab')
	.then(response => response.json())
	.then((response) => {
		console.log(response.main.humidity+"hiii")
kol_cloud.innerHTML = response.clouds.all
kol_humidity.innerHTML=response.main.humidity
kol_feelslike.innerHTML=response.main.feels_like
kol_maxtemp.innerHTML=response.main.temp_max
kol_mintemp.innerHTML=response.main.temp_min
kol_sunrise.innerHTML=response.sys.sunrise
kol_sunset.innerHTML=response.sys.sunset
kol_temp.innerHTML=response.main.temp
kol_winspd.innerHTML=response.wind.speed
	})
	.catch(err => console.error(err));
}


 
submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

 getWeather("Delhi")
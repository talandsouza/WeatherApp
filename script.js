const apiKey = '5d0825e98a9d20c59dac9f2754b3e8ca';

const cityInput = document.getElementById('cityInput');
const getWeatherButton = document.getElementById('getWeatherButton');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const weatherInfo = document.getElementById('weatherInfo');

getWeatherButton.addEventListener('click', async () => {
  const city = cityInput.value.trim();
  
  if (city === '') {
    alert('Please enter a city name.');
    return;
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    cityName.textContent = data.name;
    temperature.textContent = `${data.main.temp.toFixed(1)}°C`;
    description.textContent = data.weather[0].description;
    weatherInfo.style.display = 'block';
  } catch (error) {
    console.error('Error fetching weather data:', error);
    alert('An error occurred while fetching weather data.');
  }
});

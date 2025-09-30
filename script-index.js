/* INDEX PAGE JS */

//Welcome
function updateWelcome(){
  const now = new Date();
  document.getElementById('dynamic-welcome').textContent =
    `Welcome! Today is ${now.toLocaleDateString()} and the time is ${now.toLocaleTimeString()}`;
}
updateWelcome();
setInterval(updateWelcome, 1000);

//Background Color
document.getElementById('bg-btn').addEventListener('click', () => {
  const randomColor = `hsl(${Math.floor(Math.random()*360)},70%,85%)`;
  document.body.style.background = randomColor;
});

//Slideshow
let current = 0;
const slides = document.querySelectorAll('.slide');
function showSlide(i){
  slides.forEach((s,idx)=> s.classList.toggle('active', idx===i));
}
document.getElementById('next').onclick = () => {
  current = (current + 1) % slides.length; showSlide(current);
};
document.getElementById('prev').onclick = () => {
  current = (current - 1 + slides.length) % slides.length; showSlide(current);
};
setInterval(()=>{ current = (current + 1) % slides.length; showSlide(current); },5000);

// Live Weather
async function fetchWeather(){
  try {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=-29.31&longitude=27.48&current_weather=true&hourly=precipitation";
    const response = await fetch(url);
    const data = await response.json();
    const w = data.current_weather;

    const hourIndex = data.hourly.time.findIndex(t => t === w.time);
    const rain = hourIndex !== -1 ? data.hourly.precipitation[hourIndex] : "N/A";

    const dirs = ['N','NE','E','SE','S','SW','W','NW'];
    const windDir = dirs[Math.round(w.winddirection / 45) % 8];

    document.getElementById('weather-info').innerHTML = `
      <ul>
        <li><strong>Temperature:</strong> ${w.temperature}°C</li>
        <li><strong>Wind Speed:</strong> ${w.windspeed} km/h</li>
        <li><strong>Wind Direction:</strong> ${windDir} (${w.winddirection}°)</li>
        <li><strong>Weather Code:</strong> ${w.weathercode}</li>
        <li><strong>Rain (last hour):</strong> ${rain} mm</li>
        <li><strong>Time of Data:</strong> ${w.time}</li>
      </ul>`;
  } catch(err){
    document.getElementById('weather-info').textContent = "Unable to load weather.";
    console.error(err);
  }
}
fetchWeather();

// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

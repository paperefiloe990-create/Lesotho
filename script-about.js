/*ABOUT PAGE JS*/

const destination = {
  history: `Lesotho’s history is deeply tied to the Basotho nation, founded by King Moshoeshoe I in the 19th century. Known for resilience, the Basotho people preserved their independence and identity despite colonial pressures.`,
  culture: `Traditional homes called rondavels still dot the countryside, while the famous Basotho blanket remains a national symbol. Culture thrives in daily life: from traditional songs to horse-riding festivals, beadwork and weaving, and dishes like papa and moroho.`,
  attractions: `Stunning sites include the Maletsunyane Falls, Katse Dam, Thaba Bosiu fortress, Sehlabathebe National Park and Afriski Mountain Resort — Africa’s rare ski destination.`
};

document.getElementById("history-content").innerHTML =
  `<p>${destination.history}</p><p>${destination.culture}</p>`;
document.getElementById("attractions-content").innerHTML =
  `<p>${destination.attractions}</p>`;

// Show More / Show Less
const extra = document.getElementById("extra-info");
const toggleBtn = document.getElementById("toggle-extra");
toggleBtn.addEventListener("click", () => {
  extra.classList.toggle("hidden");
  toggleBtn.textContent = extra.classList.contains("hidden") ? "Show More" : "Show Less";
});

// Random Fun Fact
const funFacts = [
  "Lesotho is the only country entirely above 1,000 meters elevation.",
  "It’s nicknamed the 'Kingdom in the Sky'.",
  "The Basotho blanket is both everyday wear and a cultural emblem.",
  "Afriski is one of the few places to ski in Africa.",
  "The Maletsunyane Falls has a 192-meter single drop!"
];
document.getElementById("fun-text").textContent =
  funFacts[Math.floor(Math.random() * funFacts.length)];

document.getElementById("toggle-fun").addEventListener("click", () => {
  const ft = document.getElementById("fun-text");
  ft.classList.toggle("hidden");
  document.getElementById("toggle-fun").textContent =
    ft.classList.contains("hidden") ? "Reveal a Fun Fact" : "Hide Fun Fact";
});

// Update footer year
document.getElementById('year2').textContent = new Date().getFullYear();

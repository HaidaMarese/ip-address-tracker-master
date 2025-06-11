import { API_KEY } from "./secrets.js";

const ipDisplay = document.getElementById("ip");
const locationDisplay = document.getElementById("location");
const timezoneDisplay = document.getElementById("timezone");
const ispDisplay = document.getElementById("isp");
const form = document.getElementById("ip-form");
const input = document.getElementById("ip-input");

let map = L.map("map").setView([51.505, -0.09], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
let marker = L.marker([51.505, -0.09]).addTo(map);

// IPv4 regex
function isValidIP(ip) {
  const ipv4 = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
  return ipv4.test(ip);
}

function isValidDomain(domain) {
  return /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(domain);
}

async function fetchIPData(query = "") {
  if (!isValidIP(query) && !isValidDomain(query)) {
    alert("Enter a valid IP or domain.");
    return;
  }

  const param = isValidIP(query) ? "ipAddress" : "domain";
  const endpoint = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&${param}=${query}`;

  try {
    const res = await fetch(endpoint);
    const data = await res.json();

    ipDisplay.textContent = data.ip;
    locationDisplay.textContent = `${data.location.city}, ${data.location.region}, ${data.location.country}`;
    timezoneDisplay.textContent = `UTC ${data.location.timezone}`;
    ispDisplay.textContent = data.isp;

    const { lat, lng } = data.location;
    map.setView([lat, lng], 13);
    marker.setLatLng([lat, lng]);
  } catch (error) {
    alert("Failed to fetch location data.");
    console.error(error);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = input.value.trim();
  if (inputValue) {
    fetchIPData(inputValue);
  }
});

(async () => {
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const { ip } = await res.json();
    fetchIPData(ip);
  } catch (error) {
    console.error("Could not get user's IP.", error);
  }
})();

# IP Address Tracker

This project is a real-time IP Address Tracker that lets users enter an IP address or domain and see detailed information including:

- IP address

- Location (City, Region, Country)

- Timezone

- ISP

- A marker on the map powered by LeafletJS


## APIs used:

IPify API for geolocation

ipify.org for fetching the user’s IP address



##  Live Demo

[Click to view deployed site](https://ip-address-tracker-master-blond-iota.vercel.app/)

## Screeshot

![Screenshot](https://github.com/user-attachments/assets/0e76a23b-077f-4c5e-bc5f-48c7977c01b2)


##  Features

- IP/domain lookup
- Interactive map with LeafletJS
- Responsive UI
- Real-time IP fetch on page load
- Input validation

##  Technologies

- HTML, CSS, JavaScript
- LeafletJS
- IPify Geolocation API
- Vercel (Deployment)

##  Setup

Clone the repo and add your own `secrets.js` with your API key:

```js
// secrets.js
export const API_KEY = "your_key_here";

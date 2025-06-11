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

## Reflection

This project improved my API and DOM skills. One tough part was checking if the input was a valid IP or domain, which I solved using regex. I also learned how to update Leaflet maps without refreshing the page.

I made sure the layout works on all screen sizes and followed accessibility rules. Next time, I’d add better user feedback like a loading message and use a tool like Vite to organize the files better.

##  Setup

Clone the repo and add your own `secrets.js` with your API key:

```js
// secrets.js
export const API_KEY = "your_key_here";

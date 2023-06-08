import CurrentLocation from "./CurrentLocation";
const currentLoc = new CurrentLocation();

const initApp = () => {
    //add Listeners
    const getButton = document.getElementById("getLocation");
    getButton.addEventListener("click", getGeoWeather);

    //set up 

    //load weather
};

document.addEventListener("DOMContentLoaded", initApp);

const getGeoWeather = (event) => {
    if(event) {
        
    }
}
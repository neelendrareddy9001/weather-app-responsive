import CurrentLocation from "./CurrentLocation";
import { addSpinner } from "./domFunctions";
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
        if(event.type === "click") {
             const mapIcon = document.querySelector(".fa-map-marker-alt");
             addSpinner(mapIcon);
        }
    }

    if(!navigator.geolocation) geoError();
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}

const geoError = (errObj) => {
    const errMsg = errObj.message ? errObj.message : "Geolocation not supported";
    displayError(errMsg, errMsg);
}
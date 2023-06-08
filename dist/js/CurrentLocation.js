export default class CurrentLocation {
    constructor () {
        this._name = "Current Location";
        this._lat = null;
        this._lon = null;
        this._unit = "imperial";
    }

    getName () {
        return this._name;
    }

    setName (name) {
        this._name = name;
    }

    getLat () {
        return this._lat;
    }
}
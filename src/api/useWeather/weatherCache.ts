export class WeatherCache {
  static get userLocation() {
    
    if (this.lat == null || this.lon == null) return null

    return {
      lat: this.lat,
      lon: this.lon,
    };
  }

  static get lat() {
    return Number(localStorage.getItem("user_lat"));
  }

  static get lon() {
    return Number(localStorage.getItem("user_lon"));
  }

  static updateUserLocation(lat: number, lon: number) {
    localStorage.setItem("user_lat", lat.toString());
    localStorage.setItem("user_lon", lon.toString());
  }
}

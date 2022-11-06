export class WeatherCache {
  static get userLocation() {
    if (this.lat == null || this.lon == null) return null;

    return {
      lat: this.lat,
      lon: this.lon,
    };
  }

  static get lat() {
    const value = localStorage.getItem("user_lat");

    if (value === null) return null;
    return Number(value);
  }

  static get lon() {
    const value = localStorage.getItem("user_lon");
    if (value === null) return null;
    return Number(value);
  }

  static updateUserLocation(lat: number, lon: number) {
    localStorage.setItem("user_lat", lat.toString());
    localStorage.setItem("user_lon", lon.toString());
  }
}

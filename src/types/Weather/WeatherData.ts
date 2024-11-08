export type WeatherData = {
  meta: {
    units:{
      air_pressure_at_sea_level: "hPa",
      air_temperature: "celsius",
      air_temperature_max: "celsius",
      air_temperature_min: "celsius",
      cloud_area_fraction: "%",
      cloud_area_fraction_high: "%",
      cloud_area_fraction_low: "%",
      cloud_area_fraction_medium: "%",
      dew_point_temperature: "celsius",
      fog_area_fraction: "%",
      precipitation_amount: "mm",
      relative_humidity: "%",
      ultraviolet_index_clear_sky: "1",
      wind_from_direction: "degrees",
      wind_speed: "m/s",
    },
    updated_at: string,
  }

};
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

export const getDistanceFromLatLonInKm = (position1, position2) => {
  // FORMULA LLAMADA "FÓRMULA DE HAVERSINE"

  const R = 6371; // Radio de la Tierra en km

  const distanceBetweenLatitudes = deg2rad(
    position2.latitude - position1.latitude
  );

  const distanceBetweenLongitudes = deg2rad(
    position2.longitude - position1.longitude
  );

  const a =
    Math.sin(distanceBetweenLatitudes / 2) *
      Math.sin(distanceBetweenLatitudes / 2) +
    Math.cos(deg2rad(position1.latitude)) *
      Math.cos(deg2rad(position2.latitude)) *
      Math.sin(distanceBetweenLongitudes / 2) *
      Math.sin(distanceBetweenLongitudes / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); // C equivale a la distancia angular en radianes

  const distance = R * c; // Distancia en km
  return distance;
};

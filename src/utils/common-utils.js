const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

function updatePoint(points, update) {
  return points.map((point) => point.id === update.id ? update : point);
}

function compareDates(a, b) {
  var dateA = new Date(a.dateFrom);
  var dateB = new Date(b.dateFrom);

  return dateB - dateA;
}

export { capitalize, updatePoint, compareDates};

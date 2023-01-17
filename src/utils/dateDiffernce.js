function dateDiffInDays(a, b) {
  return Math.floor((Date.parse(a) - Date.parse(b)) / 86400000);
}

export default dateDiffInDays;

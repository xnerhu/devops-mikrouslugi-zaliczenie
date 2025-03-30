function formatDate(date) {
  return new Date(date).toLocaleDateString("pl-PL", {});
}

module.exports = {
  formatDate,
};

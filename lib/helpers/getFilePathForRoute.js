// Return the file for the given route
const getFilePathForRoute = (route, extension, locale) => {
  // Replace / with /index
  const path = route.replace(/^\/$/, "/index");

  if (locale) return `${locale}${path.endsWith('/') ? path.slice(0, -1) : path}.${extension}`;
  return `${path.endsWith('/') ? path.slice(0, -1) : path}.${extension}`;
};

module.exports = getFilePathForRoute;

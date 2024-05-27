function isNumber(value) {
  if (Array.isArray(value)) {
    return false;
  }
  return !isNaN(value);
}

/*
 Composes multiple functions with same arguments into a single one
 NOTE: Functions are executed from end of array to start (right to left)
 */
function compose(...funcs) {
  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce(
    (firstFunction, nextFunction) =>
      (...args) =>
        firstFunction(nextFunction(...args))
  )
}

module.exports = {
  isNumber,
  compose
}
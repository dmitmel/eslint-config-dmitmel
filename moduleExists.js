function moduleExists(id) {
  try {
    require.resolve(id);
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = moduleExists;

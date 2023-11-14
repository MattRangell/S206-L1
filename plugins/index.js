const marge = require('mochawesome/addContext');

module.exports = (on, config) => {
  on('task', {
    addMochawesomeContext({ test, title, value }) {
      marge(test, { title, value });
      return null;
    }
  });
};
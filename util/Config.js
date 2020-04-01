var path = require('path');

module.exports = {
  getRoot: function() {
    if (__dirname.match(/node_modules[\/\\]@stonescott[\/\\]reduxscripts/)) {
      return '../../../..';
    } else {
      return '../';
    }
  },

  getConfig: function() {
    const rootDir = this.getRoot();
    const config = require(`${rootDir}/reduxconfig`);
    return config
  }
  
}
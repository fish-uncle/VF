const path = require('path');
module.exports = {
  dev: {
    template: path.join(__dirname, 'src/index-dev.html'),
  },
  prod: {
    template: path.join(__dirname, 'src/index-prod.html'),
    publicPath: 'https://cdn.shenzhepei.com/VF/prod/'
  },
};

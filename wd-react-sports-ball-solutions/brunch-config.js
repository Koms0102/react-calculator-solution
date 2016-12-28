'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'app.js': /^app\//,
        'vendor.js': /^node_modules\//
      }
    },

    stylesheets: {
      joinTo: {
        'app.css': /^app\//,
        'vendor.css': /^node_modules\//
      }
    }
  },

  npm: {
    styles: {
      'normalize.css': ['normalize.css']
    }
  },

  paths: {
    watched: ['app']
  },

  plugins: {
    babel: JSON.parse(fs.readFileSync(path.join(__dirname, '.babelrc'), 'utf8'))
  },

  server: {
    port: Number.parseInt(process.env.PORT) || 8000
  }
};

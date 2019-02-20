const base = require('../manifest.json');

base.start_url = process.env.PUBLIC_URL;
base.publicPath = process.env.PUBLIC_URL;

module.exports = base;

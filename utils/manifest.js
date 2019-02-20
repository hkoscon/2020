const base = require('../manifest.json');

base.start_url = process.env.PUBLIC_PATH;
base.publicPath = process.env.PUBLIC_PATH;
base.scope = process.env.PUBLIC_PATH;

module.exports = base;

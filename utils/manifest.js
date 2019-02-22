const base = require('../manifest.json');

const publicUrl = `${process.env.PUBLIC_PATH}/`;

base.start_url = publicUrl;
base.publicPath = publicUrl;
base.scope = publicUrl;

module.exports = base;

const path = require('path');
const debug = require('debug')('nuxt:pwa:workbox');
const { generateSW } = require('workbox-build');

export default function workboxModule() {
  const routerBase = this.options.router.base;
  const { plugin: pluginOption, generate: generateOption, ...options } = this.options.workbox || { plugin: {}, generate: {} };
  if (options.dev) {
    return;
  }
  if (pluginOption.enabled) {
    const swURL = `${routerBase}/${options.swURL || 'sw.js'}`;
    this.addPlugin({
      src: path.resolve(__dirname, 'template', 'plugin.js'),
      ssr: false,
      fileName: 'sw.plugin.js',
      options: {
        swURL,
        swScope: `${routerBase}/`,
      },
    });
  }

  this.nuxt.hook('generate:done', () => {
    debug('Generate Service Worker');
    const swDest = path.resolve(this.options.generate.dir, generateOption.file || 'sw.js');
    return generateSW({
      swDest,
      importWorkboxFrom: generateOption.importWorkboxFrom || 'cdn',
      skipWaiting: true,
      clientsClaim: true,
      runtimeCaching: [{
        urlPattern: `${routerBase}/`,
        handler: 'NetworkFirst',
      }],
      cacheId: generateOption.cacheId || null,
      offlineGoogleAnalytics: generateOption.offlineGoogleAnalytics,
      cleanupOutdatedCaches: true,
      globDirectory: this.options.generate.dir,
      globPatterns: ['**/*.{js,css,html,jpg,jpeg,png}'],
      manifestTransforms: [
        manifest => ({
          manifest: manifest.concat(
            manifest.filter(({ url }) => url.endsWith('index.html'))
              .map(entry => ({ ...entry, url: entry.url.replace('index.html', '') })),
          ),
          warnings: [],
        }),
        manifest => ({
          manifest: manifest.map(entry => ({ ...entry, url: `${routerBase}/${entry.url}` })),
          warnings: [],
        }),
      ],
    })
      .then(({ count, size }) => {
        console.log(`Generated ${swDest}, which will precache ${count} files, totaling ${size / 1024} KB.`);
      });
  });
}

importScripts(<%= options.importScripts.map((i) => `'${i}'`).join(', ') %>)

<% if (options.config) {%>
workbox.setConfig(<%= JSON.stringify(options.config, null, 2) %>)
<% } %>

workbox.precaching.precacheAndRoute([], <%= JSON.stringify(options.wbOptions, null, 2) %>)


<% if (options.offlineAssets.length) { %>
workbox.precaching.precacheAndRoute([<%= options.offlineAssets.map((i) => `'${i}'`).join(', ') %>])
<% } %>

<% if (options.clientsClaim) { %>workbox.clientsClaim()<% } %>
<% if (options.skipWaiting) { %>workbox.skipWaiting()<% } %>

<%
options.runtimeCaching.forEach(r => {
  const strategy = JSON.stringify(r.strategyOptions || {})
    %>
workbox.routing.registerRoute(new RegExp('<%= r.urlPattern %>'), workbox.strategies.<%= r.handler %>(<%= strategy %>), '<%= r.method %>')
<% }) %>


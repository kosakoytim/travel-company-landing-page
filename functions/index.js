const functions = require('firebase-functions');
const {Nuxt} = require('nuxt');
const express = require('express');
const admin = require('firebase-admin');

const ssr = express();
const config = {
    dev: false,
    buildDir: 'nuxt',
    build: {
        publicPath: '/public'
    }
}
// ssr_landing_page ===================================================
const nuxt = new Nuxt(config);
function handleRequest(req,res) {
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
    return new Promise((resolve, reject) => {
        nuxt.render(req, res, promise => {
          promise.then(resolve).catch(reject);
        });
      });
}
ssr.get('*', handleRequest);
exports.ssr_landing_page = functions.https.onRequest(ssr);
// =====================================================================
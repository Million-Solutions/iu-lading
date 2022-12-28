import 'zone.js/dist/zone-node';

import {APP_BASE_HREF} from '@angular/common';
import {ngExpressEngine} from '@nguniversal/express-engine';
import * as express from 'express';
import {existsSync} from 'fs';
import {join} from 'path';
import * as https from 'https';
import * as fs from 'fs';
import {AppServerModule} from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/landin_page_IU/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  
  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    if(!res.secure){
      return res.redirect("https://" + request.headers.host + request.url);
    }
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;
  const serverhttp = app();
// https certificates
    const privateKey = fs.readFileSync('/etc/letsencrypt/live/iuapp.cl/privkey.pem');
    const certificate = fs.readFileSync('/etc/letsencrypt/live/iuapp.cl/fullchain.pem');
    // Start up the Node server
    const server = https.createServer({ key: privateKey, cert: certificate }, app());
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
  serverhttp.listen(80, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';

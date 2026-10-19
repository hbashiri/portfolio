import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
// The CRA 5 build doesn't generate service-worker.js, so registering it 404s. Unregistering also
// removes any worker an older deploy installed, so returning visitors don't get a stale cached site.
serviceWorker.unregister();

import './globals.css'
import App from './App.svelte'

import configuration from './configuration.json' assert { type: 'json' };

const app = new App({
  target: document.getElementById('app')
})

export default app

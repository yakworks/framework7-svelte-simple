import Framework7 from 'framework7/lite/bundle';
import Framework7Svelte from 'framework7-svelte';
Framework7.use(Framework7Svelte);
import App from './app.svelte';


const app = new App({
  target: document.getElementById('app'),
});
export default app;

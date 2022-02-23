# framework7-svelte-simple
Sample app to test dependencies

- *master* working with framework7:6.3.16 and svelte:3.38.3

1. Upgrading to svelte 3.46 has error `index.mjs:1859 Uncaught TypeError: append_styles2 is not a function`
2. changed from `import { App,  View } from 'framework7-svelte';` to `import { App,  View } from 'framework7-svelte/esm/framework7-svelte-src';` get `index.mjs?v=6582916b:948 Uncaught Error: Function called outside component initialization`


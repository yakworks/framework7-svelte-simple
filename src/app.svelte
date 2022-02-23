<script>
  import { App, View } from 'framework7-svelte';
  import Home from './home.svelte';

  let routes = [
    {
      path: '/',
      component: Home
    }
  ]

</script>

<App theme="auto" name="My App" id="com.demoapp.test" {routes}>
  <View url="/" main={true} class="safe-areas" />
</App>

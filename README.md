<p align="center">
    <img src="https://user-images.githubusercontent.com/203882/116871351-06e22100-ac0c-11eb-9ae5-7524e308ad7c.jpg" alt="Iconic Icons">
</p>

<p align="center">
    Iconic is a free “do wtf you want with” set of pixel-perfect icons. <br>Available as basic SVG icons and via first-party <a href="#react">React</a> and <a href="#vue">Vue</a> libraries.
<p>

<p align="center">
  <a href="https://iconic.app"><strong>Browse at iconic.app &rarr;</strong></a>
</p>

## Basic Usage

The quickest way to use these icons is to simply copy the source for the icon you need from [iconic.app](https://iconic.app/) and inline it directly into your HTML:

```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M19 12H4.75" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
```

## React

First, install `@untitled-ui/react-icons` from npm:

```sh
npm install @untitled-ui/react-icons
```

Now each icon can be imported individually as a React component:

```js
import { BatteryIcon } from '@untitled-ui/react-icons'

function MyComponent() {
  return (
    <div>
      <BatteryIcon />
      <p>...</p>
    </div>
  )
}
```

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

## Vue

First, install `@untitled-ui/vue-icons` or `@untitled-ui/vue3-icons` from npm:

```sh
npm install @untitled-ui/vue-icons // for Vue 2
npm install @untitled-ui/vue3-icons // for Vue 3
```

Now each icon can be imported individually as a Vue component:

```vue
<template>
  <div>
    <BatteryIcon />
    <p>...</p>
  </div>
</template>

<script>
import { BatteryIcon } from '@untitled-ui/vue-icons'

export default {
  components: { BatteryIcon }
}
</script>
```

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.
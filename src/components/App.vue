<template>
  <div :class="classObject">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'ui-app',
    computed: {
      classObject() {
        return {};
      }
    }
  };
</script>

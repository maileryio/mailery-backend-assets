<template>
  <div :class="classObject">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      classObject() {
        return {};
      }
    }
  };
</script>

<template>
  <button v-on:click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'sidebar-toggler',
    methods: {
      ...mapMutations({
        handleClick: 'sidebar/toggle'
      })
    }
  }
</script>

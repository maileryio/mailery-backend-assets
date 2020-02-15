<template>
  <div :class="classObject">
    <slot />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'app',
    computed: {
      ...mapGetters({
        isSidebarOpened: 'sidebar/isOpened'
      }),
      classObject() {
        return {
          'sidebar-icon-only': !this.isSidebarOpened
        };
      }
    }
  };
</script>

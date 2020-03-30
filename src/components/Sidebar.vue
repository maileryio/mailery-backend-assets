<template>
  <div :class="classObject">
    <slot />
  </div>
</template>

<script>
  const toggle = (item) => {
    const href = item.getAttribute('href');
    item.querySelector('.menu-arrow').classList.toggle('rotate');
    document.querySelector(href).classList.toggle('show');
  };

  export default {
    name: 'ui-sidebar',
    mounted() {
      document.querySelectorAll('.nav-item.active a[data-toggle="collapse"]').forEach(toggle);

      document.querySelectorAll('.sidebar a[data-toggle="collapse"]').forEach((item) => {
        item.addEventListener('click', () => toggle(item));
      });
    },
    computed: {
      classObject() {
        return {};
      }
    }
  };
</script>

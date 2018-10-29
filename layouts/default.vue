<style scoped lang="scss">
  .navbar-burger {
    color: white;
    &:hover {
      color: white;
    }
  }
</style>

<template>
  <div>
    <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation">
      <div class="navbar-brand">

        <nuxt-link
          class="navbar-item"
          to="/2019/"
        >HKOSCon 2019</nuxt-link>


        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          @click="toggleNavbar"
        >
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </a>
      </div>
      <div
        :class="{ 'is-active': showNavbar }"
        class="navbar-menu"
      >
        <div class="navbar-start">
          <a
            class="navbar-item"
            href="https://hkoscon.org/2018/timetable/"
          >Timetable</a>
        </div>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      showNavbar: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.showNavbar = !this.showNavbar;
    },
  },
};
</script>

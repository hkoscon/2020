<style scoped lang="scss">
  .navbar-burger {
    color: white;
    &:hover {
      color: white;
    }
  }

  .navbar-link:not(.is-arrowless)::after {
    border-color: $primary;
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
          <a
            class="navbar-item"
            href="https://hkoscon.org/2018/sponsors/"
          >Sponsors</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <span class="navbar-link">Organizer</span>
            <div class="navbar-dropdown">
              <a
                href="https://hkoscon.org/2018/about-committee.html"
                class="navbar-item"
              >Organizing Committee</a>
              <a
                href="https://hkoscon.org/2018/about-coc.html"
                class="navbar-item"
              >Code of Conduct</a>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <span class="navbar-link">Archive</span>
            <div class="navbar-dropdown">
              <a
                href="https://hkoscon.org/2018/"
                class="navbar-item"
              >HKOSCon 2018</a>
              <a
                href="https://hkoscon.org/2017/"
                class="navbar-item"
              >HKOSCon 2017</a>
              <a
                href="https://2016.opensource.hk/"
                class="navbar-item"
              >HKOSCon 2016</a>
              <a
                href="https://2015.opensource.hk/"
                class="navbar-item"
              >HKOSCon 2015</a>
              <a
                href="https://2014.opensource.hk/"
                class="navbar-item"
              >HKOSCon 2014</a>
              <a
                href="https://2013.opensource.hk/"
                class="navbar-item"
              >HKOSCon 2013</a>
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <a
            href="https://www.eventbrite.com/e/hong-kong-open-source-conference-2018-tickets-44667134602?_ga=2.116414022.1599379448.1540831395-739958573.1540831395"
            class="navbar-item"
          >Register</a>
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

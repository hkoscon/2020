<style scoped lang="scss">
  .navbar {
    .navbar-start {
      @include media("<=tablet") {
        > a.navbar-item, .navbar-link {
          font-weight: bold;
        }
      }
      .navbar-link:not(.is-arrowless)::after {
        border-color: $primary;
      }
    }

    .navbar-burger {
      color: white;
      &:hover {
        color: white;
      }
    }
  }

  .footer {
    background-color: $theme-blue;
    color: white;
    a {
      color: white;
      &:hover, &:visited, &:active {
        color: white;
      }
      &:hover > .icon {
        color: $theme-yellow;
      }
      > .icon {
        display: inline-block;
        margin: .5em;
        transition: color .5s;
        padding: .5em;
      }
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
        >
          <img src="~assets/images/brand.png">
          <span>HKOSCon 2019</span>
        </nuxt-link>


        <a
          :class="{ 'is-active': showNavbar }"
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
          <div class="navbar-item">
            <p class="control">
              <a
                href="https://www.eventbrite.com/e/hong-kong-open-source-conference-2018-tickets-44667134602?_ga=2.116414022.1599379448.1540831395-739958573.1540831395"
                class="button is-primary"
              >Register</a>
            </p>
          </div>
        </div>
      </div>
    </nav>
    <nuxt/>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <a href="https://facebook.com/hkoscon/">
            <span class="icon">
              <i class="fa fa-facebook" />
            </span>
          </a>

          <a href="https://facebook.com/hkoscon/">
            <span class="icon">
              <i class="fa fa-twitter" />
            </span>
          </a>

          <a href="mailto:conference@opensource.hk">
            <span class="icon">
              <i class="fa fa-envelope" />
            </span>
          </a>
        </p>
        <p>
          <a
            href="http://creativecommons.org/licenses/by-sa/3.0/hk/"
            target="_blank">
            <img src="https://licensebuttons.net/l/by-sa/3.0/hk/88x31.png">
          </a>
        </p>
        <p>This work is licensed under a
          <a
            href="http://creativecommons.org/licenses/by-sa/3.0/hk/"
            target="_blank">Creative Commons Attribution-ShareAlike 3.0 Hong Kong License</a>.</p>
        <p>Logos and trademarks belong to their respective owners.</p>
      </div>
    </footer>
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

<style lang="scss">
  .defaultLayout {
    &__navbar {
      position: fixed;
      width: 100%;

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

      &__footer {
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
    }

    &__burger {
      color: white;

      &:hover {
        color: white;
      }
    }
  }
</style>

<template>
  <div class="defaultLayout">
    <nav
      class="navbar defaultLayout__navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <nuxt-link
          class="navbar-item"
          to="/"
        >
          <img src="~assets/images/brand.png">
          <span>HKOSCon 2019</span>
        </nuxt-link>


        <a
          :class="{ 'is-active': showNavbar }"
          role="button"
          class="navbar-burger defaultLayout__burger"
          aria-label="menu"
          aria-expanded="false"
          @click="toggleNavbar"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div
        :class="{ 'is-active': showNavbar }"
        class="navbar-menu"
      >
        <div class="navbar-start">

          <div class="navbar-item has-dropdown is-hoverable">
            <span class="navbar-link">
              Organizer
            </span>
            <div class="navbar-dropdown">
              <nuxt-link
                to="/about/committee"
                class="navbar-item"
              >
                Organizing Committee
              </nuxt-link>
              <nuxt-link
                to="/about/coc"
                class="navbar-item"
              >
                Code of Conduct
              </nuxt-link>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <span class="navbar-link">
              Archive
            </span>
            <div class="navbar-dropdown">
              <a
                href="https://hkoscon.org/2018/"
                class="navbar-item"
              >
                HKOSCon 2018
              </a>
              <a
                href="https://hkoscon.org/2017/"
                class="navbar-item"
              >
                HKOSCon 2017
              </a>
              <a
                href="https://2016.opensource.hk/"
                class="navbar-item"
              >
                HKOSCon 2016
              </a>
              <a
                href="https://2015.opensource.hk/"
                class="navbar-item"
              >
                HKOSCon 2015
              </a>
              <a
                href="https://2014.opensource.hk/"
                class="navbar-item"
              >
                HKOSCon 2014
              </a>
              <a
                href="https://2013.opensource.hk/"
                class="navbar-item"
              >
                HKOSCon 2013
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nuxt />
    <footer class="footer defaultLayout__footer">
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
            target="_blank"
          >
            <img src="https://licensebuttons.net/l/by-sa/3.0/hk/88x31.png">
          </a>
        </p>
        <p>
          This work is licensed under a
          <a
            href="http://creativecommons.org/licenses/by-sa/3.0/hk/"
            target="_blank"
          >
            Creative Commons Attribution-ShareAlike 3.0 Hong Kong License
          </a>.
        </p>
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

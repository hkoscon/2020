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

      @media screen and (max-width: 1087px) {
        .navbar-dropdown {
          display: none;
        }
        .navbar-item.is-active .navbar-dropdown {
          display: block;
        }
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

    &__burger {
      color: white;

      &:hover {
        color: white;
      }
    }
    &__content {
      padding-top: 3rem;
    }
  }
</style>

<template>
  <div
    @click="handleClick"
    class="defaultLayout"
  >
    <nav
      @click.stop=""
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
          @click="toggleNavbar"
          role="button"
          class="navbar-burger defaultLayout__burger"
          aria-label="menu"
          aria-expanded="false"
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
          <!--
          <div
            :class="{ 'is-active': showAbout }"
            class="navbar-item has-dropdown"
          >
            <span
              @click="showAbout = !showAbout"
              class="navbar-link"
            >
              Organizer
            </span>
            <div class="navbar-dropdown">
              <nuxt-link
                @click.native="showAbout = false"
                to="/about/coc"
                class="navbar-item"
              >
                Code of Conduct
              </nuxt-link>
            </div>
          </div>
          -->
          <nuxt-link
            to="/about/volunteers"
            class="navbar-item"
          >
            Volunteers
          </nuxt-link>
          <nuxt-link
            to="/cfc"
            class="navbar-item"
          >
            Communities
          </nuxt-link>
          <nuxt-link
            to="/topics"
            class="navbar-item"
          >
            Topics
          </nuxt-link>
          <nuxt-link
            to="/timetable"
            class="navbar-item"
          >
            Timetable
          </nuxt-link>
          <div
            :class="{ 'is-active': showArchive }"
            class="navbar-item has-dropdown"
          >
            <span
              @click="showArchive = !showArchive"
              class="navbar-link"
            >
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
                href="/2014/"
                class="navbar-item"
              >
                HKOSCon 2014
              </a>
              <a
                href="/2013/"
                class="navbar-item"
              >
                HKOSCon 2013
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <p class="control">
              <nuxt-link
                to="/topics"
                class="button is-primary"
              >
                CFP Results
              </nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </nav>
    <div class="defaultLayout__content">
      <nuxt />
    </div>
    <page-footer />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  components: {
    PageFooter: () => import('~/components/PageFooter.vue'),
  },
  data() {
    return {
      showNavbar: false,
      showArchive: false,
      showAbout: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.showNavbar = !this.showNavbar;
    },
    handleClick() {
      this.showArchive = false;
      this.showArchive = false;
    },
  },
};
</script>

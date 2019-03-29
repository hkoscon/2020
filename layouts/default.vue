<style lang="scss">
  .defaultLayout {
    &__navbar {
      z-index: 1;
      position: fixed;
      width: 100%;
      background-color: white;
      box-shadow: 0 2px 2px;
      min-height: 3rem;
      will-change: background-color;
      @include media("<desktop") {
        box-shadow: 1px 1px 1px;
        &--active {
          opacity: .9;
        }
      }
    }
    &__container {
      @include container();
      display: flex;
      flex-grow: 1;
      height: 100%;
      justify-content: center;
      @include media(">=desktop") {
        justify-content: space-between;
      }
    }
    &__brand {
      @include media("<desktop") {
        align-self: center;
        &--active {
          height: 64px;
        }
      }
    }
    &__menu {
      display: flex !important;
      @include media("<desktop") {
        display: none !important;
        width: 100%;
        position: absolute;
        background-color: white;
        top: 3rem;
        &--active {
          display: flex !important;
          .defaultLayout__dropdown {
            text-align: left;
            box-shadow: none;
          }
        }
      }
    }
    &__trigger {
      cursor: pointer;
      padding-top: .5rem;
      padding-bottom: .5rem;
      &:hover, &.is-active, &.is-active > .defaultLayout__trigger {
        background-color: #eee !important;
        @include media("<desktop") {
          opacity: .9;
          background-color: white;
        }
      }
    }
    &__dropdown {
      background-color: white;
      border-radius: 0;
      width: 200%;
      left: -50%;
      text-align: center;
      box-shadow: 0 3px 4px rgba(0, 0, 0, .16);
      > .navbar-item {
        white-space: normal;
        @include media(">tablet") {
          padding: .375rem .5rem !important;
          justify-content: center;
        }
        &:hover {
          background: #eee !important;
        }
      }
    }
    &__burger {
      display: none;
      @include media("<desktop") {
        display: flex;
        position: absolute;
        left: 5px;
        align-items: center;
        color: $theme-yellow;
        cursor: pointer;
      }
    }
    @include media("<desktop") {
      &__part {
        width: 100%;
        padding-top: 2rem;
        padding-bottom: 2rem;
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
      :class="{ 'defaultLayout__navbar--active': showNavbar }"
      class="navbar defaultLayout__navbar"
    >
      <div class="defaultLayout__container">
        <div
          @click.stop="toggleNavbar"
          class="defaultLayout__burger"
          tabindex=""
        >
          <span
            :class="{ 'is-active': showNavbar }"
            role="button"
            type="button"
            class="navbar-burger"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </span>
          <span v-if="!showNavbar">Menu</span>
        </div>
        <div
          :class="{ 'defaultLayout__brand--active': showNavbar }"
          class="navbar-brand defaultLayout__brand"
        >
          <nuxt-link
            to="/"
            class="navbar-item"
          >
            <figure class="image is-square is-32x32">
              <img src="~assets/images/brand.png">
            </figure>
          </nuxt-link>
        </div>
        <div
          :class="{ 'defaultLayout__menu--active': showNavbar }"
          class="navbar-menu defaultLayout__menu"
        >
          <div class="navbar-end defaultLayout__part">
            <div
              :class="{ 'is-active': showAbout }"
              class="navbar-item has-dropdown defaultLayout__trigger"
            >
              <span
                @click.stop="showAbout = !showAbout"
                class="navbar-link is-arrowless defaultLayout__trigger"
                tabindex=""
              >About</span>
              <div
                :class="{ 'defaultLayout__dropdown--active': showAbout }"
                class="navbar-dropdown defaultLayout__dropdown"
              >
                <nuxt-link
                  to="/about/volunteer"
                  class="navbar-item"
                >
                  Volunteer
                </nuxt-link>
                <nuxt-link
                  to="/about/coc"
                  class="navbar-item"
                >
                  Code of Conduct
                </nuxt-link>
              </div>
            </div>
            <div
              :class="{ 'is-active': showProgram }"
              class="navbar-item has-dropdown defaultLayout__trigger"
            >
              <span
                @click.stop="showProgram = !showProgram"
                class="navbar-link is-arrowless defaultLayout__trigger"
                tabindex=""
              >Program</span>
              <div
                :class="{ 'defaultLayout__dropdown--active': showProgram }"
                class="navbar-dropdown defaultLayout__dropdown"
              >
                <nuxt-link
                  to="/topics"
                  class="navbar-item"
                >
                  Call for Paper Result
                </nuxt-link>
                <nuxt-link
                  to="/cfc"
                  class="navbar-item"
                >
                  Call for Community Result
                </nuxt-link>
              </div>
            </div>
            <div
              :class="{ 'is-active': showArchive }"
              class="navbar-item has-dropdown defaultLayout__trigger"
            >
              <span
                @click.stop="showArchive = !showArchive"
                class="navbar-link is-arrowless defaultLayout__trigger"
                tabindex=""
              >Archive</span>
              <div
                :class="{ 'defaultLayout__dropdown--active': showArchive }"
                class="navbar-dropdown defaultLayout__dropdown"
              >
                <a
                  href="https://hkoscon.org/2018/"
                  class="navbar-item"
                  target="_blank"
                >
                  HKOSCon 2018
                </a>
                <a
                  href="https://hkoscon.org/2017/"
                  class="navbar-item"
                  target="_blank"
                >
                  HKOSCon 2017
                </a>
                <a
                  href="https://2016.opensource.hk/"
                  class="navbar-item"
                  target="_blank"
                >
                  HKOSCon 2016
                </a>
                <a
                  href="https://2015.opensource.hk/"
                  class="navbar-item"
                  target="_blank"
                >
                  HKOSCon 2015
                </a>
                <a
                  href="https://hkoscon.org/2014/"
                  class="navbar-item"
                  target="_blank"
                >
                  HKOSCon 2014
                </a>
                <a
                  href="https://hkoscon.org/2013/"
                  class="navbar-item"
                  target="_blank"
                >
                  HKOSCon 2013
                </a>
              </div>
            </div>
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
      showProgram: false,
      showArchive: false,
      showAbout: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.showNavbar = !this.showNavbar;
    },
    handleClick() {
      this.showAbout = false;
      this.showProgram = false;
      this.showArchive = false;
      this.showNavbar = false;
    },
  },
};
</script>

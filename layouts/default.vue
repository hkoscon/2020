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
      display: flex;
      width: 100%;
      margin: auto;
      flex-grow: 1;
      height: 100%;
      justify-content: center;
      @include media(">=desktop") {
        width: 70%;
        max-width: 1000px;
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
      box-shadow: 0 3px 4px;
      > .navbar-item {
        white-space: normal;
        @include media(">tablet") {
          padding-right: 1rem !important;
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
              :class="{ 'is-active': showProgram }"
              class="navbar-item has-dropdown defaultLayout__trigger"
            >
              <span
                @click.prevent.stop="showProgram = !showProgram"
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
          </div>
        </div>
      </div>
    </nav>
    <nuxt />
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
      this.showProgram = false;
      this.showArchive = false;
      this.showNavbar = false;
    },
  },
};
</script>

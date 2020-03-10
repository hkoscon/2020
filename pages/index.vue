<style lang="scss">
  .homePage {
    &__cover {
      height: 100vh;
      background-repeat: no-repeat;
      background-color: #fff;
      min-height: 750px;
      background-size: cover;
      background-attachment: fixed;
      background-position: center 0;
      padding: 0 !important;
      &__inner {
        padding: .75rem;
        background-color: rgba(0,0,0,.7);
        height: 100%;
        text-align: center;
      }

      &__text {
        margin-top: 1rem;
        > .icon {
          vertical-align: middle;
        }
      }
    }

    &__logo {
      text-align: center !important;
      padding-top: 10vh !important;
      &__image {
        display: initial !important;
        position: relative !important;
        width: 35vh !important;
        height: auto !important;
      }
    }

    &__link {
      max-width: 30vh;
      @include media("<=tablet") {
        max-width: 40vh;
      }
      display: inline-flex !important;
      margin: 1rem .5rem 0;
    }

    &__social {
      margin-top: 1rem;
      &__link {
        background-color: rgba(255, 255, 255, .75);
        border-radius: 50%;
        margin: .5em;
        width: 2.5em;
        line-height: 2.5em;
        box-shadow: 1px 1px 10px rgba(0,0,0,.5);
        will-change: color,background-color;
        transition: .5s;
        display: inline-block;
        color: $theme-blue;
        &:hover {
          color: $white;
          background-color: $theme-blue;
        }
      }
    }

    &__content {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }

    &__tickets {
      flex-direction: row;
      justify-content: space-around;
      margin-top: 3rem;

      @include media("<=tablet") {
        flex-basis: 100%;
        flex-shrink: 1;
        flex-wrap: wrap;
      }
    }

    &__ticket {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-basis: 40%;
      @include media("<=tablet") {
        flex-basis: 100%;
      }
      margin: 1rem;

      ul {
        margin-bottom: 1rem;
        > li:before {
          content: "done";
          font-family: 'Material Icons';
          margin-right: .5em;
          color: #0a0;
        }
      }
    }
  }
</style>

<template>
  <main class="homePage">
    <div
      :style="{backgroundImage}"
      class="tile is-parent is-transparent homePage__cover"
    >
      <div class="tile is-child homePage__cover__inner">
        <figure class="image is-square homePage__logo">
          <img
            src="https://hkoscon.org/logo.png"
            class="homePage__logo__image"
          >
        </figure>
        <p class="has-text-primary homePage__cover__text">
          <span class="icon">
            <i class="material-icons">
              calendar_today
            </i>
          </span> 12 - 13 Jun, 2020 (Fri - Sat)
        </p>
        <p class="has-text-primary homePage__cover__text">
          <span class="icon">
            <i class="material-icons">
              add_location
            </i>
          </span> TBC
        </p>
        <div class="homePage__social">
          <a
            href="https://facebook.com/hkoscon/"
            class="homePage__social__link"
            target="_blank"
          >
            <span class="icon">
              <i class="fa fa-facebook" />
            </span>
          </a>

          <a
            href="https://twitter.com/hkoscon/"
            target="_blank"
            class="homePage__social__link"
          >
            <span class="icon">
              <i class="fa fa-twitter" />
            </span>
          </a>

          <a
            href="mailto:conference@opensource.hk"
            class="homePage__social__link"
          >
            <span class="icon">
              <i class="fa fa-envelope" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      backgroundImage: `url(${process.env.publicPath}/images/bg.jpg)`,
    };
  },
};
</script>

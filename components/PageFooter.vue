<style lang="scss">
  .pageFooter {
    &__copyright {
      padding: .8rem 1.5rem !important;
      font-size: .8rem;
    }
    &__social {
      background-color: #eee !important;
      padding: 2rem 0 !important;
      @include media("<desktop") {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }

      &__section {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 100%;
        @include media(">=desktop") {
          width: 70%;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        @include media("<desktop") {
          flex-basis: 50%;
        }
        @include media("<=phone") {
          flex-basis: 100%;
        }
      }

      &__link {
        display: flex;
        flex-direction: column;
        outline: 0;
        text-decoration: none;
      }

      &__name, &__logo {
        display: block !important;
        text-align: center;
        width: 100% !important;
        color: rgba(0,0,0,.87);
      }

      &__media {
        display: inline-block;
        vertical-align: top;
        max-width: 192px;
      }
    }
    &__hashtag {
      margin-right: 1.5rem;
      margin-bottom: .5rem;
    }
  }
</style>

<template>
  <footer>
    <div class="pageFooter__hashtag has-text-right has-text-theme-blue">
      #HKOSCon2020
    </div>
    <div class="footer pageFooter__social">
      <div class="has-text-centered pageFooter__social__section">
        <div class="pageFooter__social__media">
          <a
            href="https://facebook.com/hkoscon/"
            class="pageFooter__social__link"
            target="_blank"
          >
            <span class="icon is-medium pageFooter__social__logo">
              <i class="fa fa-facebook-square fa-2x" />
            </span>
          </a>
        </div>

        <div class="pageFooter__social__media">
          <a
            href="https://twitter.com/hkoscon/"
            class="pageFooter__social__link"
            target="_blank"
          >
            <span class="icon is-medium pageFooter__social__logo">
              <i class="fa fa-twitter fa-2x" />
            </span>
          </a>
        </div>

        <div class="pageFooter__social__media">
          <a
            href="https://www.youtube.com/channel/UC8yt48pXALiBm8HEo3tl3FQ"
            class="pageFooter__social__link"
            target="_blank"
          >
            <span class="icon is-medium pageFooter__social__logo">
              <i class="fa fa-youtube-play fa-2x" />
            </span>
          </a>
        </div>

        <div class="pageFooter__social__media">
          <a
            href="mailto:conference@opensource.hk"
            class="pageFooter__social__link"
          >
            <span class="icon is-medium pageFooter__social__logo">
              <i class="fa fa-envelope fa-2x" />
            </span>
          </a>
        </div>
      </div>
    </div>
    <div class="footer pageFooter__copyright">
      <div class="content has-text-centered">
        <p>
          This work is licensed under a <a
            href="http://creativecommons.org/licenses/by-sa/3.0/hk/"
            target="_blank"
            class=""
          >Creative Commons Attribution-ShareAlike 3.0 Hong Kong License</a>. Logos and trademarks belong to their respective owners.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
};
</script>

<style lang="scss">
  .pageFooter {
    &__copyright {
      padding: .8rem 1.5rem !important;
      font-size: .8rem;
    }
    &__social {
      background-color: #eee !important;
      padding: .8rem 1.5rem !important;

      &__section {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        @include media("<=tablet") {
          flex-basis: 50%;
        }
        @include media("<=phone") {
          flex-basis: 100%;
        }
      }
      &__fb {
        color: #3b5998;
      }

      &__twitter {
        color: #5FA9DD;
      }

      &__youtube {
        color: red;
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
  }
</style>

<template>
  <footer>
    <div class="footer pageFooter__social">
      <div class="container content has-text-centered pageFooter__social__section">
        <div class="pageFooter__social__media">
          <a
            href="https://facebook.com/hkoscon/"
            class="pageFooter__social__link"
          >
            <span class="icon is-medium pageFooter__social__logo">
              <i class="fa fa-facebook-square fa-2x pageFooter__social__fb" />
            </span>
          </a>
        </div>

        <div class="pageFooter__social__media">
          <a href="https://twitter.com/hkoscon/" class="pageFooter__social__link">
            <span class="icon is-medium pageFooter__social__logo">
              <i class="fa fa-twitter fa-2x pageFooter__social__twitter" />
            </span>
          </a>
        </div>

        <div class="pageFooter__social__media">
          <a href="https://youtube.com/hkoscon" class="pageFooter__social__link">
            <span class="icon is-medium pageFooter__social__logo">
              <i class="fa fa-youtube-play fa-2x pageFooter__social__youtube" />
            </span>
          </a>
        </div>

        <div class="pageFooter__social__media">
          <a href="mailto:conference@opensource.hk" class="pageFooter__social__link">
            <span class="icon is-medium pageFooter__social__logo">
              <i class="fa fa-envelope fa-2x" />
            </span>
          </a>
        </div>
      </div>
    </div>
    <div class="footer pageFooter__copyright">
      <div class="content has-text-centered">
        <p>This work is licensed under a <a href="http://creativecommons.org/licenses/by-sa/3.0/hk/" target="_blank" class="">Creative Commons Attribution-ShareAlike 3.0 Hong Kong License</a>. Logos and trademarks belong to their respective owners.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
};
</script>

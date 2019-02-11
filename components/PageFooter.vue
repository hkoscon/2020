<style lang="scss">
  .pageFooter {
    &__copyright {
      padding: 2rem 1.5rem !important;
    }
    &__social {
      background-color: #eee !important;
      padding: 2rem 1.5rem !important;

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
        margin: 20px;
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
            <span class="icon is-large pageFooter__social__logo">
              <i class="fa fa-facebook-square fa-3x pageFooter__social__fb" />
            </span>
            <span class="pageFooter__social__name">
              Facebook
            </span>
          </a>
          <p>Follow for latest update on Facebook</p>
        </div>

        <div class="pageFooter__social__media">
          <a href="https://twitter.com/hkoscon/" class="pageFooter__social__link">
            <span class="icon is-large pageFooter__social__logo">
              <i class="fa fa-twitter fa-3x pageFooter__social__twitter" />
            </span>
            <span class="pageFooter__social__name">
              Twitter
            </span>
          </a>
          <p>Connect with @hkoscon on Twitter</p>
        </div>

        <div class="pageFooter__social__media">
          <a href="https://youtube.com/hkoscon" class="pageFooter__social__link">
            <span class="icon is-large pageFooter__social__logo">
              <i class="fa fa-youtube-play fa-3x pageFooter__social__youtube" />
            </span>
            <span class="pageFooter__social__name">
              YouTube
            </span>
          </a>
          <p>Check out our videos.</p>
        </div>

        <div class="pageFooter__social__media">
          <a href="mailto:conference@opensource.hk" class="pageFooter__social__link">
            <span class="icon is-large pageFooter__social__logo">
              <i class="fa fa-envelope fa-3x" />
            </span>
            <span class="pageFooter__social__name">
              Email
            </span>
          </a>
          <p>Directly contact us by sending email</p>
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

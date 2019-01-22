<style lang="scss">
  .homePage {
    &__cover {
      background-image: url('/2019/images/bg.jpg');
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
        background-color: white;
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
    <div class="tile is-parent is-transparent homePage__cover">
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
          </span> 16 - 17 Jun, 2018 (Sat - Sun)
        </p>
        <p class="has-text-primary homePage__cover__text">
          <span class="icon">
            <i class="material-icons">
              add_location
            </i>
          </span> Cyberport 3, Hong Kong
        </p>
        <nuxt-link
          to="/timetable"
          class="button is-primary is-fullwidth is-uppercase homePage__link"
        >
          Timetable
        </nuxt-link>
        <a
          href="https://www.eventbrite.com/e/hong-kong-open-source-conference-2018-tickets-44667134602?_ga=2.82549334.1599379448.1540831395-739958573.1540831395"
          class="button is-primary is-fullwidth is-uppercase homePage__link"
          target="_blank"
        >
          Register Now
        </a>
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

          <a href="mailto:conference@opensource.hk" class="homePage__social__link">
            <span class="icon">
              <i class="fa fa-envelope" />
            </span>
          </a>
        </div>
      </div>
    </div>

    <div class="container has-text-centered has-background-white homePage__content">
      <h2 class="title">
        Tickets
      </h2>
      <p class="subtitle">
        Act today to secure your seat
      </p>

      <div class="is-flex homePage__tickets tickets">
        <div class="card homePage__ticket">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">
                  Full Ticket
                </p>
                <p class="subtitle is-5">
                  HKD $300
                </p>
              </div>
            </div>

            <div class="content">
              <ul class="has-text-left">
                <li>Admission on Day 1 and Day 2</li>
                <li>Chance to Register Workshop</li>
                <li>T-Shirt</li>
              </ul>
            </div>
          </div>

          <div class="card-footer">
            <a class="card-footer-item">
              Buy Now
            </a>
          </div>
        </div>

        <div class="card homePage__ticket">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">
                  Weekend Ticket
                </p>
                <p class="subtitle is-5">
                  HKD $200
                </p>
              </div>
            </div>

            <div class="content homePage__ticket">
              <ul class="has-text-left">
                <li>Admission on Day 2</li>
                <li>Chance to Register Workshop</li>
                <li>T-Shirt</li>
              </ul>
            </div>
          </div>


          <div class="card-footer">
            <a class="card-footer-item">
              Buy Now
            </a>
          </div>
        </div>

        <div class="card homePage__ticket">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">
                  Student Ticket
                </p>
                <p class="subtitle is-5">
                  HKD $100
                </p>
              </div>
            </div>

            <div class="content">
              <ul class="has-text-left">
                <li>Admission on Day 1 and Day 2</li>
                <li>Chance to Register Workshop</li>
                <li>T-Shirt</li>
              </ul>
              <p>For full time students only.</p>
              <p>Requires student ID and proofs during admission.</p>
            </div>
          </div>

          <div class="card-footer">
            <a class="card-footer-item">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

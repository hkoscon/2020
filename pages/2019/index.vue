<style scoped lang="scss">
  .tile{
    &.is-parent {
      background-image: url("https://hkoscon.org/2018/images/cover.jpg");
      height: 100vh;
      background-repeat: no-repeat;
      background-color: #fff;
      min-height: 750px;
      background-size: cover;
      background-attachment: fixed;
      background-position: center 0;
      padding: 0;
    }
    &.is-child {
      padding: .75rem;
      background-color: rgba(0,0,0,.7);
      height: 100%;
      text-align: center;

      p {
        margin-top: 1rem;
        > .icon {
          vertical-align: middle;
        }
      }
    }
  }

  figure {
    text-align: center;
    padding-top: 10vh;

    > img {
      width: 35vh;
    }
  }

  a.button {
    max-width: 30vh;
    @include media("<=tablet") {
      max-width: 40vh;
    }
    display: inline-flex;
    margin: 1rem .5rem 0;
  }

  .social {
    margin-top: 1rem;
    > a {
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

  .container {
    padding-top: 2rem;
    padding-bottom: 2rem;

    .tickets {
      flex-direction: row;
      justify-content: space-around;
      margin-top: 3rem;

      @include media("<=tablet") {
        flex-basis: 100%;
        flex-shrink: 1;
        flex-wrap: wrap;
      }

      > .card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 40%;
        @include media("<=tablet") {
          width: 100%;
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
  }
</style>

<template>
  <div>
    <div class="tile is-parent is-transparent">
      <div class="tile is-child">
        <figure class="image is-square">
          <img src="https://hkoscon.org/logo.png">
        </figure>
        <p class="has-text-primary">
          <span class="icon"><i class="material-icons">calendar_today</i></span> 16 - 17 Jun, 2018 (Sat - Sun)
        </p>
        <p class="has-text-primary">
          <span class="icon"><i class="material-icons">add_location</i></span> Cyberport 3, Hong Kong
        </p>
        <a
          href="https://hkoscon.org/2018/timetabel.html"
          class="button is-primary is-fullwidth is-uppercase"
        >Timetable</a>
        <a
          href="https://www.eventbrite.com/e/hong-kong-open-source-conference-2018-tickets-44667134602?_ga=2.82549334.1599379448.1540831395-739958573.1540831395"
          class="button is-primary is-fullwidth is-uppercase"
        >Register Now</a>
        <div class="social">
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
        </div>
      </div>
    </div>

    <div class="container has-text-centered has-background-white">
      <h2 class="title">Tickets</h2>
      <p class="subtitle">Act today to secure your seat</p>

      <div class="is-flex tickets">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Full Ticket</p>
                <p class="subtitle is-5">HKD $300</p>
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
            <a class="card-footer-item">Buy Now</a>
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Weekend Ticket</p>
                <p class="subtitle is-5">HKD $200</p>
              </div>
            </div>

            <div class="content">
              <ul class="has-text-left">
                <li>Admission on Day 2</li>
                <li>Chance to Register Workshop</li>
                <li>T-Shirt</li>
              </ul>
            </div>
          </div>


          <div class="card-footer">
            <a class="card-footer-item">Buy Now</a>
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Student Ticket</p>
                <p class="subtitle is-5">HKD $100</p>
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
            <a class="card-footer-item">Buy Now</a>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

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
      background-position: center 50px;
      padding: 0;
    }
    &.is-child {
      padding: .75rem;
      background-color: rgba(0,0,0,.7);
      height: 100%;
      text-align: center;
    }
  }
  .title {
    text-align: center;
  }

  figure {
    text-align: center;
    padding-top: 10vh;

    > img {
      width: 40vh;
    }
  }

  a.button {
    color: $theme-blue;
    max-width: 40vh;
    display: inline-flex;
    margin-top: 1rem;
    &:hover {
      color: $theme-blue;
    }
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
    background-color: white;
    padding-top: 1rem;
    padding-bottom: 2rem;
    text-align: center;
  }
</style>

<template>
  <div>
    <div class="tile is-parent is-transparent">
      <div class="tile is-child">
        <figure class="image is-square">
          <img src="https://hkoscon.org/logo.png">
        </figure>
        <a
          href="https://www.eventbrite.com/e/hong-kong-open-source-conference-2018-tickets-44667134602?_ga=2.82549334.1599379448.1540831395-739958573.1540831395"
          class="button is-primary is-fullwidth"
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
    <div class="container">
      <h2 class="title">Mark your Calendar</h2>
      <p class="subtitle">Be prepared for Open Source awesomeness</p>

      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h3 class="title is-4 has-text-theme-blue">16th Jun, 2018 (Sat)</h3>
            <a
              href="https://hkoscon.org/2018/timetable.html"
              class="button is-primary"
            >See Timetable</a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

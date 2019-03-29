<style lang="scss">
  .homePage {
    padding-top: 3rem;
    &__cover {
      height: 100vh;
      background-repeat: no-repeat;
      background-color: #fff;
      min-height: 750px;
      background-size: 150%;
      background-position: 80% 25%;
      padding: 0 !important;
      display: flex;
    }
    &__logo {
      margin-top: 10rem;
      margin-left: 18rem;
    }
    &__image {
      width: 188px;
      height: 188px;
      padding-top: 0 !important;
    }
    &__slogan {
      margin-top: 8rem;
      margin-left: 12rem;
      font-size: 2rem;
    }
    &__intro {
      margin-top: 10rem;
      margin-left: 10rem;
    }
    &__title {
      font-size: 3rem;
      border-bottom: 5px solid $theme-blue;
      padding-left: 5px;
      padding-right: 5px;
      margin-bottom: 0;
    }
    &__date {
      margin-top: 1.25rem;
      margin-left: 2rem;
    }
    &__venue {
      margin-left: 2rem;
    }
    &__cards {
      width: 100%;
      @include media(">tablet") {
        width: 70%;
        max-width: 1000px;
        margin: 5rem auto;
      }
    }
    &__card {
      width: 100%;
      box-shadow: 0 1px 1px;
    }
  }
</style>

<template>
  <main
    class="homePage"
  >
    <div
      class="homePage__cover"
      :style="{backgroundImage}"
    >
      <div>
        <div class="homePage__logo">
          <figure class="image is-square homePage__image">
            <img src="~assets/images/brand.png">
          </figure>
        </div>
        <div class="homePage__slogan">
          <span class="has-text-theme-yellow">Build together</span>
          <span style="color: rgba(0,0,0,.6)">&amp;</span>
          <span class="has-text-theme-blue">Go beyond</span>
        </div>
      </div>
      <div class="homePage__intro">
        <p class="has-text-theme-yellow homePage__title">HKOSCon 2019</p>
        <p class="homePage__date">14 - 15 Jun, 2019</p>
        <p class="homePage__venue">Convention Centre 2<br>Hong Kong Science Park</p>
      </div>
    </div>
    <div class="homePage__cards">
      <div class="card homePage__card">
        <div class="card-content">
          <p class="title is-4 has-text-theme-yellow"># About</p>
          <p>
            Hong Kong Open Source Conference (HKOSCon) is one of the major Open Source conferences in Hong Kong since its first commercement in 2013,
            bringing an international crowd of developers, contributors, users, IT manager, students and public.
            The conference aims to promote the open source development into communities and to encourage its application in the industry.
          </p>
          <p>
            With different annual themes, related open source sectors are invited to share its open source development and trends of the IT industry and community.
            The annual celebration is nonetheless supported by the tertiary education sectors, fans and sponsors. Other than talks,
            speeches & lightning talks, HKOSCon has expanded its scope into workshops, non-conferences, gathering and promotional booths.
          </p>
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
      backgroundImage: `url(${process.env.publicPath}/images/bg.png)`,
    };
  },
};
</script>

<style lang="scss">
.sponsor__container {
  h1.title {
    text-align: center;
  }
}
.sponsor__container__tier {
  margin: 2em 0 1em;
  h2 {
    text-align: center;
  }
}
.sponsor__container__tier__sponsors {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.sponsor__container__tier__sponsor {
  width: calc( 100% - 2em );
  padding: 1em;
  margin: 1em 0;
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  @include media(">=desktop") {
    width: calc( 33.33% - 2em );
    margin: 1em;
  }
}
.sponsor__container__tier__sponsor__logo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  height: 320px;
}
.sponsor__container__tier__sponsor__desc {
  .content-wrapper {
    summary {
      cursor: pointer;
    }
  }
}

.sponsor__container__tier__patron {
  text-align: center;
  ul {
    list-style-type: none;
    li {
      display: block;
      line-height: 2.6em;
      font-size: 1.2em;
    }
  }
}

</style>

<template>
  <main class="section">
    <div class="container sponsor__container">
      <h1 class="title is-3">
        Sponsors
      </h1>
      <div
        class="sponsor__container__tier"
        v-for="tier in sponsors"
        :key="tier.name"
      >
        <h2 class="title is-4">{{ tier.name }}</h2>
        <div class="sponsor__container__tier__sponsors">
          <div class="sponsor__container__tier__sponsor" v-for="sponsor in tier.sponsors" :key="sponsor.title">
            <div class="sponsor__container__tier__sponsor__logo">
              <img :src="sponsor.logo" :alt="sponsor.title" />
            </div>
            <div class="sponsor__container__tier__sponsor__desc">
              <h3 class="title is-5">{{ sponsor.title }}</h3>
              <div class="content-wrapper" v-if="sponsor.description">
                <details>
                  <summary>About</summary>
                  <div class="content" v-html="sponsor.description"></div>
                </details>
              </div>
              <div class="actions">
                <ul class="links">
                  <li v-for="(link, index) in sponsor.links" :key="index">
                    <a class="button is-link" :href="link.url">{{ link.title }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="sponsor__container__tier"
        v-if="patrons.length > 0"
      >
        <h2 class="title is-3">Patrons</h2>
        <div class="sponsor__container__tier__sponsors">
          <div class="sponsor__container__tier__sponsor sponsor__container__tier__patron">
            <ul>
              <li
                v-for="patron in patrons" :key="patron"
              >
                {{ patron }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { fetchEventInfo } from '../utils/fetchTopic';

export default {
  name: 'Sponsors',
  head: {
    title: 'Sponsors | Hong Kong Open Source Confernce 2020',
    meta: [
      { hid: 'og:title', property: 'og:title', content: 'Sponsors Us | Hong Kong Open Source Conference 2020' },
      { hid: 'description', name: 'description', content: 'HKOSCon depends on the industry’s sponsorship as the event is at minimum cost.' },
    ],
  },
  asyncData: () => (
    fetchEventInfo()
      .then(data => ({
        sponsors: data.conference.sponsors,
        patrons: data.conference.patrons,
      }))
  ),
  data() {
    return {
      sponsors: [],
    };
  },
};
</script>

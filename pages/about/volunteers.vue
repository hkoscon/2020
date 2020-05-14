<style lang="scss">
  .aboutVolunteerPage {
    @include container();
    h2 {
      font-size: 1.7em;
      margin-top: 1.5em;
    }
    &__cards {
      display: flex;
      flex-wrap: wrap;
      margin-top: 2rem;
      .volunteerCard {
        flex-basis: 100%;
        margin: .5rem;
        @include media(">=tablet") {
          flex-basis: 50%;
        }
        @include media(">=desktop") {
          flex-basis: 20%;
        }
      }
    }
  }
</style>

<template>
  <div>
    <page-banner title="Committee" />
    <main class="aboutVolunteerPage">
      <h2>Executive Committee</h2>
      <div class="aboutVolunteerPage__cards">
        <volunteer-card
          v-for="volunteer in exco"
          :key="volunteer.name"
          :name="volunteer.name"
          :teams="volunteer.posts"
          :social="volunteer.social"
          :description="volunteer.description"
          :avatar="volunteer.avatar"
        />
      </div>
      <h2>Volunteers</h2>
      <div class="aboutVolunteerPage__cards">
        <volunteer-card
          v-for="volunteer in volunteers"
          :key="volunteer.name"
          :name="volunteer.name"
          :teams="volunteer.posts"
          :social="volunteer.social"
          :description="volunteer.description"
          :avatar="volunteer.avatar"
        />
      </div>
    </main>
  </div>
</template>

<script>

import fetchVolunteers from '../../utils/fetchVolunteers';

export default {
  name: 'AboutVolunteerPage',
  head: {
    title: 'Volunteers | Hong Kong Open Source Confernce 2020',
    meta: [
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Volunteers | Hong Kong Open Source Conference 2020',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Hong Kong Open Source Conference is a volunteer-driven event. Here is our volunteer this year.',
      },
    ],
  },
  components: {
    PageBanner: () => import('~/components/PageBanner.vue'),
    VolunteerCard: () => import('~/components/about/VolunteerCard.vue'),
  },
  data() {
    return {
      exco: [],
      volunteers: [],
    };
  },
  asyncData: () => (
    fetchVolunteers()
      .then(data => ({
        exco: data.exco,
        volunteers: data.volunteers,
      }))
  ),
};
</script>

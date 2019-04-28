<style lang="scss">
  .aboutOrganizersPage {
    &__organizers {
      display: flex;
      &__organizer {
        width: 32%;
        margin: 0.5%;
        position: relative;
        .image {
          margin: 0 1.5em;
        }
        .media-content {
          margin-bottom: 1em;
          .title {
            line-height: 1.6em;
          }
        }
        .content {
          padding-bottom: 3em;
          text-align: justify;
        }
        .card-footer {
          position: absolute;
          bottom: 0;
          width: 90%;
        }
      }
    }
    @media (max-width: 600px) {
      &__organizers {
        display: block;
        &__organizer {
          width: 100%;
          margin: 1em 0;
        }
      }
    }
  }
</style>

<template>
  <main>
    <page-banner title="Organizers" />
    <section class="section">
      <div class="container content">
        <div>
          <h2 class="title is-3">Organizers</h2>
          <ul class="aboutOrganizersPage__organizers">
            <li
              class="aboutOrganizersPage__organizers__organizer card"
              v-for="organizer in organizers"
              :key="organizer.name"
            >
              <div class="aboutOrganizersPage__organizers__organizer__logo card-image">
                <figure class="image">
                  <img :src="organizer.logo" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media-content">
                  <h3 class="title is-4">{{ organizer.name }}</h3>
                </div>
                <div class="aboutOrganizersPage__organizers__organizer__description content">
                  {{ organizer.description }}
                </div>
                <footer class="card-footer">
                  <a
                    class="aboutOrganizersPage__organizers__organizer__website card-footer-item"
                    target="_blank"
                    :href="organizer.website"
                  >
                    Website
                  </a>
                </footer>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="title is-3">Partner</h2>
          <ul class="aboutOrganizersPage__organizers">
            <li
              class="aboutOrganizersPage__organizers__organizer card"
              v-for="organizer in partners"
              :key="organizer.name"
            >
              <div class="aboutOrganizersPage__organizers__organizer__logo card-image">
                <figure class="image">
                  <img :src="organizer.logo" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media-content">
                  <h3 class="title is-4">{{ organizer.name }}</h3>
                </div>
                <div class="aboutOrganizersPage__organizers__organizer__description content">
                  {{ organizer.description }}
                </div>
                <footer class="card-footer">
                  <a
                    class="aboutOrganizersPage__organizers__organizer__website card-footer-item"
                    target="_blank"
                    :href="organizer.website"
                  >
                    Website
                  </a>
                </footer>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AboutCommitteePage',
  components: {
    PageBanner: () => import('~/components/PageBanner.vue'),
  },
  data() {
    return {
      organizers: [
        {
          name: 'Open Source Hong Kong',
          description: 'Open Source Hong Kong ( OSHK ) is a community in aim of advocacy and promotion on concepts and uses of open source, to organise meet-ups, seminars, conferences and other events in Hong Kong and Asia. OSHK encourages communication and collaboration of open source, open technology and open culture related communities in Hong Kong and the world.',
          website: 'https://opensource.hk/',
          logo: 'https://events.cota.hk/sites/default/files/2019-03/oshk_square.png',
        },
        {
          name: 'Hong Kong Creative Open Technology Association',
          description: 'This conference organised by Hong Kong Creative Open Technology Association ( HKCOTA ). This association is a non-profit tax-exempt charity organisation (Reg.# 91/12580) founded in 2014 to promote Open Standards; Free and Open Source Software; Open Hardware; Free Culture Works, Open Content and Creative Commons.',
          website: 'https://cota.hk/',
          logo: 'https://events.cota.hk/sites/default/files/2019-03/cota.png',
        },
        {
          name: 'Hong Kong Linux User Group',
          description: 'Hong Kong Linux User Group (HKLUG) is a community of professionals, private individuals, students who are interested in the Linux operating system. Founded in 1997, the HKLUG has been promoting the use of the Linux, Free and Open Source Software and related issues. HKLUG also organised a number of conferences such as GNOME.Asia 2012 where more than 120 participants from Hong Kong and overseas attended.',
          website: 'http://www.linux.org.hk/',
          logo: 'https://events.cota.hk/sites/default/files/2019-03/hklug.png',
        },
      ],
      partners: [
        {
          name: 'COSCUP',
          description: 'COSCUP - Conference for Open Source Coders, Users and Promoters is organized by major open source communities in Taiwan. The major goal is to create a friendly and informative environment for people in different communities to make friends, learn new technologies and inspire each other in the conference.',
          website: 'https://coscup.org/',
          logo: 'https://events.cota.hk/sites/default/files/2019-03/logo-512.png',
        },
      ],
    };
  },
};
</script>

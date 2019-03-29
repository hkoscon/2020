<style lang="scss">
  .aboutCommitteePage {
    &__members {
      display: flex;
      flex-wrap: wrap;
      padding: 1em;
      &__member {
        margin: 0.5%;
        width: 24%;
        padding: 0.5em;
        background-color: rgba(0, 0, 0, 0.1);
        &:nth-child(even) {
          background-color: rgba(0, 0, 0, 0.05);
        }
        &__name {
          padding: 0.5em;
          width: 12em;
          font-weight: bold;
        }
        &__posts {
          list-style-type: disc;
          flex: 1;
          margin: 0;
          li {
            padding: 0 0 0 0.5em;
            margin: 0.2em 0;
          }
        }
      }
    }

    @media (max-width: 600px) {
      &__members {
        display: block;
        margin: 0;
        padding: 0;
        &__member {
          display: block;
          width: 100%;
          margin: 0.5em 0;
        }
      }
    }
  }
</style>

<template>
  <main>
    <page-banner title="Committee" />
    <section class="section">
      <div class="container content">
        <div>
          <ul class="aboutCommitteePage__members">
            <li
                class="aboutCommitteePage__members__member"
                v-for="volunteer in volunteers"
                :key="volunteer.name"
              >
              <div class="aboutCommitteePage__members__member__name">{{ volunteer.name }}</div>
              <ul
                class="aboutCommitteePage__members__member__posts"
              >
                <li v-for="post in volunteer.posts" :key="post">
                  {{ post }}
                </li>
              </ul>
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
      volunteers: [
        {
          name: 'Mr. Sammy Fung',
          posts: ['Conference Chairman', 'Program Chair', 'Sales Lead'],
        },
        {
          name: 'Ms. Claire Wong',
          posts: ['Design Team Lead'],
        },
        {
          name: 'Dr. Haggen So',
          posts: ['Finance Team Lead'],
        },
        {
          name: 'Mr. Calvin Tsang',
          posts: ['Marketing Team Lead'],
        },
        {
          name: 'Mr. Nicholas Yau',
          posts: ['Operation Team Lead'],
        },
        {
          name: 'Mr. Henry Law',
          posts: ['Recording (Photo & Video) Chief'],
        },
        {
          name: 'Mr. Koala Yeung',
          posts: ['Web Manager', 'Operation'],
        },
        {
          name: 'Ms. Daisy Fung',
          posts: ['Administration', 'Marketing'],
        },
        {
          name: 'Mr. Ken Chu',
          posts: ['Administration', 'Operation'],
        },
        {
          name: 'Mr. Frankie Yuen',
          posts: ['Design'],
        },
        {
          name: 'Mr. Toby@Happeas',
          posts: ['Design'],
        },
        {
          name: 'Ms. Claire Chung',
          posts: ['Marketing', 'Interpreter (Japanese)'],
        },
        {
          name: 'Ms. Judy Wong',
          posts: ['Marketing', 'Interpreter (English)'],
        },
        {
          name: 'Ms. Fiona Lam',
          posts: ['Marketing'],
        },
        {
          name: 'Mr. John Law',
          posts: ['Operation'],
        },
        {
          name: 'Mr. Tony Yip',
          posts: ['Operation', 'Web'],
        },
        {
          name: 'Mr. Tommy Han',
          posts: ['Photo'],
        },
        {
          name: 'Mr. Ranger Ken',
          posts: ['Photo'],
        },
        {
          name: 'Mr. Ivan Ip',
          posts: ['Program'],
        },
        {
          name: 'Mr. Ting',
          posts: ['Program'],
        },
        {
          name: 'Mr. Joe Chan',
          posts: ['Video'],
        },
        {
          name: 'Mr. Austin Leung',
          posts: ['Video'],
        },
      ],
    };
  },
};
</script>

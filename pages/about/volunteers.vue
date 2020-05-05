<style lang="scss">
  .aboutVolunteerPage {
    @include container();
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
      volunteers: [
        {
          name: 'Calvin Tsang',
          avatar: `${process.env.PUBLIC_PATH}/images/volunteer/36cc4b80c152f962ea08477ad3d92182.jpg`,
          description:
            'Vice President of Open Source Hong Kong and Marketing Lead of HKOSCON since 2014. Interested in Front-end Technology | Innovation | Agile Practice. Promote and embrace robust technology for continuous improving I.T. industry in Hong Kong. ',
          posts: ['Conference Chair', 'Program Team Lead', 'Sponsor Team Lead'],
          social: {
            linkedin: 'calvin-tyl',
            github: 'DebugTsang',
          },
        },
        {
          name: 'Cherie Cheung',
          posts: ['Design Team Lead', 'App Dev Team'],
          social: {},
        },
        {
          name: 'Claire Chung',
          avatar: `${process.env.PUBLIC_PATH}/images/volunteer/7871c0482c9d274d68fe1d056a7cce8b.jpg`,
          description:
            'Academic researcher in Bioinformatics / Geek coder / Graphic design / Language enthusiast / Volunteer. Co-authored on Python Data Visualization Books and spoke at PyConHK; front-end development of mental health service search engine. Ever learn, ever challenge, ever explore.',
          posts: ['Interpretation Team Lead', 'Marketing Team', 'PR Team'],
          social: {
            linkedin: 'claire-chung',
          },
        },
        {
          name: 'Daisy Maris Fung',
          avatar:
            'http://www.gravatar.com/avatar/822d46a19923f28d1fe527bd2b2f82e8?s=128',
          posts: ['Administration Team Lead', 'Marketing Tead Lead', 'PR Team'],
          social: {},
        },
        {
          name: 'Haggen So',
          avatar: `${process.env.PUBLIC_PATH}/images/volunteer/c63e3dcf23114e4769ac00c16617d1e9.jpg`,
          description:
            'Dr. Haggen So is an Open Tech. Activists. Interested in FOSS, Open Hardware, Open Standards and Creative Commons.',
          posts: ['Finance Team Lead', 'Program Team'],
          social: {},
        },
        {
          name: 'Henry Law',
          avatar: `${process.env.PUBLIC_PATH}/images/volunteer/318824b7d24aa53a1550c3fdcc3cdaad.jpg`,
          posts: ['Recording Team Lead', 'Program Team'],
          social: {},
        },
        {
          name: 'Judy Wong',
          avatar: `${process.env.PUBLIC_PATH}/images/volunteer/b402043e9d8202b0b252eca0a9e5639e.jpg`,
          description:
            'Geek, Coder, Open Source Enthusiast, Cyber Security Specialist. Worked for 5 jobs in the Hong Kong Science Park previously. Mandarin/English/Cantonese Interpreter, fan of public speaking, part-time MC. Full-time Mother of a 4-year-old & 1-year-old.',
          posts: ['Design Team', 'Interpretation Team', 'Program Team'],
          social: {
            linkedin: 'wongjudy',
            fb: 'judywong',
          },
        },
        {
          name: 'Ken Chiu',
          posts: ['Design Team', 'Operation Team'],
          social: {},
        },
        {
          name: 'Ken Chu',
          avatar: `${process.env.PUBLIC_PATH}/images/volunteer/d22e8f6bf9c2ce9b185c270a442e288a.jpg`,
          posts: ['Administration Team', 'Operation Team', 'Recording Team'],
          social: {},
        },
        {
          name: 'Koala Yeung',
          avatar: `${process.env.PUBLIC_PATH}/images/volunteer/824010d0d7fcf80d2f629309de68becb.jpg`,
          description:
            'Web developer by training. Works with Javascript, PHP, CSS, Golang, and Docker. Convener of "the Loop", a recurring opensource hacker event in Hong Kong. Linux enthusiast. Father of a 3-years-old.',
          posts: ['App Dev Team Lead'],
          social: {
            github: 'yookoala',
            web: 'https://loopdev.community/',
          },
        },
        {
          name: 'Nicholas Yau',
          avatar:
            "https://www.gravatar.com/avatar/f9729bf7b60a37d9874f5a8bd42409c5?s=128'",
          description:
            'System Engineer, blogger, contributor in WordPress and Tor Project, volunteer in local open source community since 2015, including in Open Source Hong Kong and Hong Kong WordPress Meetup.',
          posts: ['Operation Team Lead'],
          social: {
            linkedin: 'nicholasyau',
            fb: 'nicholas.techblog',
            web: 'https://nicholas.hk',
          },
        },
        {
          name: 'Ray Wong',
          description:
            'Veteran copywriter, content producer and marketing personnel. Served various HK local media outlet.',
          posts: ['PR Team Lead', 'Marketing Team', 'Sponsor Team'],
          social: {},
        },
        {
          name: 'Sana Siu',
          description:
            'Make a living with event management, administration and emceeing; specialised in none. Curious to the world, prudential on all works. Kids and cats lover, coffee and tea addict.',
          posts: ['Administration Team', 'Finance Team'],
          social: {},
        },
        {
          name: 'Tommy Han',
          avatar: `${process.env.PUBLIC_PATH}/images/volunteer/ac09c01ecec26e63726faa64ca59fa30.jpg`,
          posts: ['App Dev Team', 'Recording Team'],
          social: {},
        },
        {
          name: 'Toby@Happeas',
          posts: ['Design Team'],
          social: {},
        },
        {
          name: 'Frankie Yuen',
          posts: ['Design Team', 'Interpretation Team'],
          social: {},
        },
        {
          name: 'Holok Chen',
          posts: ['Interpretation Team '],
          social: {},
        },
        {
          name: 'Austin Leung',
          posts: ['Recording Team'],
          social: {},
        },
        {
          name: '包',
          posts: ['Sponsor Team'],
          social: {},
        },
      ],
    };
  },
};
</script>

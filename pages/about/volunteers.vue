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
    title: 'Volunteers | Hong Kong Open Source Confernce 2019',
    meta: [
      { hid: 'og:title', property: 'og:title', content: 'Volunteers | Hong Kong Open Source Conference 2019' },
      { hid: 'description', name: 'description', content: 'Hong Kong Open Source Conference is a volunteer-driven event. Here is our volunteer this year.' },
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
          name: 'Austin Leung',
          posts: ['Record Team'],
        },
        {
          name: 'Calvin Tsang',
          posts: ['Marketing Team Lead'],
          social: {
            twitter: 'debugtsang1',
          },
          avatar: `${process.env.PUBLIC_PATH}/images/volunteer/0355e6c99e405f2d650a048f93849e0a.jpg`,
          description: 'Vice President of Open Source Hong Kong and Marketing Lead of HKOSCON since 2014. Interested in Front-end Technology | Innovation | Agile Practice. Promote and embrace robust technology for continuous improving I.T. industry in Hong Kong.',
        },
        {
          name: 'Claire Chung',
          posts: ['Marketing Team', 'Interpreter (Japanese)'],
          social: {
            linkedin: 'claire-chung',
          },
          avatar: `${process.env.PUBLIC_PATH}/images/volunteer/7871c0482c9d274d68fe1d056a7cce8b.jpg`,
          description: 'Academic researcher in Bioinformatics / Geek coder / Graphic design / Language enthusiast / Volunteer. Co-authored on Python Data Visualization Books and spoke at PyConHK; front-end development of mental health service search engine. Ever learn, ever challenge, ever explore.',
        },
        {
          name: 'Claire Wong',
          posts: ['Design Team Lead'],
          avatar: `${process.env.PUBLIC_PATH}/images/volunteer/e11966ad5e195fef25bf0bd163fb7a98.jpg`,
          description: 'Graduated with Honor in Business Administration Management from De Montfort with major in marketing. Wong has worked as a digital analyst, analyzing digital and social media data, now working in HK01 responsible on product operations.',
          social: {
            twitter: 'blurryclaire',
            linkedin: 'blurryclaire',
            fb: 'clacla',
          },
        },
        {
          name: 'Daisy Maris Fung',
          posts: ['Administration Team', 'Marketing Team'],
          description: 'Event organizer of LikeCoin Hong Kong Meetup and member of Creative Commons Hong Kong chapter. Social media believer and writer, love to write in Cantonese. Recently interested in Chogyam Trungpa Rinpoche, cryptocurrency and Open Data.',
          avatar: 'http://www.gravatar.com/avatar/822d46a19923f28d1fe527bd2b2f82e8?s=128',
          social: {
            web: 'https://www.daisymarisfung.com',
            instagram: 'daisymarisfung',
            medium: 'daisymarisfung',
          },
        },
        {
          name: 'Fiona Lam',
          posts: ['Marketing Team'],
          description: 'An experiential marketing communication specialist with a love for cutting-edge technology, Fiona has been contributing her expertise as a volunteer to market and promote the PyConHK & HKOSCon since 2017. She is the Executive Member, Marketing of Open Source Hong Kong.',
          avatar: `${process.env.PUBLIC_PATH}/images/volunteer/fa29d4359d8c420eec9b84532765dfec.jpg`,
        },
        {
          name: 'Frankie Yuen',
          posts: ['Designer'],
        },
        {
          name: ' Haggen So',
          posts: ['Finance Team Lead'],
          description: 'Dr. Haggen So is an Open Tech. Activists. Interested in FOSS, Open Hardware, Open Standards and Creative Commons.',
          avatar: `${process.env.PUBLIC_PATH}/images/volunteer/c63e3dcf23114e4769ac00c16617d1e9.jpg`,
        },
        {
          name: 'Henry Law',
          posts: ['Record Team Lead'],
          avatar: `${process.env.PUBLIC_PATH}/images/volunteer/318824b7d24aa53a1550c3fdcc3cdaad.jpg`,
        },
        {
          name: 'Ivan Ip',
          posts: ['Program Team'],
          avatar: 'https://secure.gravatar.com/avatar/6427d459c8ad08432aed964d74b9675c',
        },
        {
          name: 'Joe Chan',
          posts: ['Record Team'],
          avatar: `${process.env.PUBLIC_PATH}/images/volunteer/cc93adf96a1b6d795983ede8cb3d111b.jpg`,
        },
        {
          name: 'John Law',
          posts: ['Administration Team'],
          description: 'John Law is an undergraduate at CUHK. He is enthusiastic about open source software development, machine learning, and coding.',
          avatar: `${process.env.PUBLIC_PATH}/images/volunteer/441a4f7b4e3fc43c174c9018a8fe88f3.jpg`,
        },
        {
          name: 'Judy Wong',
          posts: ['Marketing Team', 'Interpreter (English)'],
          description: 'Geek, Coder, Open Source Enthusiast, Cyber Security Specialist. Worked for 5 jobs in the Hong Kong Science Park previously. Mandarin/English/Cantonese Interpreter, fan of public speaking, part-time MC. Full-time Mother of a 4-year-old & 1-year-old.',
          social: {
            linkedin: 'wongjudy',
            fb: 'judywong',
          },
          avatar: `${process.env.PUBLIC_PATH}/images/volunteer/b402043e9d8202b0b252eca0a9e5639e.jpg`,
        },
        {
          name: 'Koala Yeung',
          posts: ['Web Manager', 'Operation Team'],
          avatar: `${process.env.PUBLIC_PATH}/images/volunteer/824010d0d7fcf80d2f629309de68becb.jpg`,
        },
        {
          name: 'Nicholas Yau',
          posts: ['Operation Team Lead'],
          avatar: 'https://www.gravatar.com/avatar/f9729bf7b60a37d9874f5a8bd42409c5?s=128',
        },
        {
          name: 'Ken Chu',
          posts: ['Administration Team'],
          avatar: `${process.env.PUBLIC_PATH}/images/volunteer/d22e8f6bf9c2ce9b185c270a442e288a.jpg`,
        },
        {
          name: 'Sammy Fung',
          posts: ['Conference Chairman', 'Program Chair', 'Sales Lead'],
          description: 'President of Open Source Hong Kong. He is also a Mozilla Representative, and is involving the Python and GNOME community.',
          social: {
            twitter: 'sammyfung',
            linkedin: 'sammyfung',
            web: 'https://sammyfun.com',
          },
          avatar: `${process.env.PUBLIC_PATH}/images/volunteer/5af7cdeb38835c964eeadcb6c8f2c32c.jpg`,
        },
        {
          name: 'Ting',
          posts: ['Program Team'],
        },
        {
          name: 'Toby@Happeas',
          posts: ['Designer'],
        },
        {
          name: 'Tommy Han',
          posts: ['Record Team'],
          avatar: `${process.env.PUBLIC_PATH}/images/volunteer/ac09c01ecec26e63726faa64ca59fa30.jpg`,
        },
        {
          name: 'Tony Yip',
          posts: ['Operation Team'],
          avatar: 'http://www.gravatar.com/avatar/94a1b6213d134229d540c13fc7923fc9?s=128',
          social: {
            twitter: 'tonyhhyip',
            github: 'tonyhhyip',
          },
        },
      ],
    };
  },
};
</script>

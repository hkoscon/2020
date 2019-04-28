<template>
  <main>
    <page-banner title="About Conference" />
    <section class="section">
      <div class="container">
        <div class="content">
          <p>Hong Kong Open Source Conference ( HKOSCon ) is one of the major Open Source conferences in Hong Kong since its first commercement in 2013, bringing an international crowd of developers, contributors, users, IT manager, students and public. The conference aims to promote the open source development into communities and to encourage its application in the industry.</p>
          <p>With different annual themes, related open source sectors are invited to share its open source development and trends of the IT industry and community. The annual celebration is nonetheless supported by the tertiary education sectors, fans and sponsors. Other than talks, speeches &amp; lightning talks, HKOSCon has expanded its scope into workshops, non-conferences, gathering and promotional booths.</p>

          <h2 class="title is-2">
            History
          </h2>
          <p>Mr Sammy Fung, president of Open Source Hong Kong and founder of HKOSCon, envisioned HKOSCon since 2005. After sending a team of Hong Kong open source enthusiasts to visit the Taiwan COSCUP 2011 and having organized a trial conference ( GNOME.Asia 2012 ), the first HKOSCon was co-organized in 2013 with 3 parties: Open Source Hong Kong, Opensource Application Knowledge Association and Hong Kong Linux User Group.</p>
          <p>Since 2014 HKOSCon is co-organized annually by Open Source Hong Kong ( OSHK ), Hong Kong Creative Open Technology Association ( HKCOTA ) and Hong Kong Linux User Group ( HKLUG ), it provides opportunities for open source enthusiasts to interact with the top open source developers worldwide.</p>

          <p>The reasons that you have to join HKOSCon:</p>
          <ul class="is-list">
            <li>To learn about the latest development in Open Source</li>
            <li>Get to attend elite talks from speakers worldwide</li>
            <li>To meet friends and expand your personal network</li>
            <li>Discover Hong Kong</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AboutCocPage',
  head: {
    title: 'About Conference | Hong Kong Open Source Confernce 2019',
    meta: [
      { hid: 'og:title', property: 'og:title', content: 'About Conference | Hong Kong Open Source Conference 2019' },
      { hid: 'description', name: 'description', content: 'Hong Kong Open Source Conference ( HKOSCon ) is one of the major Open Source conferences in Hong Kong since its first commercement in 2013, bringing an international crowd of developers, contributors, users, IT manager, students and public...' },
    ],
  },
  components: {
    PageBanner: () => import('~/components/PageBanner.vue'),
  },
};
</script>

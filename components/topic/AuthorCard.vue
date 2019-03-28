<style lang="scss">
  .authorcard {
    display: flex;
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    &__image {
      width: 280px;
    }
    &__content {
      flex: 1;
      padding: 1em;
    }
  }
  @media only screen and (max-width: 600px) {
    .authorcard{
      display: block;
      &__image {
        width: 100%;
        image {
          width: 100%;
          height: auto;
        }
      }
    }
  }
</style>

<template>
  <div class="authorcard">
    <div class="authorcard__image">
      <figure class="image">
        <img
          :src="speaker.thumbnail"
          :alt="speaker.name"
        >
      </figure>
    </div>
    <div class="authorcard__content">
      <h3 class="title is-4">
        {{ speaker.name }}
      </h3>
      <h4 class="subtitle is-5">
        {{ meta }}
      </h4>
      <div class="authorcard__description" v-html="speaker.description" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthorCard',
  props: {
    speaker: {
      type: Object,
      required: true,
    },
  },
  computed: {
    meta() {
      return [this.speaker.community, this.speaker.country].filter(Boolean).join(' / ');
    },
  },
};
</script>

<style lang="scss">
  .authorCard {
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    &__image {
      max-height: 200px;
      width: auto !important;
    }
  }
</style>

<template>
  <div class="card authorCard">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img
              :src="speaker.thumbnail"
              :alt="speaker.name"
            >
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">
            {{ speaker.name }}
          </p>
          <p class="subtitle is-5">
            {{ meta }}
          </p>
        </div>
      </div>
      <div class="content">
        <div v-html="speaker.description" />
      </div>
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

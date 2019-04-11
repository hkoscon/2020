<style lang="scss">
  .fa-instagram:before {
    content: "\f16d";
  }
  .fa-link:before {
    content: "\f0c1";
  }
  .fa-medium:before {
    content: "\f23a";
  }
  .fa-github:before {
    content: "\f09b";
  }
  .volunteerCard {
    max-width: 256px;
    padding: 3rem 1rem 1rem;
    text-align: center;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .16);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__avatar {
      margin-left: auto;
      margin-right: auto;
    }
    &__teams {
      color: rgba(0, 0, 0, .6)
    }
    &__team {
      &:before {
        content: ' #'
      }
    }
    &__trigger {
      bottom: 5px;
      cursor: pointer;
      transition: .5s;
      user-select: none;
      margin-top: auto;
      &--active {
        transform: rotate(180deg);
      }
    }
    &__description {
      will-change: opacity;
      display: none;
      margin-top: .5rem;
      &--active {
        display: block;
        animation: volunteerCard__description--active__fading .5s ease-in;
        @keyframes volunteerCard__description--active__fading {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      }
    }
    &__social {
      padding: .5rem;
      &--twitter {
        color: #1da1f2;
      }
      &--linkedin {
        color: #0077B5;
      }
      &--fb {
        color: #4267b2;
      }
      &--web {
        color: rgba(0, 0, 0, .6);
      }
      &--instagram {
        color: #C13584;
      }
      &--medium {
        color: #00ab6c;
      }
      &--github {
        color: #000;
      }
    }
  }
</style>

<template>
  <div class="volunteerCard">
    <figure class="image is-64x64 volunteerCard__avatar">
      <img
        :src="avatar"
        :alt="name"
      >
    </figure>
    <p>{{ name }}</p>
    <div class="volunteerCard__teams">
      <span
        v-for="team in teams"
        :key="team"
        class="volunteerCard__team"
      >{{ team }}</span>
    </div>
    <div>
      <template v-if="social && social.github">
        <a :href="`https://github.com/${social.github}`" target="_blank">
          <span class="icon volunteerCard__social volunteerCard__social--github">
            <i class="fa fa-github" />
          </span>
        </a>
      </template>
      <template v-if="social && social.twitter">
        <a :href="`https://twitter.com/${social.twitter}`" target="_blank">
          <span class="icon volunteerCard__social volunteerCard__social--twitter">
            <i class="fa fa-twitter" />
          </span>
        </a>
      </template>
      <template v-if="social && social.medium">
        <a :href="`https://medium.com/@${social.medium}`" target="_blank">
          <span class="icon volunteerCard__social volunteerCard__social--medium">
            <i class="fa fa-medium" />
          </span>
        </a>
      </template>
      <template v-if="social && social.linkedin">
        <a :href="`https://linkedin.com/in/${social.linkedin}`" target="_blank">
          <span class="icon volunteerCard__social volunteerCard__social--linkedin">
            <i class="fa fa-linkedin-square" />
          </span>
        </a>
      </template>
      <template v-if="social && social.web">
        <a :href="social.web" target="_blank">
          <span class="icon volunteerCard__social volunteerCard__social--web">
            <i class="fa fa-link" />
          </span>
        </a>
      </template>
      <template v-if="social && social.fb">
        <a :href="`https://facebook.com/${social.fb}`" target="_blank">
          <span class="icon volunteerCard__social volunteerCard__social--fb">
            <i class="fa fa-facebook" />
          </span>
        </a>
      </template>
      <template v-if="social && social.instagram">
        <a :href="`https://instagram.com/${social.fb}`" target="_blank">
          <span class="icon volunteerCard__social volunteerCard__social--instagram">
            <i class="fa fa-instagram" />
          </span>
        </a>
      </template>
    </div>
    <template v-if="description">
      <span
        @click="showDescription = !showDescription"
        :class="{ 'volunteerCard__trigger--active': showDescription }"
        class="icon volunteerCard__trigger"
        tabindex=""
      >
        <i class="material-icons">keyboard_arrow_down</i>
      </span>
      <p
        class="volunteerCard__description"
        :class="{ 'volunteerCard__description--active': showDescription }"
      >
        {{ description }}
      </p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'VolunteerCard',
  props: {
    /**
     * @type string
     */
    name: {
      type: String,
      required: true,
      default: '',
    },
    /**
     * @type string[]
     */
    teams: {
      type: Array,
      required: true,
      default: () => [],
    },
    /**
     * @type string
     */
    avatar: {
      type: String,
      required: true,
      default: 'https://www.gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e?s=80&d=mm&r=g',
    },
    /**
     * @type string
     */
    description: {
      type: String,
      default: '',
    },
    social: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      showDescription: false,
    };
  },
};
</script>

import url from 'url';

export default {
  functional: true,
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  render(h, { props, slots, children }) {
    if (!props.event.topic) {
      return slots().default[0];
    }
    const u = url.parse(props.event.internal);
    const to = u.pathname.replace('/event/', '/topics/');
    return h('nuxt-link', { props: { to }, staticClass: 'topicWrapper' }, children);
  },
};

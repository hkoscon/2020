import axios from 'axios';
import path from 'path';
import url from 'url';
import flatMap from 'lodash.flatmap';

export default function fetchDays() {
  // Use import local data
  if (process.server && process.env.NUXT_MODE === 'generate') {
    // eslint-disable-next-line
    return Promise.resolve(require('../static/data/timetable.json'));
  }

  return axios.get(process.client && process.env.NODE_ENV === 'production' ? process.env.PUBLIC_TIMETABLE_URL : process.env.TIMETABLE_URL)
    .then(({ data: { days } }) => ({ days }));
}

export function fetchEventInfo() {
  // Use import local data
  if (process.server && process.env.NUXT_MODE === 'generate') {
    // eslint-disable-next-line
    return Promise.resolve(require('../static/data/event_info.json'));
  }

  return axios.get(process.client && process.env.NODE_ENV === 'production' ? process.env.PUBLIC_EVENT_INFO_URL : process.env.EVENT_INFO_URL)
    .then(({ data: { conference } }) => ({ conference }));
}

export function topicSlug(topic) {
  if (typeof topic !== 'object') return '';
  if (typeof topic.internal !== 'string') return topic.replace(/[^_\W]+/g, '', '').replace(' ', '-').toLowerCase();
  const u = url.parse(topic.internal);
  return path.basename(u.pathname);
}

export function fetchTopics() {
  return fetchDays()
    .then(({ days }) => {
      const keys = new Map();
      return flatMap(
        days,
        day => flatMap(day.timeslots, ({ events }) => events),
      )
        .filter((topic) => {
          if (!topic || !topic.topic) {
            return false;
          }

          if (keys.has(topic.internal)) {
            return false;
          }
          keys.set(topic.internal, true);
          return true;
        })
        .sort((left, right) => left.display.localeCompare(right.display));
    });
}

export function fetchTopicById(id) {
  return fetchDays()
    .then(({ days }) => {
      const map = new Map();
      days.forEach(({ day, date, timeslots }) => {
        timeslots.forEach(({ startTime, endTime, events }) => {
          events.forEach((e) => {
            if (!e.topic) return;
            map.set(topicSlug(e), {
              day,
              date,
              startTime,
              endTime,
              ...e,
            });
          });
        });
      });
      return map.get(id);
    });
}

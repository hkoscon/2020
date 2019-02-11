import axios from 'axios';
import path from 'path';
import url from 'url';
import 'core-js/fn/array/flat-map';

const uri = 'https://hkoscon.org/2018/data/timetable.json';

export default function fetchDays() {
  return axios.get(uri)
    .then(({ data: { days } }) => ({ days }));
}

function topicSlug(topic) {
  if (typeof topic !== 'object') return '';
  if (typeof topic.internal !== 'string') return topic.replace(/[^_\W]+/g, '', '').replace(' ', '-').toLowerCase();
  const u = url.parse(topic.internal);
  return path.basename(u.pathname);
}

export function fetchTopics() {
  return fetchDays()
    .then(({ days }) => {
      const keys = new Map();
      return days.flatMap(day => day.timeslots)
        .flatMap(({ events }) => events)
        .filter(({ topic }) => !!topic)
        .sort((left, right) => left.display.localeCompare(right.display))
        .filter((topic) => {
          if (keys.has(topic.internal)) {
            return false;
          }
          keys.set(topic.internal, true);
          return true;
        });
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

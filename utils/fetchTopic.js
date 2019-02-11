import axios from 'axios';

const uri = 'https://hkoscon.org/2018/data/timetable.json';

export default function asyncData() {
  return axios.get(uri)
    .then(({ data: { days } }) => ({ days }));
}

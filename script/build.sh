#!/usr/bin/env bash

set -xe

mkdir -p static/data
curl -o static/data/timetable.json $TIMETABLE_URL
yarn generate
if [ ! -f public/sw.js ]; then
  cp static/sw.js public/sw.js
fi

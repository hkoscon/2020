#!/usr/bin/env bash

set -xe

mkdir -p static/data
curl -o static/data/timetable.json $TIMETABLE_URL
yarn generate
cp static/sw.js public/sw.js
echo "Copy Service Worker"

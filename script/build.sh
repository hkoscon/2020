#!/usr/bin/env bash

set -xe

mkdir -p static/data
curl -o static/data/timetable.json $TIMETABLE_URL
curl -o static/data/event_info.json $EVENT_INFO_URL
NUXT_MODE=generate yarn generate

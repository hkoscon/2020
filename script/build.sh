#!/usr/bin/env bash

set -xe

mkdir -p static/data
curl -o static/data/timetable.json $TIMETABLE_URL
NUXT_MODE=generate yarn generate

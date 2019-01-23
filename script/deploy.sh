#!/usr/bin/env bash

set -ex

cd public

git init
git config user.name "CI Auto Build"
git config user.email "tony@tonyhhyip.me"

git remote add origin $PAGES_REPOSITORY_URL
git fetch && git reset origin/gh-pages

touch .

git add -A .
git commit -m "Build of ${CI_COMMIT_SHA}"
git push -q origin HEAD:gh-pages

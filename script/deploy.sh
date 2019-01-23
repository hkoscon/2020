#!/usr/bin/env bash

if [ -z $PAGES_REPOSITORY_URL ]; then
  echo "No PAGE_REPOSITORY_URL specified. Skip."
  exit 0
fi

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

rm -rf .git

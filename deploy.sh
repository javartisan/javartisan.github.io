#!/usr/bin/env bash

git add .
git commit -m "add docs"
git push

hexo g
hexo d

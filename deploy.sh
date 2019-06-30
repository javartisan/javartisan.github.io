#!/usr/bin/env bash

git status
git add .
git commit -m "add docs"
git push -f

hexo g
hexo d

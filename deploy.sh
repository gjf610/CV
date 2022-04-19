#!/usr/bin/env sh

# 发生错误时终止
set -e
pnpm build &&
git add . &&
git commit -m 'deploy' &&
git branch -M main &&
git remote add origin git@github.com:gjf610/CV.git
git push -f -u origin main
cd -
echo https://gjf610.github.io/CV/dist/index.html
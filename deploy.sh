#!/usr/bin/env sh

# 发生错误时终止
set -e
pnpm build &&
git add . &&
git commit -m 'deploy' &&
git push
cd -
echo https://gjf610.github.io/CV/dist/index.html
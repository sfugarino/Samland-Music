#!/usr/bin/env sh
set -eu

jq -n env | grep -E '\{|\}|SL_MUSIC_' | sed ':begin;$!N;s/,\n}/\n}/g;tbegin;P;D' > /usr/share/nginx/html/assets/api-config.json

exec "$@"
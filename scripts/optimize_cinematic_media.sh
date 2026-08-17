#!/usr/bin/env bash
set -euo pipefail

usage() {
  echo "Usage: $0 desktop|mobile|poster INPUT OUTPUT" >&2
  exit 2
}

test "$#" -eq 3 || usage
command -v ffmpeg >/dev/null 2>&1 || { echo "ffmpeg is required" >&2; exit 1; }

mode="$1"
input="$2"
output="$3"

test -f "$input" || { echo "Input not found: $input" >&2; exit 1; }
mkdir -p "$(dirname "$output")"

case "$mode" in
  desktop)
    ffmpeg -hide_banner -loglevel error -y -i "$input" -an \
      -c:v libx264 -pix_fmt yuv420p -preset slow -crf 20 \
      -g 8 -keyint_min 8 -sc_threshold 0 -movflags +faststart "$output"
    ;;
  mobile)
    ffmpeg -hide_banner -loglevel error -y -i "$input" -an \
      -vf "scale=-2:'min(720,ih)'" -c:v libx264 -pix_fmt yuv420p \
      -preset slow -crf 23 -g 4 -keyint_min 4 -sc_threshold 0 \
      -movflags +faststart "$output"
    ;;
  poster)
    ffmpeg -hide_banner -loglevel error -y -i "$input" -frames:v 1 "$output"
    ;;
  *) usage ;;
esac

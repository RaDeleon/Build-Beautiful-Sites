#!/usr/bin/env bash
set -euo pipefail

usage() {
  echo "Usage: $0 INPUT_VIDEO OUTPUT_DIRECTORY [PREFIX]" >&2
  exit 2
}

test "$#" -ge 2 -a "$#" -le 3 || usage
command -v ffmpeg >/dev/null 2>&1 || {
  echo "ffmpeg is required" >&2
  exit 1
}
command -v ffprobe >/dev/null 2>&1 || {
  echo "ffprobe is required" >&2
  exit 1
}

input="$1"
output_dir="$2"
prefix="${3:-sample}"

test -f "$input" || {
  echo "Input not found: $input" >&2
  exit 1
}

mkdir -p "$output_dir"

ffprobe -v error -select_streams v:0 -show_entries stream=codec_name,width,height,pix_fmt,avg_frame_rate,r_frame_rate:format=duration,size,bit_rate -of default=noprint_wrappers=1 "$input" > "$output_dir/${prefix}-metadata.txt"

duration="$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$input")"

test -n "$duration" || {
  echo "Could not determine duration" >&2
  exit 1
}

sample_time() {
  awk -v duration="$duration" -v fraction="$1" 'BEGIN { t = duration * fraction; if (t > duration - 0.1) t = duration - 0.1; if (t < 0) t = 0; printf "%.3f", t; }'
}

extract_frame() {
  local fraction="$1"
  local label="$2"
  local time
  time="$(sample_time "$fraction")"
  ffmpeg -hide_banner -loglevel error -y -ss "$time" -i "$input" -frames:v 1 -q:v 2 "$output_dir/${prefix}-${label}.jpg"
}

extract_frame 0.00 start
extract_frame 0.25 quarter
extract_frame 0.50 middle
extract_frame 0.75 three-quarter
extract_frame 1.00 ending

printf 'duration_seconds=%s\n' "$duration" > "$output_dir/${prefix}-inspection.txt"
printf 'frames=start,quarter,middle,three-quarter,ending\n' >> "$output_dir/${prefix}-inspection.txt"

echo "Inspection artifacts written to: $output_dir"

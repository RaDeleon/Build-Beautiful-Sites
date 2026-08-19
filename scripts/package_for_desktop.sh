#!/usr/bin/env bash
# Package this skill as a ZIP that Claude Desktop will accept.
#
# Desktop requires the archive to contain a single folder whose name matches the
# `name` field in SKILL.md, with SKILL.md at the top level inside it. This
# repository clones as "Build-Beautiful-Sites", so the copy is renamed here.
#
# Usage: scripts/package_for_desktop.sh [output-directory]   (default: ~/Desktop)

set -euo pipefail

src_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
out_dir="${1:-$HOME/Desktop}"

skill_name="$(sed -n 's/^name:[[:space:]]*//p' "$src_root/SKILL.md" | head -1)"
if [ -z "$skill_name" ]; then
  echo "error: could not read 'name' from $src_root/SKILL.md" >&2
  exit 1
fi

mkdir -p "$out_dir"
stage="$(mktemp -d)"
trap 'rm -rf "$stage"' EXIT

mkdir -p "$stage/$skill_name"
# -a preserves the executable bit on scripts/
(cd "$src_root" && tar -cf - \
  --exclude='.git' \
  --exclude='.DS_Store' \
  --exclude='*.zip' \
  .) | (cd "$stage/$skill_name" && tar -xf -)

zip_path="$out_dir/$skill_name.zip"
rm -f "$zip_path"
(cd "$stage" && zip -rq "$zip_path" "$skill_name")

echo "Packaged: $zip_path"
echo "Size:     $(du -h "$zip_path" | cut -f1)"
echo "Root:     $(unzip -l "$zip_path" | awk 'NR==4{print $4}')"
echo
echo "Install:  Claude Desktop > Customize > Skills > + > Create skill > Upload a skill"

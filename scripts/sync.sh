#!/usr/bin/env zsh

BASE="${0:a:h:h}"
TARGET="${HOME}/.local/share/Anki2/geraldmhorn@gmail.com/collection.media"

echo "Base directory: ${BASE}"
echo "Copying fonts..."
cp "${BASE}/fonts/"*.ttf "${TARGET}"

echo "Copying css..."
cp "${BASE}/css/"_*.css "${TARGET}"
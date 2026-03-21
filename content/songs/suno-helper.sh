#!/bin/bash
# Suno Paste Helper
# Usage: ./suno-helper.sh path/to/suno-prompt.txt
# Copies STYLE to clipboard, waits, then copies LYRICS to clipboard

FILE="$1"
if [ -z "$FILE" ]; then
  echo "Usage: ./suno-helper.sh <suno-prompt-file>"
  echo ""
  echo "Available batch 3 prompts:"
  ls content/songs/batch3/suno-prompts/*.txt 2>/dev/null | while read f; do
    echo "  $f"
  done
  exit 1
fi

# Extract STYLE line (everything after "STYLE: " on that line)
STYLE=$(grep -m1 "^STYLE:" "$FILE" | sed 's/^STYLE: //')

# Extract LYRICS (everything after the "---" + "LYRICS:" line)
LYRICS=$(sed -n '/^LYRICS:/,$ p' "$FILE" | tail -n +2)
# If no LYRICS: header, grab everything after ---
if [ -z "$LYRICS" ]; then
  LYRICS=$(sed -n '/^---$/,$ p' "$FILE" | tail -n +2)
fi

TITLE=$(grep -m1 "^TITLE:" "$FILE" | sed 's/^TITLE: //')

echo "=== $TITLE ==="
echo ""
echo "STYLE copied to clipboard. Paste into Suno's style field."
echo "$STYLE" | pbcopy
read -p "Press ENTER when ready for lyrics..."

echo ""
echo "LYRICS copied to clipboard. Paste into Suno's lyrics field."
echo "$LYRICS" | pbcopy
read -p "Press ENTER when done generating..."

echo ""
echo "Done with $TITLE!"

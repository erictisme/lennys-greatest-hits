#!/bin/bash
# Suno Batch Helper — cycles through all batch 3 prompts
# Usage: cd ~/Desktop/Coding/lenny-contest/lennys-greatest-hits && ./content/songs/suno-batch.sh
# Optional: ./content/songs/suno-batch.sh 5   (start from song 5)

DIR="content/songs/batch3/suno-prompts"

echo "=== SUNO BATCH GENERATOR ==="
echo "Commands at any prompt:"
echo "  ENTER = continue    s = skip    r = redo style    q = quit"
echo ""

FILES=("$DIR"/*.txt)
TOTAL=${#FILES[@]}
START=${1:-1}
INDEX=$((START - 1))

while [ $INDEX -lt $TOTAL ]; do
  FILE="${FILES[$INDEX]}"
  COUNT=$((INDEX + 1))
  TITLE=$(grep -m1 "^TITLE:" "$FILE" | sed 's/^TITLE: //')

  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "  Song $COUNT of $TOTAL: $TITLE"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  # TITLE first
  echo "$TITLE" | tr -d '\n' | pbcopy
  echo "✓ TITLE copied: $TITLE"
  read -p "  [ENTER=style, r=recopy title, s=skip, b=back, q=quit] " CMD0
  case "$CMD0" in
    r) echo "$TITLE" | tr -d '\n' | pbcopy; echo "  ↻ TITLE re-copied." ;;
    s) echo "  Skipped $TITLE"; INDEX=$((INDEX + 1)); continue ;;
    b) INDEX=$((INDEX - 1)); [ $INDEX -lt 0 ] && INDEX=0; echo "  ← Going back..."; continue ;;
    q) echo "Bye!"; exit 0 ;;
  esac

  # STYLE LOOP — can redo
  while true; do
    STYLE=$(grep -m1 "^STYLE:" "$FILE" | sed 's/^STYLE: //')
    echo "$STYLE" | pbcopy
    echo "✓ STYLE copied. Paste into Suno style field."
    read -p "  [ENTER=lyrics, r=recopy style, t=recopy title, s=skip, b=back, q=quit] " CMD

    case "$CMD" in
      r) echo "  ↻ STYLE re-copied to clipboard."; continue ;;
      t) echo "$TITLE" | tr -d '\n' | pbcopy; echo "  ↻ TITLE re-copied."; continue ;;
      s) echo "  Skipped $TITLE"; break ;;
      b) INDEX=$((INDEX - 1)); [ $INDEX -lt 0 ] && INDEX=0; echo "  ← Going back..."; break ;;
      q) echo "Bye!"; exit 0 ;;
      *) ;; # ENTER — proceed to lyrics
    esac

    # LYRICS LOOP — can redo
    while true; do
      LYRICS=$(sed -n '/^LYRICS:$/,$ p' "$FILE" | tail -n +2)
      if [ -z "$LYRICS" ]; then
        LYRICS=$(sed -n '/^---$/,$ p' "$FILE" | tail -n +2)
      fi
      echo "$LYRICS" | pbcopy
      echo "✓ LYRICS copied. Paste into Suno lyrics field and hit Create."
      read -p "  [ENTER=next song, r=recopy lyrics, R=redo style, s=skip, b=back, q=quit] " CMD2

      case "$CMD2" in
        r) echo "  ↻ LYRICS re-copied to clipboard."; continue ;;
        R) echo "  ↻ Going back to style..."; break ;;
        s) echo "  Skipped $TITLE" ;;
        b) INDEX=$((INDEX - 1)); [ $INDEX -lt 0 ] && INDEX=0; echo "  ← Going back..." ;;
        q) echo "Bye!"; exit 0 ;;
        *) echo "  ✓ $TITLE done!" ;;
      esac
      break
    done

    # If CMD2 was R, loop back to style; otherwise break out
    [ "$CMD2" = "R" ] && continue || break
  done

  # Only advance if we didn't go back
  [ "$CMD" = "b" ] || [ "$CMD2" = "b" ] || INDEX=$((INDEX + 1))
done

echo ""
echo "=== ALL $TOTAL SONGS COMPLETE ==="

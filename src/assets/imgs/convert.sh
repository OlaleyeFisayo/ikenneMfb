for file in *.jpg *.jpeg; do
    [ -e "$file" ] || continue
    base="${file%.*}"
    ext="${file##*.}"
    ffmpeg -i "$file" -vf scale=20:-1 "${base}-small.${ext}"
done

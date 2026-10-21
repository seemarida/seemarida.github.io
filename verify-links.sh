#!/bin/bash

echo "=== Verifying workData.ts Resources ==="
echo ""

errors=0

# Check file existence
check_file() {
  local file=$1
  local project=$2
  if [ -f "public/$file" ]; then
    echo "  ✓ $file"
  else
    echo "  ✗ Missing: $file (project: $project)"
    ((errors++))
  fi
}

echo "children-movement:"
check_file "emotibit.jpeg" "children-movement"
check_file "thesis_photo.png" "children-movement"

echo ""
echo "ppg-skin-tones:"
echo "  (no resources)"

echo ""
echo "biosignal-pipeline:"
check_file "biosignal-pipeline.png" "biosignal-pipeline"

echo ""
echo "eeg-attention:"
check_file "projects/cogs189_final_project.pdf" "eeg-attention"
check_file "experiment.png" "eeg-attention"
check_file "freq.png" "eeg-attention"
check_file "channels.png" "eeg-attention"

echo ""
echo "clip-illusions:"
echo "  ✓ https://github.com/seemarida/COGS118B_FinalProject_Team21 (external)"

echo ""
echo "rnn-sarcasm:"
check_file "projects/cogs_185_final_report.pdf" "rnn-sarcasm"
echo "  ✓ https://github.com/seemarida/cogs185_final_project (external)"

echo ""
echo "icg-neural-correlations:"
echo "  ✓ https://github.com/seemarida/zebrafishProject (external)"

echo ""
echo "=== Checking thumbnails ==="
check_file "emotibit.jpeg" "children-movement (thumbnail)"
check_file "thesis_photo.png" "ppg-skin-tones (thumbnail)"
check_file "biosignal-pipeline.png" "biosignal-pipeline (thumbnail)"
check_file "attention.png" "eeg-attention (thumbnail)"
check_file "optical-illusions-clip.png" "clip-illusions (thumbnail)"

echo ""
echo "=== SUMMARY ==="
if [ $errors -eq 0 ]; then
  echo "✓ All resources verified successfully!"
  exit 0
else
  echo "✗ Found $errors missing file(s)"
  exit 1
fi

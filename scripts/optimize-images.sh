#!/bin/bash

# Image Optimization Script for LGIHE Website
# This script optimizes all images in the public/images directory

echo "🖼️  LGIHE Image Optimization Script"
echo "===================================="
echo ""

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick is not installed."
    echo ""
    echo "To install ImageMagick:"
    echo "  macOS: brew install imagemagick"
    echo "  Ubuntu/Debian: sudo apt-get install imagemagick"
    echo ""
    echo "Alternatively, you can use online tools:"
    echo "  - https://squoosh.app/"
    echo "  - https://tinypng.com/"
    echo "  - https://imageoptim.com/ (Mac only)"
    exit 1
fi

# Create backup directory
BACKUP_DIR="public/images/backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"

echo "📦 Creating backup in $BACKUP_DIR..."
cp public/images/*.jpg "$BACKUP_DIR/" 2>/dev/null || true
cp public/images/*.png "$BACKUP_DIR/" 2>/dev/null || true
echo "✅ Backup created"
echo ""

# Optimize JPG images
echo "🔧 Optimizing JPG images..."
for img in public/images/*.jpg; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        echo "  Processing: $filename"
        
        # Get original size
        original_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
        
        # Optimize: quality 85, strip metadata, progressive
        convert "$img" \
            -quality 85 \
            -strip \
            -interlace Plane \
            -sampling-factor 4:2:0 \
            "$img.tmp"
        
        # Replace original with optimized
        mv "$img.tmp" "$img"
        
        # Get new size
        new_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
        
        # Calculate savings
        savings=$((original_size - new_size))
        percent=$((savings * 100 / original_size))
        
        echo "    Original: $(numfmt --to=iec-i --suffix=B $original_size 2>/dev/null || echo "${original_size} bytes")"
        echo "    Optimized: $(numfmt --to=iec-i --suffix=B $new_size 2>/dev/null || echo "${new_size} bytes")"
        echo "    Saved: ${percent}%"
        echo ""
    fi
done

# Optimize PNG images
echo "🔧 Optimizing PNG images..."
for img in public/images/*.png; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        echo "  Processing: $filename"
        
        # Get original size
        original_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
        
        # Optimize: strip metadata, reduce colors if possible
        convert "$img" \
            -strip \
            -define png:compression-level=9 \
            "$img.tmp"
        
        # Replace original with optimized
        mv "$img.tmp" "$img"
        
        # Get new size
        new_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
        
        # Calculate savings
        savings=$((original_size - new_size))
        percent=$((savings * 100 / original_size))
        
        echo "    Original: $(numfmt --to=iec-i --suffix=B $original_size 2>/dev/null || echo "${original_size} bytes")"
        echo "    Optimized: $(numfmt --to=iec-i --suffix=B $new_size 2>/dev/null || echo "${new_size} bytes")"
        echo "    Saved: ${percent}%"
        echo ""
    fi
done

echo "✅ Image optimization complete!"
echo ""
echo "📊 Summary:"
echo "  - Backup saved to: $BACKUP_DIR"
echo "  - All images optimized with 85% quality"
echo "  - Metadata stripped for privacy and size reduction"
echo "  - Progressive JPEGs for faster perceived loading"
echo ""
echo "🚀 Next steps:"
echo "  1. Test your website locally: npm run dev"
echo "  2. Check image quality visually"
echo "  3. If satisfied, commit and deploy"
echo "  4. If not satisfied, restore from backup"
echo ""

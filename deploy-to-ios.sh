#!/bin/bash
echo "=== Deploying to iOS ==="

echo "1. Building the Next.js app..."
npm run build

echo "2. Syncing with Capacitor..."
npx cap sync ios

echo "3. Opening in Xcode..."
npx cap open ios

echo "=== Done! ==="
echo "In Xcode:"
echo "1. Select your iPhone as target"
echo "2. Press Play button to build and run" 
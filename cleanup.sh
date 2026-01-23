#!/bin/bash

# Remove unused TypeScript files
echo "Cleaning up unused TypeScript files..."

# Remove TypeScript config
rm -f vite.config.ts
echo "✓ Removed vite.config.ts"

# Remove TypeScript declarations
rm -f src/vite-env.d.ts
echo "✓ Removed src/vite-env.d.ts"

# Remove duplicate main entry
rm -f src/main.tsx
echo "✓ Removed src/main.tsx"

# Remove duplicate API utility
rm -f src/utils/api.ts
echo "✓ Removed src/utils/api.ts"

# Remove unused TypeScript components
rm -f src/components/Sidebar.tsx
echo "✓ Removed src/components/Sidebar.tsx"

rm -f src/components/Layout.tsx
echo "✓ Removed src/components/Layout.tsx"

rm -f src/components/Header.tsx
echo "✓ Removed src/components/Header.tsx"

# Remove duplicate entry points
rm -f src/index.jsx
echo "✓ Removed src/index.jsx"

rm -f src/components/Header.js
echo "✓ Removed src/components/Header.js"

# Remove duplicate theme/style files if conflicting
# (keeping src/styles/theme.css and src/index.css)
rm -f src/assets/css/style.css
echo "✓ Removed src/assets/css/style.css"

echo ""
echo "✅ Cleanup complete! TypeScript files removed."
echo "Your project is now 100% JSX-based."

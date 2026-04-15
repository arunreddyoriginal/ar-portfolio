#!/bin/bash
# arunreddy.co — Project Setup Script
# Run this once after cloning/creating the project directory

echo "🚀 Setting up arunreddy.co..."

# Create Next.js project (if not already created)
# npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Install all dependencies
echo "📦 Installing dependencies..."
npm install framer-motion next-themes lucide-react react-hook-form
npm install resend
npm install clsx tailwind-merge

echo "📁 Creating directory structure..."
mkdir -p src/app/api/contact
mkdir -p src/app/projects/\[slug\]
mkdir -p src/components/layout
mkdir -p src/components/sections
mkdir -p src/data
mkdir -p src/lib

echo "📝 Creating .env.local template..."
cat > .env.local << 'EOF'
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=arunreddy.co@gmail.com
NEXT_PUBLIC_SITE_URL=https://arunreddy.co
EOF

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Copy all source files from this package into src/"
echo "2. Add your RESEND_API_KEY to .env.local (get free key at resend.com)"
echo "3. Run: npm run dev"
echo "4. Deploy: vercel deploy"

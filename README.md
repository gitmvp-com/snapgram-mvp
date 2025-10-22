# Snapgram MVP

A simplified MVP version of a social media application built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 📱 View posts in a feed
- ✨ Create new posts with images
- 🎨 Beautiful dark theme UI
- 📱 Responsive design
- 🚀 Fast performance with Vite

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Hook Form** - Form handling
- **Zod** - Validation
- **Shadcn UI** - UI components
- **React Router** - Navigation

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gitmvp-com/snapgram-mvp.git
cd snapgram-mvp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/     # Reusable UI components
├── lib/           # Utility functions
├── pages/         # Page components
├── types/         # TypeScript types
├── App.tsx        # Main app component
├── main.tsx       # App entry point
└── globals.css    # Global styles
```

## MVP Scope

This is a minimal viable product focusing on core features:

✅ **Included:**
- Post feed with mock data
- Create new posts
- Image upload preview
- Responsive UI
- Form validation

❌ **Not Included (for full version):**
- User authentication
- Database integration
- User profiles
- Like/Save functionality
- Comments
- User search
- Real-time updates

## License

MIT

## Parent Repository

This project is inspired by [adrianhajdin/social_media_app](https://github.com/adrianhajdin/social_media_app)

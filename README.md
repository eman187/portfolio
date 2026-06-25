# Eman Ajmal Premium Portfolio

## Features included
- React + Vite
- Tailwind CSS
- Framer Motion animations
- Glassmorphism premium UI
- Dark / Light theme toggle
- Custom cursor + glow follower
- Scroll progress bar
- Animated particle / blob background
- Typing hero animation
- Project search + filters
- Expandable project descriptions
- Animated stats counters
- Command palette (`Ctrl/Cmd + K`)
- Terminal easter egg (`Shift + T`)
- Responsive layout
- SEO meta tags

## Run locally
```bash
npm install
npm run dev
```

## Resume
Replace `/public/resume.pdf` with your real resume.

## Contact form
The contact form is currently a frontend placeholder.
To enable real email sending, connect EmailJS in:
`src/components/Contact.jsx`

### EmailJS basic steps
1. Create EmailJS account
2. Create a service + template
3. Add your public key
4. Replace the placeholder `handleSubmit` with EmailJS send function

## Adding new projects
Open `src/data.js` and add a new object inside the `projects` array.

## Shortcuts
- `Ctrl/Cmd + K` → open command palette
- `Shift + T` → open terminal easter egg

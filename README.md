# Aetherion - Portfolio Website

A modern, responsive portfolio website for Aetherion software consulting firm, built with Next.js 15.5, Tailwind CSS v4, and TypeScript.

## 🚀 Features

- **Modern Stack**: Next.js 15.5 with App Router, Tailwind CSS v4, TypeScript
- **Responsive Design**: Mobile-first approach with smooth animations
- **Performance**: Turbopack for fast development and builds
- **Contact Form**: Gmail SMTP integration for direct email contact
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/contact/       # Contact form API endpoint
│   ├── globals.css        # Global styles and Tailwind CSS
│   ├── layout.tsx         # Root layout with fonts
│   └── page.tsx           # Main page with all sections
├── components/            # React components
│   ├── Navigation.tsx     # Header navigation
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section with stats
│   ├── Services.tsx      # Services grid
│   ├── TechStack.tsx     # Technology showcase
│   ├── Projects.tsx      # Portfolio projects
│   ├── Team.tsx          # Team members
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer with links
└── data/                 # Data files
    ├── projects.ts       # Project data
    └── team.ts           # Team member data

legacy-design/            # Reference implementation
public/                   # Static assets
├── project_images/       # Portfolio screenshots
├── team_images/          # Team photos
└── tech_stack/           # Technology logos
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd next-js-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` with your Gmail credentials:
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-app-password
   ```

   **Note**: Use an App Password, not your regular Gmail password. Enable 2FA first.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📧 Email Setup

The contact form uses Gmail SMTP for sending emails. To set this up:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. **Update .env.local** with your credentials

## 🚀 Build and Deploy

```bash
# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## 🎨 Customization

### Adding New Projects

Edit `src/data/projects.ts`:

```typescript
{
  id: 'new-project',
  title: 'Project Name',
  date: 'Month Year',
  image: '/project_images/project.png',
  video: 'youtube-video-id',
  description: 'Project description...',
  tech: ['React', 'Node.js'],
  codeLink: 'https://github.com/...',
  demoLink: 'https://demo.example.com',
  category: 'Web Development'
}
```

### Adding Team Members

Edit `src/data/team.ts`:

```typescript
{
  id: 'member-id',
  name: 'Member Name',
  title: 'Position',
  image: '/team_images/member.jpg',
  description: 'Member description...',
  githubLink: 'https://github.com/username',
  linkedinLink: 'https://linkedin.com/in/username'
}
```

### Styling

- **Colors**: Primary color is `#3b4476`, secondary is `#c9cff6`
- **Fonts**: Geist Sans and Geist Mono (automatically loaded)
- **Customization**: Edit `src/app/globals.css` for global styles

## 🧩 Components

Each component is self-contained and can be easily customized:

- **Navigation**: Sticky header with smooth scroll navigation
- **Hero**: Animated gradient background with CTA buttons
- **About**: Mission statement with animated statistics
- **Services**: Grid of services with hover effects
- **TechStack**: Categorized technology showcase
- **Projects**: Portfolio with video modals and project details
- **Team**: Team member profiles with social links
- **Contact**: Form with Gmail SMTP integration
- **Footer**: Company info and navigation links

## 🔧 Tech Stack

- **Frontend**: Next.js 15.5, React 19, TypeScript
- **Styling**: Tailwind CSS v4, CSS Variables
- **Build**: Turbopack (Next.js built-in)
- **Email**: Nodemailer with Gmail SMTP
- **Deployment**: Vercel (recommended)

## 📄 License

This project is private and proprietary to Aetherion.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Local Development Server
- **Primary server**: `python -m http.server 5000` - Serves on port 5000
- **Alternative server**: Use static-web-server via the Replit workflow
- **Configuration**: Server settings in `.config/static-web-server.toml`

### Testing and Deployment
- **No build process required** - This is a static HTML/CSS/JS website
- **Deployment**: Static files can be served directly from any web server
- **Live preview**: Open `index.html` directly or use the development server

## Architecture Overview

This is a professional photography portfolio website built as a **static multi-page application** using vanilla web technologies.

### Core Structure
- **Pages**: 5 main HTML files (`index.html`, `portfolio.html`, `about.html`, `investment.html`, `contact.html`)
- **Styling**: Single centralized stylesheet (`css/style.css`) using modern CSS features
- **Interactivity**: Progressive enhancement with vanilla JavaScript (`js/script.js`)
- **Assets**: Organized directories for `images/`, `css/`, `js/`, and `attached_assets/`

### Key Technical Patterns

#### CSS Architecture
- Uses CSS custom properties for theming
- Mobile-first responsive design with `clamp()` functions for fluid typography
- CSS Grid and Flexbox for layouts
- Masonry-style grid for portfolio galleries

#### JavaScript Modules
The main script initializes these components:
- `initializeHeader()` - Scroll behavior and header styling
- `initializeMobileMenu()` - Hamburger navigation
- `initializeLightbox()` - Portfolio image gallery
- `initializeScrollAnimations()` - Intersection Observer animations
- `initializeParallax()` - Parallax scroll effects
- `initializeContactForm()` - Form validation and submission
- `initializeTestimonialCarousel()` - Testimonial slider

#### Design System
- **Typography**: Google Fonts - "Cormorant Garamond" (headings) + "Inter" (body)
- **Colors**: Minimal palette with `#FAFAF7` (background) and `#1C1C1A` (text)
- **Layout**: Editorial-style with generous whitespace and full-bleed imagery

### External Dependencies
- **Google Fonts**: Preconnected for performance
- **No frameworks or build tools** - Pure vanilla implementation
- **Contact form**: May require backend service integration (currently frontend-only)

### SEO and Performance
- Proper meta tags and Open Graph data
- JSON-LD structured data for photography business
- Lazy loading patterns implemented
- Image optimization through CSS `object-fit`
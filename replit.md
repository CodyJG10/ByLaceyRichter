# By Lacey Richter Photography Portfolio

## Overview

This is a modern, elegant photography portfolio website for Lacey Richter, a professional photographer specializing in couples, portraits, families, and commercial work. The site is built as a static website using vanilla HTML, CSS, and JavaScript with a focus on showcasing photography through clean, editorial-style design. The website features multiple pages including Home, Portfolio, About, Investment (pricing), and Contact sections with responsive design and subtle animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application follows a traditional multi-page static website architecture with no frameworks or build tools:

- **Static HTML Pages**: Five main pages (index.html, portfolio.html, about.html, investment.html, contact.html) with semantic HTML structure
- **CSS Architecture**: Single centralized stylesheet (`css/style.css`) using modern CSS features including CSS Grid, Flexbox, and custom properties
- **JavaScript Enhancement**: Progressive enhancement with vanilla JavaScript (`js/script.js`) for interactive features like mobile navigation, lightbox gallery, and scroll animations
- **Typography System**: Uses Google Fonts with "Cormorant Garamond" for headings and "Inter" for body text
- **Responsive Design**: Mobile-first approach with fluid typography using clamp() functions and responsive grid layouts

### Design System
- **Color Palette**: Minimal monochrome scheme with warm off-white background (#FAFAF7) and dark text (#1C1C1A)
- **Layout Philosophy**: Editorial-style with generous white space, full-bleed hero imagery, and masonry-style portfolio grids
- **Interactive Elements**: Subtle scroll animations, parallax effects, and mobile hamburger navigation
- **Performance Optimization**: Lazy loading for images, efficient CSS with minimal JavaScript footprint

### Content Management
- **Static Asset Structure**: Organized image directory with specific naming conventions for portfolio images
- **SEO Optimization**: Proper meta tags, Open Graph tags, and JSON-LD structured data for search engines
- **Image Handling**: Responsive images with object-fit cover and intrinsic sizing

### User Experience Features
- **Navigation**: Sticky header with smooth scroll behavior and mobile-responsive hamburger menu
- **Portfolio Display**: Masonry grid layout for varied image sizes with lightbox functionality
- **Contact Integration**: Contact form with validation (implementation incomplete in current state)
- **Accessibility**: Proper ARIA labels, semantic HTML structure, and keyboard navigation support

## External Dependencies

### Content Delivery Networks
- **Google Fonts**: Delivers "Cormorant Garamond" and "Inter" typefaces for consistent typography across browsers
- **Font Loading Optimization**: Uses preconnect resource hints for improved performance

### Third-Party Services (Planned/Potential)
- **Form Handling Service**: Contact form likely requires integration with services like Formspree, Netlify Forms, or similar for backend processing
- **Image Optimization**: Static images could benefit from CDN integration for performance optimization
- **Analytics**: Potential integration points for Google Analytics or similar tracking services

### Browser APIs and Standards
- **Intersection Observer API**: Used for scroll-triggered animations and lazy loading
- **CSS Custom Properties**: For maintainable theming and responsive design
- **Web Fonts API**: For progressive font loading and fallback handling

The architecture prioritizes simplicity, performance, and maintainability while providing a professional showcase for photography work. The static nature makes it easily deployable on any web server or static hosting service.
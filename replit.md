# Rasika Desserts Website

## Overview

This is a modern, elegant website for Rasika Desserts, a premium dessert business. The application is a single-page React website that showcases the brand's royal theme with a dark green and gold color scheme. It's designed to drive online orders through third-party delivery platforms (Swiggy and Zomato) and facilitate party order inquiries via WhatsApp.

The website features a luxurious design with smooth animations, responsive layouts, and an emphasis on high-quality product photography. It includes sections for hero presentation, product showcase, party order services, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **Styling**: Tailwind CSS with custom royal color palette and design system
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, customizable components
- **Animations**: Framer Motion for smooth, professional animations and micro-interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Development**: Hot reload with Vite integration for seamless development experience
- **Build Process**: ESBuild for fast production builds
- **Static Assets**: Served through Express with Vite middleware in development

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon serverless PostgreSQL for scalable cloud hosting
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing

### Design System
- **Typography**: Playfair Display for elegant headings, Montserrat for clean body text
- **Color Palette**: Custom royal theme with dark green (#013220), gold (#FFD700), and cream (#FFF8E1)
- **Component System**: Consistent design tokens and reusable components
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

### External Dependencies

- **Database Hosting**: Neon serverless PostgreSQL for production database
- **Font Loading**: Google Fonts for typography (Playfair Display, Montserrat)
- **Icon Library**: Font Awesome for social media and interface icons
- **Third-party Integrations**:
  - Swiggy deep linking for mobile app integration
  - Zomato deep linking for mobile app integration
  - WhatsApp Business API for party order inquiries
- **Development Tools**: Replit-specific plugins for development environment integration
- **Build Dependencies**: PostCSS with Autoprefixer for CSS processing

The architecture prioritizes performance, accessibility, and user experience while maintaining a luxurious brand presentation that aligns with Rasika Desserts' premium positioning.
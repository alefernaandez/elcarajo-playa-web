# Overview

This is a full-stack web application for "El Carajo," a Spanish beach bar. The application features a React frontend with a maritime Andalusian design theme and an Express.js backend. It's designed as a restaurant/bar website showcasing menu items, location information, and contact details with a strong focus on Spanish beach culture and maritime aesthetics.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built using **React with TypeScript** and follows a component-based architecture:

- **UI Framework**: React 18 with TypeScript for type safety
- **Styling**: Tailwind CSS with custom maritime-themed design system featuring beach bar colors (navy blue, sand tones, wood accents)
- **Component Library**: Radix UI components with shadcn/ui styling for consistent, accessible UI elements
- **State Management**: React Query (@tanstack/react-query) for server state management and data fetching
- **Routing**: React Router DOM for client-side navigation
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture

The backend uses a **Node.js Express.js** architecture:

- **Runtime**: Node.js with ES modules
- **Framework**: Express.js for HTTP server and API routing
- **TypeScript**: Full TypeScript support across the entire backend
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for bundling the server code

## Data Storage Solutions

The application implements a **dual-storage approach**:

- **Development Storage**: In-memory storage using a MemStorage class for rapid development
- **Production Database**: PostgreSQL configured with Drizzle ORM
- **Database Client**: Neon serverless PostgreSQL adapter (@neondatabase/serverless)
- **Schema Management**: Centralized schema definition in `shared/schema.ts` using Drizzle
- **Migrations**: Drizzle Kit for database migrations and schema updates

The storage layer uses an interface-based approach (IStorage) allowing seamless switching between memory storage and database implementations.

## Authentication and Authorization

The current schema includes a basic user system with:
- Username/password authentication structure
- User table with serial ID, unique username, and password fields
- Extensible design for adding roles and permissions

## External Dependencies

### Database & ORM
- **PostgreSQL**: Primary database (configured for Neon serverless)
- **Drizzle ORM**: Type-safe database toolkit with Zod integration
- **Drizzle Kit**: Migration management and database introspection

### UI & Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for creating variant-based component APIs

### Development Tools
- **Vite**: Build tool with React plugin and runtime error overlay
- **ESBuild**: Fast JavaScript bundler for production builds
- **TypeScript**: Static type checking across the entire stack
- **Replit Integration**: Development environment plugins for Replit platform

### Validation & Forms
- **Zod**: Schema validation library
- **React Hook Form**: Form management with @hookform/resolvers for Zod integration

The architecture emphasizes type safety, developer experience, and scalability while maintaining a clean separation between frontend presentation, backend logic, and data persistence layers.
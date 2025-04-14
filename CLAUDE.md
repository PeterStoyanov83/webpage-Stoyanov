# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Test Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `ts-node app/tests/testEmail.ts` - Run email sending test

## Code Style Guidelines
- Use TypeScript with strict typing
- Follow React functional component patterns with hooks
- Use 'use client' directive for client components
- Import order: React, libraries, local components, types
- Custom exceptions should extend Error class
- Handle errors with try/catch blocks and proper type checking
- Use async/await for asynchronous operations
- Component props should use interfaces with optional props marked with ?
- Use useState for component state management
- Follow Next.js App Router conventions for routes and layouts
- Use Tailwind CSS for styling
- CSS classes should use kebab-case
- Component names use PascalCase
- Function names use camelCase
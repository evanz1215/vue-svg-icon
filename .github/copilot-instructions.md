# Copilot Instructions for SVG Icon Library

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is a Vue 3 TypeScript library project for creating reusable SVG icon components. The library should:

- Support both Vite Vue3 and Nuxt3 projects
- Provide TypeScript definitions
- Include proper build configuration for npm publishing
- Support dynamic icon loading from assets
- Allow customizable size, color, and styling
- Include caching for performance
- Provide both named exports and default export
- Include proper documentation and examples

## Key Components

- `SvgIcon.vue` - Main icon component with dynamic loading
- Type definitions for icon names and component props
- Build configuration for library distribution
- Examples for both Vite and Nuxt usage

## Architecture Patterns

- Use Vue 3 Composition API
- Implement proper TypeScript typing
- Support tree-shaking for optimal bundle size
- Include proper error handling and loading states

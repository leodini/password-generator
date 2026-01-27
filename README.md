# Password Generator

A modern, secure password generator built with React and TanStack Router. Generate strong, customizable passwords with real-time strength analysis and easy copying to clipboard.

## Features

- 🔐 **Secure Password Generation**: Generate cryptographically secure random passwords
- 🎛️ **Customizable Options**: Choose password length, character types (letters, numbers, special characters)
- 📊 **Real-time Strength Analysis**: Visual feedback on password strength
- 📋 **One-click Copy**: Instantly copy generated passwords to clipboard
- 🔄 **Dual Modes**: Switch between Random and PIN generation
- 🎨 **Modern UI**: Clean, responsive interface with Tailwind CSS
- ⚡ **TypeScript**: Fully typed for better development experience

## Technology Stack

- **React 19** with TypeScript
- **TanStack Router** for client-side routing
- **Tailwind CSS** for styling
- **Jotai** for state management
- **Vite** for development and building
- **Biome** for linting and formatting

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd password-generator
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

### Random Password Mode
- Generate passwords with customizable length
- Include/exclude uppercase letters, lowercase letters, numbers, and special characters
- Real-time password strength indicator

### PIN Mode
- Generate numeric PIN codes
- Customizable PIN length
- Ideal for numeric security codes

## Available Scripts

- `pnpm dev` - Start development server on port 3000
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm test` - Run tests with Vitest
- `pnpm lint` - Lint code with Biome
- `pnpm format` - Format code with Biome
- `pnpm check` - Run all Biome checks

## Project Structure

```
src/
├── components/         # React components
│   ├── button.tsx
│   ├── card.tsx
│   ├── form.tsx
│   ├── password-generator.tsx
│   ├── password-strength.tsx
│   └── ...
├── lib/               # Utility functions
│   ├── generate-password.ts
│   ├── check-password-strength.ts
│   ├── copy-to-clipboard.ts
│   └── ...
├── routes/            # File-based routing
│   ├── __root.tsx
│   └── index.tsx
├── styles/            # CSS modules
└── constants/         # Configuration constants
```

## Security Features

- Uses cryptographically secure random number generation
- No passwords are stored or logged
- Client-side generation ensures privacy
- Strength analysis helps users create secure passwords

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Build with Docker

This project includes Docker support for easy deployment:

1. Build the Docker image:
   ```bash
   docker build -t password-generator .
   ```

2. Run with Docker Compose:
   ```bash
   docker-compose up
   ```

The application will be available at `http://localhost:3000`.
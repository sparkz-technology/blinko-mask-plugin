# Blinko Mask Plugin

A Blinko plugin that allows you to hide sensitive content with a spoiler-like mask. Content wrapped in `||||` markers will be blurred and can be revealed by clicking an eye icon.

## ✨ Features

- **Hide sensitive content**: Wrap any text with `||||` markers to hide it
- **Eye icon toggle**: Click the eye icon to reveal or hide the content
- **Toolbar button**: Easily insert mask syntax using the toolbar icon
- **Smooth animations**: Content blur/reveal with smooth transitions
- **Multilingual support**: Available in English and Chinese

## 📖 Usage

### Syntax

To hide content, wrap it with four pipe characters on each side:

```
||||your secret content here||||
```

### Examples

```markdown
My password is ||||secretpassword123||||

API Key: ||||sk-xxxxxxxxxxxxxxxxxxxx||||

Personal note: ||||This is a private message||||
```

When rendered, the content between the `||||` markers will appear blurred with an eye icon. Click the eye icon to toggle visibility.

### Toolbar

The plugin adds a mask icon (👁️‍🗨️) to the editor toolbar. Click it to insert the mask syntax at the cursor position.

## 🚀 Installation

1. Install the plugin from the Blinko plugin marketplace
2. Enable the plugin in your Blinko settings
3. Start using `||||` syntax in your notes!

## 🛠️ Development

### Prerequisites

- Node.js or Bun
- npm or bun package manager

### Setup

```bash
# Clone the repository
git clone https://github.com/sparkz-technology/blinko-mask-plugin.git
cd blinko-mask-plugin

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun run dev
```

### Build

```bash
npm run release:publish
# or
bun run release:publish
```

## 📁 Directory Structure

```
├── src/              # Source code directory
│   ├── index.tsx     # Main plugin entry point
│   └── locales/      # Translation files
├── release/          # Production build output
├── plugin.json       # Plugin configuration
└── vite.config.ts    # Vite configuration
```

## 📝 License

MIT
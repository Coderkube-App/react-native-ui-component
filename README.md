# ✨ React Native UI Component Library

[![React Native](https://img.shields.io/badge/React_Native-0.74+-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-F7DF1E?style=for-the-badge)](https://opensource.org/licenses/MIT)

A premium, high-fidelity UI component library built with React Native and TypeScript. This project serves as a comprehensive design system, architecturally synchronized with its Flutter counterpart to ensure cross-platform consistency.

---

## 🚀 Key Features

- **🎨 Advanced Design System**: Unified color palette, typography, and spacing tokens.
- **📱 Premium Core Components**: High-performance, customizable UI elements including Buttons, Cards, TextFields, and Typography.
- **🌗 Dark Mode Support**: Native integration with `useColorScheme` for seamless theme switching.
- **🏗️ Architectural Parity**: Structured to mirror the Flutter UI library for consistent development patterns.
- **⚡ Performance Optimized**: Minimal re-renders and smooth animations using native drivers.

---

## 📂 Project Structure

```bash
src/
├── core/               # Core design system and shared components
│   ├── components/     # Atomic UI components (Button, Card, etc.)
│   └── theme/          # Theme definitions (Colors, Fonts, Spacing)
├── modules/            # Feature-based modules
│   ├── design_system/  # Design system showcase and documentation
│   ├── main/           # Main application entry points
│   └── settings/       # User preferences and app settings
└── routes/             # Navigation configuration and stack definitions
```

---

## 💎 Core Components

### 🔠 Typography
A robust typography system with predefined scales (H1-H6, Body, Caption) ensuring consistent text hierarchy.

### 🔘 Buttons
Highly customizable buttons with support for:
- Different variants (Filled, Outlined, Ghost)
- Multiple sizes (Small, Medium, Large)
- Loading states and icons

### 📇 Cards
Elevated surface components with customizable shadow depth, padding, and interactive states.

### 📝 TextField
Premium input fields with built-in validation styles, floating labels, and focus states.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js > 18
- Yarn or NPM
- React Native Environment Setup ([Official Guide](https://reactnative.dev/docs/set-up-your-environment))

### Installation
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-native-ui-component
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Install iOS Pods** (macOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

### Running the App

#### Android
```bash
yarn android
```

#### iOS
```bash
yarn ios
```

---

## 🎨 Design System

Our design system is built on a foundation of clarity and modern aesthetics.

- **Primary Color**: `#6200EE` (Light) | `#BB86FC` (Dark)
- **Secondary Color**: `#03DAC6`
- **Surface**: High-contrast surfaces for readability.

For more details, check out the `src/core/theme` directory.

---

## 🤝 Contribution

Contributions are welcome! Please feel free to submit a Pull Request or open an issue for any feature requests or bug reports.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">Built with ❤️ for the React Native Community</p>

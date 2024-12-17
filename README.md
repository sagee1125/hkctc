# HKCTC

Welcome to the **HKCTC**! This is a React-based web application built using TypeScript. Below is a step-by-step guide to help you set up, manage, and maintain the system. Even if you're not familiar with the code, this README will guide you through the necessary steps.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Configuration Files](#configuration-files)
4. [Troubleshooting](#troubleshooting)

---

## Getting Started

To get the application up and running on your local machine, follow the steps below:

1. **Install Node.js and npm**  
   Ensure that you have [Node.js](https://nodejs.org/) installed on your system. You can verify the installation by running the following commands in your terminal:
   ```bash
   node -v
   npm -v
   ```
2. **Install dependencies**  
   Once you have the code, navigate to the project directory and install all necessary packages using npm:
   ```bash
   npm install
   ```
3. **Start the development server**  
   Run the following command to start the application locally:
   ```bash
   npm start
   ```
4. **Visit the project in your browser**  
   http://localhost:3000

## Project Structure

Here’s an overview of the main folders and files in the project:

```plaintext

hkctc/
│
├── public/
│ └── assets/                             # Static assets (images, videos, PDFs)
│
├── src/                                  # Main project source code
│ ├── components/                         # Reusable UI components
│ ├── pages/                              # Individual pages mapped to routes
│ ├── styles/                             # Project-wide styles
│ ├── const/                              # Configuration files
│ │ ├── NavigationBarConfiguration.ts     # Configuration for navigation bar items
│ │ ├── WhatsNewConfiguration.ts          # Configuration for "What's New" section
│ │ └── RoutesConfiguration.ts            # Route mappings
│
├── package.json                          # Project dependencies and scripts
└── README.md                             # Documentation (this file)
```

## Configuration Files

The configuration files are located in the `src/config/` directory. Each file is used to manage a specific part of the project. For details on how to update or modify configurations, refer to the **comments and examples inside each file**.

```plaintext
src/config/
│
├── navConfig.ts       # Configuration for the navigation bar
├── whatsNewConfig.ts  # Configuration for the "What's New" section
└── routesConfig.ts    # Configuration for routing updates
```

## Troubleshooting

1. **Missing Dependencies**  
   If you encounter missing module errors, ensure all dependencies are installed.
   ```bash
   npm install
   ```
2. **Port Already in Use**  
   If the development server fails to start due to the port being occupied, specify a different port:
   ```bash
   PORT=4000 npm start
   ```
3. **Clearing npm Cache**  
   If installation issues persist, try clearing the npm cache and reinstalling dependencies:
   ```bash
   npm cache clean --force
   npm install
   ```

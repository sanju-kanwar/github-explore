# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Mini GitHub Explorer

This React app allows users to search GitHub usernames and explore their public profile and repositories.

## Features

- ✅ Search GitHub users
- ✅ Display profile info (avatar, bio, repo count, link)
- ✅ Show public repositories with name, description, stars, and links
- ✅ Filter and sort repositories
- ✅ Error handling for not found, network errors, and empty repos

## Tech Stack

- React + Hooks
- Axios for API calls
- Context API for global state
- Responsive CSS

## Run Locally

```bash
git clone https://github.com/sanju-kanwar/github-explore.git
cd github-explorer
npm install
npm run dev

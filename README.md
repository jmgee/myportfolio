# My Personal Portfolio About Me

A modern, responsive portfolio website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.  
Designed to showcase FiveM development work with dedicated pages for **Skills**, **Projects**, **Pricing**, **Feedbacks**, and **Contact**.

## Features

- **Multi-page navigation**
  - Home
  - Skills
  - Projects (configurable server cards)
  - Pricing (FiveM-focused packages)
  - Feedbacks
  - Contact (social cards + links)

- **Configurable content**
  - Projects page uses a simple configuration array (table-style) to add/update servers:
    - name, description, logo, Discord invite, player count, status (active/down)
    - conditional UI behavior (e.g., hides players/Discord button when status is down)
  - Contact page supports a configurable list of social links with icons and styling

- **UI/UX**
  - Clean dark theme
  - Animated page transitions and section reveals (Framer Motion)
  - Tailwind-based components and layout utilities

## Tech Stack

- **Next.js** (App Router)
- **React + TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **lucide-react** icons


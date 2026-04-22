/**
*Name: Sonu Kumari Mahato Panjiyar
*Date: April 21, 2026
*Description: cover setup instructions with live url
*/




## CarVault – Capstone SPA

A multi-view React SPA for managing a personal car collection.
Browse, add, edit, delete and filter cars with full localStorage persistence.

## Setup
npm install
npm run dev

## Live URL
https://sonu1230.github.io/Cars-WebsiteAPP

## GitHub Repo
https://github.com/sonu1230/Cars-WebsiteAPP

## Routing Map
/ → Home landing page
/list → Car list with search filters and sort
/item/:id → Car detail view
/new → Add new car form
/edit/:id → Edit existing car form
* → 404 Not Found

## Data Model
id: string
name: string
category: string (Muscle / Sports / Supercar / Hypercar / EV / GT / Hybrid)
year: number (1885–2025)
hp: number (1–2000)
price: number
description: string (optional)

## Storage Key
a4_items (localStorage)

## Architecture
hooks/ → useItems custom hook handles all data logic and persistence
context/ → ItemsContext Provider exposes state and actions globally
components/ → ItemCard and ItemForm reusable components
views/ → HomeView ListView DetailView CreateEditView
layout/ → Persistent Layout with navbar
```

/**
*Name: Sonu Kumari Mahato Panjiyar
*Date: April 21, 2026
*Description: Register react plugin
*/



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match github repo name 
export default defineConfig({ plugins: [react()], base: '/Cars-WebsiteAPP/'  })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match github repo name 
export default defineConfig({ plugins: [react()], base: '/Cars-WebsiteAPP/'  })

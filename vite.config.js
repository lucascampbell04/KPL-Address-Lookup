import { defineConfig } from 'vite';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
    esm: {
        babelExclude: [],
      },
      build: {
        // Disables the preload.
        modulePreload: false,
      }
});

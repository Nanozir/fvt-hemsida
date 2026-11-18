// @ts-check
import { defineConfig } from 'astro/config';

// Sidan ligger just nu på GitHub Pages: https://nanozir.github.io/fvt-hemsida/
// När föreningen har en egen domän: sätt site till den och ta bort base.
export default defineConfig({
  site: 'https://nanozir.github.io',
  base: '/fvt-hemsida',
});

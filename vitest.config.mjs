import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      provider: 'istanbul',
      thresholds: {
        lines: 0,
        functions: 0,
        branches: 0,
        statements: 0,
      },
      include: ['src'],
    },
  },
});
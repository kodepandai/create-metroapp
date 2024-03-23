import { defineConfig } from 'tsup';
export default defineConfig((option) => ({
  entry: ['src/main.ts', 'src/script/*.ts'],
  clean: true,
  target: 'esnext',
  format: 'esm',
  external: ['@nestjs/core', '@nestjs/microservices'],
  onSuccess: option.watch ? 'node dist/main.js' : undefined,
}));

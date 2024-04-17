import { defineConfig } from 'tsup';
export default defineConfig((option) => ({
  entry: ['src/main.ts', 'src/script/*.ts'],
  clean: true,
  format: 'esm',
  external: ['@nestjs/core', '@nestjs/microservices'],
  sourcemap: true,
  onSuccess: option.watch ? 'node dist/main.js' : undefined,
}));

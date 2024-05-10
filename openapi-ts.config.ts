import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: "http://185.247.185.176:8000/openapi.json",
  output: "src/client",
  base: "http://185.247.185.176:8000",
  client: "axios",
  format: "prettier",
});
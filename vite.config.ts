import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],

  // Prevent styled-components from being externalized during SSR
  ssr: {
    noExternal: ["styled-components"],
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
  proxy: {
    '/api': {
      target: 'https://chat-be-2h56.onrender.com',
      changeOrigin: true,
      secure: false,  // <--- disables SSL cert verification
    }
  }
}
});

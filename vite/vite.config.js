
import { defineConfig } from 'vite'
import { createVuePlugin as vue } from "vite-plugin-vue2";
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
const path = require("path");
export default defineConfig({
    plugins: [legacy({
        targets: ["Chrome > 41",
        "ie >= 11"],
        // additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      }),
      vue(), 
    //   babel({
    //     presets: [[
    //       "@babel/preset-env",
    //       {
    //         "corejs": 2,
    //         "useBuiltIns": "usage",
    //         "targets": {
    //           "ie": "11"
    //         }
    //       }
    //     ]]
    //   })
    ],
  //...
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Garante geração de arquivos estáticos
  experimental: {},
  headers: async () => [
    {
      source: "/chat-widget",
      headers: [
        { key: "X-Frame-Options", value: "ALLOWALL" },
        { key: "Access-Control-Allow-Origin", value: "*" },
      ],
    },
  ],
};

export default nextConfig;

import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const nextConfig: NextConfig = {
  turbopack: {
    // Evita que o Turbopack infira a raiz do workspace a partir de um
    // package-lock.json existente em um diretório superior (ex.: C:\)
    root: path.dirname(fileURLToPath(import.meta.url)),
  },
};

export default nextConfig;

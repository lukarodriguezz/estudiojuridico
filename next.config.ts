import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { 
    unoptimized: true 
  },
  // ESTA ES LA LÍNEA MÁGICA QUE ARREGLA LOS ESTILOS ROTOS:
  basePath: '/estudiojuridico',
  assetPrefix: '/estudiojuridico/',
};

export default nextConfig;
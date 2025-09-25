/** @type {import('next').NextConfig} */

const nextConfig = {
    // Configuração para gerar um build estático
    output: "export",
    distDir: "out",

    // Necessário para o React Router funcionar
    trailingSlash: false,

    // Impede que o Next.js processe URLs que devem ser tratadas pelo React Router
    skipTrailingSlashRedirect: true,

    // Permite que o React Router lide com as rotas do lado do cliente
    basePath: "",

    // Desativa o pré-render de páginas - importante para o React Router
    experimental: {
        appDir: false,
    },
};

module.exports = nextConfig;

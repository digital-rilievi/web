/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        defaultLocale: "it",
        locales: ["it"],
        localeDetection: false,
      },
    async redirects() {
        return [
            // Short links live under /s/. Add one entry per shortened link.
            {
                source: "/s/rc2026",
                destination: "/rapporto-costruzioni-2026.pdf",
                permanent: false,
            },
        ]
    },
}

module.exports = nextConfig

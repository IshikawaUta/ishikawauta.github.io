
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://next.folio.ekasaputra.my.id'; // Ganti dengan domain utama Anda

  return {
    rules: [
        {
            userAgent: '*',
            allow: '/',
        },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

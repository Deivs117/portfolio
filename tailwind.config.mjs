/** @type {import('tailwindcss').Config} */
export default {
  // Escanea todos los archivos de origen en busca de clases de Tailwind
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Tu paleta personalizada premium (Modo Claro Orgánico)
        'bio-bg': '#F4F1EA',     // Beige base tipo papel relajante
        'bio-text': '#121314',   // Negro obsidiana para lectura de alta legibilidad
        'bio-green': '#4E5E52',  // Verde salvia imponente y natural
        'bio-blue': '#8FA9C4',   // Azul glaciar para acentos tecnológicos
        'bio-rose': '#D8A499',   // Palo de rosa para detalles cálidos y bio
        'bio-brown': '#8C7870',  // Café arcilla para bordes y sutilezas
        'bio-silver': '#E5E7EB', // Gris de aluminio anodizado
      },
      fontFamily: {
        // Tus tres tipografías disruptivas elegidas
        sans: ['Montserrat', 'sans-serif'],        // Texto de lectura fluido
        tech: ['Space Grotesk', 'sans-serif'],     // Títulos con carácter e ingeniería
        code: ['Azeret Mono', 'monospace'],        // Etiquetas, metadatos y código cuadriculado
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}
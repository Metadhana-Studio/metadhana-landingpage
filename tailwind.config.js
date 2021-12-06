module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        'lime-green': '#A6FD29',
        'aqua-blue': '#55F5FF',
        'mint-num': 'rgba(255, 185, 185, 0.18)',
        'mint-num-border': 'rgba(183, 150, 255, 1)',
        'add-btn': 'rgba(56, 58, 76, 1)',
        'footer-border': 'rgba(42, 232, 255, 1)',
        'roadmap-color': 'rgba(225, 53, 53, 1)',
        orange: '#FF4848',
        'minting-bg': '#0a0828',
        'neon-blue': '#00F0FF',
        'neon-red': '#ff0022a3',
        'multiverse-box-bg': '#000b19',
        'team-border': '#114662',
      },
    },
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      'squad-from': '#718DD7',
      'squad-to': '#D0F7FF',
      'mint-button-from': 'rgba(142, 79, 171, 0.62)',
      'mint-button-to': 'rgba(122, 222, 236, 0.18)',
      'mint-box-from': 'rgba(146, 235, 255, 0.37)',
      'mint-box-to': 'rgba(107, 206, 171, 0.35)',
      'connect-btn-from': 'rgba(142, 79, 171, 0.62)',
      'connect-btn-to': 'rgba(122, 222, 236, 0.18)',
      'lore-box-from': 'rgba(21, 227, 255, 0.3)',
      'lore-box-to': 'rgba(113, 255, 204, 0.17)',
      'hero-btn-from': 'rgba(106, 35, 139, 1)',
      'hero-btn-to': 'rgba(0, 163, 255, 1)',
      'artist-box-from': 'rgba(201, 38, 38, 1)',
      'artist-box-to': 'rgba(248, 39, 227, 1)',
      'storyteller-box-from': 'rgba(42, 38, 201, 1)',
      'storyteller-box-to': 'rgba(39, 185, 248, 1)',
      'engineers-box-from': 'rgba(253, 245, 41, 1)',
      'engineers-box-to': 'rgba(0, 159, 193, 1)',
      'marketers-box-from': 'rgba(159, 59, 237, 1)',
      'marketers-box-to': 'rgba(248, 52, 39, 1)',
    }),
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};

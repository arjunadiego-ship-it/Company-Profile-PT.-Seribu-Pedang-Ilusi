// Tailwind config
tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          "primary": "#D4AF37",
          "primary-container": "#5D4E44",
          "on-primary": "#2B231F",
          "on-primary-container": "#D4AF37",
          "surface": "#FDFCFB",
          "on-surface": "#2B231F",
          "surface-variant": "#F5F1EE",
          "on-surface-variant": "#635852",
          "outline": "#A6978E",
          "secondary": "#8D786D",
          "background": "#FDFCFB",
          "primary-fixed-dim": "#D4AF37",
          "surface-container-low": "#FAF8F6",
          "surface-container-high": "#F5F1EE",
          "outline-variant": "#E0D7D2"
        },
        fontFamily: {
          "headline": ["Manrope", "sans-serif"],
          "body": ["Inter", "sans-serif"],
          "label": ["Inter", "sans-serif"]
        },
        borderRadius: {
          "DEFAULT": "0.125rem",
          "lg": "0.25rem",
          "xl": "0.5rem",
          "full": "0.75rem"
        },
        backgroundImage: {
          'metallic-gold': 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #B8860B 100%)',
          'glossy-gold': 'linear-gradient(to bottom, #F7E78D 0%, #D4AF37 45%, #C29B2B 50%, #B8860B 100%)'
        }
      },
    },
};

// FAQ toggle
function toggleFAQ(element) {
    const item = element.parentElement;
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.faq-accordion-item').forEach(otherItem => {
        otherItem.classList.remove('active');
    });

    if (!isActive) {
        item.classList.add('active');
    }
}
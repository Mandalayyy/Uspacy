// const { duration } = require("moment");

const REM_BASE = 10;
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const rem = (px, base = REM_BASE) => `${round(px / base)}rem`;
const stripUnit = (value) => parseInt(value, 10);
const media = (resolution, mobileFirst = true) => {
  if (mobileFirst) {
    return `@media (min-width: ${stripUnit(resolution)}px)`;
  }

  return `@media (max-width: ${stripUnit(resolution) - 1}px)`;
};

const extraSizes = {
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '15/12': '125%',
  '1/10': '10%',
  '2/10': '20%',
  '3/10': '30%',
  '4/10': '40%',
  '5/10': '50%',
  '6/10': '60%',
  '7/10': '70%',
  '8/10': '80%',
  '9/10': '90%',
};

const SPACING = {
  full: '100%',
  0: 0,
  1: '1px',
  2: '2px',
  3: '3px',
  4: rem(4),
  5: rem(5),
  6: rem(6),
  7: rem(7),
  8: rem(8),
  9: rem(9),
  10: rem(10),
  11: rem(11),
  12: rem(12),
  13: rem(13),
  14: rem(14),
  15: rem(15),
  16: rem(16),
  18: rem(18),
  20: rem(20),
  24: rem(24),
  25: rem(25),
  26: rem(26),
  28: rem(28),
  30: rem(30),
  31: rem(31),
  39: rem(39),
  35: rem(35),
  40: rem(40),
  41: rem(41),
  45: rem(45),
  50: rem(50),
  55: rem(55),
  60: rem(60),
  65: rem(65),
  70: rem(70),
  75: rem(75),
  80: rem(80),
  85: rem(85),
  90: rem(90),
  95: rem(95),
  100: rem(100),
  110: rem(110),
  115: rem(115),
  120: rem(120),
  130: rem(130),
  140: rem(140),
  145: rem(145),
  150: rem(150),
  155: rem(155),
  160: rem(160),
  165: rem(165),
  170: rem(170),
  180: rem(180),
  190: rem(190),
  200: rem(200),
  210: rem(210),
  220: rem(220),
  230: rem(230),
  240: rem(240),
  250: rem(250),
  260: rem(260),
  280: rem(280),
  300: rem(300),
  350: rem(350),
  400: rem(400),
  440: rem(440),
  500: rem(500),
  600: rem(600),
  640: rem(640),
  700: rem(700),
  800: rem(800),
  900: rem(900),
  1000: rem(1000),
  available: 'calc(100svh - 10rem)'
};

const OPACITY = {
  0: '0',
  10: '0.1',
  20: '0.2',
  30: '0.3',
  40: '0.4',
  50: '0.5',
  60: '0.6',
  70: '0.7',
  80: '0.8',
  90: '0.9',
  100: '1',
};

module.exports = {
  mode: 'jit',
  important: false,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {},
    },
    extend: {
      opacity: OPACITY,
      borderOpacity: OPACITY,
      height: (theme, { breakpoints }) => ({
        ...breakpoints(theme('screens')),
        ...SPACING,
        ...extraSizes,
        screen: '100svh',
      }),
      minHeight: (theme, { breakpoints }) => ({
        ...breakpoints(theme('screens')),
        ...SPACING,
        ...extraSizes,
        screen: '100svh',
      }),
      minWidth: (theme, { breakpoints }) => ({
        ...breakpoints(theme('screens')),
        ...SPACING,
        ...extraSizes,
      }),
      maxWidth: (theme, { breakpoints }) => ({
        ...breakpoints(theme('screens')),
        ...SPACING,
        ...extraSizes,
      }),
      spacing: {
        ...SPACING,
        ...extraSizes,
      },
      inset: (theme) => ({
        ...SPACING,
        ...extraSizes,
        ...theme('spacing'),
        ...theme('width'),
      }),
      transitionTimingFunction: {
        linear: 'linear',
        in: 'cubic-bezier(0.25,0.46,0.45,0.94)',
        out: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        'in-out': 'cubic-bezier(0.19,1,0.22,1)',
        back: 'cubic-bezier(0.68,-0.55,0.27,1.55)',
      },
      transitionDelay: {
        0: '0ms',
      },
      zIndex: {
        n1: '-1',
        n2: '-2',
        n3: '-3',
        n4: '-4',
        n5: '-5',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
      aspectRatio: {
        none: 0,
        square: '1/1',
        '16/9': '16/9',
        '4/3': '4/3',
        '21/9': '21/9',
      },
      scale: {
        ...OPACITY,
      },
      cursor: {
        draggable: 'draggable',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '50%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-5px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '50%': { opacity: '0.5', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'expand': {
          '0%': {width:0, transform: 'translateX(-50%)'},
          '100%': {width: '100vw', transform: 'translateX(-50%)'}
        },
        'slide-out': {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '50%': { opacity: '0.5', transform: 'translateX(10)' },
          '100%': { opacity: '0', transform: 'translateX(20px)' },
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        fade: 'fade 2s ease-in-out infinite',
        'fade-up': 'fade-up 1s ease-out',
        'fade-in': 'fade-in 1s ease-out',
        'fade-out': 'fade-out 0.5s ease-in-out',
        'slide-in': 'slide-in 0.5s ease-out forwards',
        'slide-out': 'slide-out 0.5s ease-in forwards',
        'expand': 'expand 1s ease forwards;',
        pulse: 'pulse 2s infinite',
      },
      transitionProperty: {
        'transform': 'transform',
      },
      scale: {
        '105': '1.05',
      },
      scrollBehavior: {
        'smooth': 'smooth',
      },
      borderColor: ({ theme }) => ({
        ...theme('colors'),
        DEFAULT: theme('currentColor'),
      }),
      borderWidth: {
        DEFAULT: '0.1rem',
        0: '0',
        2: '0.2rem',
        4: '0.4rem',
        8: '0.8rem',
      },
    },
    colors: {
      current: 'currentColor',
      inherit: 'inherit',
      transparent: 'transparent',
      white: '#fff',
      red: '#E22C2C',
      black: {
        ...Object.keys(OPACITY).reduce((acc, key) => ({ ...acc, [`${key}0`]: `rgba(0,0,0, ${OPACITY[key]})` }), {}),
        DEFAULT: '#000',
      },
      purple: '#452AF4',
      orange: '#FCB02D',
      mauve: '#7C69F7',
      coral: '#F7696B',
      black: '#070707',
      gray: 'rgba(255, 255, 255, 0.4)'

      
    },
    screens: {
      xs: '375px',
      sm: '420px',
      md: '768px',
      lg: '1024px',
      laptop: '1280px',
      xl: '1366px',
      '2xl': '1440px',
      '3xl': '1680px',
      fhd: '1920px',
      'h-min': { raw: '(max-height: 800px) and (min-width: 1280px)' },
      land: { raw: '(orientation: landscape) and (max-width: 1023px)' },
    },
    fontFamily: {
      headers: ['Montserrat, system-ui'],
      primary: ['Manrope, system-ui'],
    },
    fontSize: {
      xxs: rem(10),
      xs: rem(12),
      sm: rem(14),
      base: rem(16),
      md: rem(18),
      lg: rem(20),
      xl: rem(22),
    },
    lineHeight: {
      xs: '0.8',
      none: '1',
      tight: '1.1',
      small: '1.2',
      base: '1.3',
      relaxed: '1.4',
      loose: '1.5',
      high: '1.7',
    },
    letterSpacing: {
      tightest: '-0.07em',
      tighter: '-0.03em',
      tight: '-0.02em',
      normal: '0',
      high: '0.01em',
      higher: '0.02em',
      highest: '0.04em',
    },
    borderRadius: {
      none: '0',
      xs: '0.4rem',
      sm: '0.5rem',
      DEFAULT: '1rem',
      md: '1.2rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
      full: '9999px',
      circle: '50%',
    },
  },
  plugins: [
    ({ addComponents, theme, addBase }) => {
      const inputHoverFocus = {
        color: 'currentColor',
        outline: 'none',
      };

      const nonAppearance = {
        appearance: 'none',
        '-moz-appearance': 'none',
        '-webkit-appearance': 'none',
      };

      const headingsGeneral = {
        lineHeight: '1',
        fontWeight: theme('fontWeight.medium'),
        marginBottom: '2rem',
      };

      const BUTTON_STATES = '&:hover, .group:not(.group--no-events):hover &, &.is-active';

      addBase({
        '*': {
          '-webkit-tap-highlight-color': 'transparent',
        },

        'div[style="width: 0; height: 0;"]': {
          position: 'fixed',
          zIndex: -9999,
        },


        html: {
          fontSize: `${REM_BASE}px`,
          marginTop: '0 !important',
          // scrollBehavior: 'initial',

          [media(theme('screens.fhd'))]: {
            fontSize: `${1000 / stripUnit(theme('screens.fhd'))}vw`,
          },
        },

        'html, body': {
          width: '100%',
          minHeight: '100%',
          // 'overscroll-behavior-y': 'none',
        },

        button: {
          '&:focus': {
            outline: 'none',
          },
        },

        body: {
          lineHeight: 0.885,
          fontSize: theme('fontSize.xs'),
          fontFamily: theme('fontFamily.primary'),
          fontWeight: theme('fontWeight.semibold'),
          '-webkit-font-smoothing': 'antialiased',
          marginRight: '0 !important',
          background: theme('colors.white'),
          color: theme('colors.white'),
          overflowX: 'hidden',

          [media(theme('screens.3xl'))]: {
            fontSize: theme('fontSize.base'),
            lineHeight: '0.885',
          },

        },

        '.cursor-none': {
          '*': {
            cursor: 'none !important',
          },
        },

        '[style^="--aspect"]': {
          aspectRatio: 'var(--aspect)',
        },

        'main[tabindex="-1"]': {
          outline: 'none',
        },

        '[data-lenis-prevent]': {
          overscrollBehavior: 'contain',
        },

        '.is-transitioning, .is-animating': {
          pointerEvents: 'none !important',
          cursor: 'progress !important',
        },

        'h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6': {
          ...headingsGeneral,
        },

        'h1, .h1': {
          fontSize: rem(35),
          letterSpacing: '-0.07em',
          lineHeight: 0.885,
          fontWeight: theme('fontWeight.black'),
          fontFamily: theme('fontFamily.headers'),

          [media(theme('screens.md'))]: {
            fontSize: rem(80),
          },

          [media(theme('screens.laptop'))]: {
            fontSize: rem(120),
            letterSpacing: "-0.07em",
          },
        },

        'h2, .h2': {
          fontSize: rem(58),
          letterSpacing: '-0.02em',
          fontFamily: theme('fontFamily.headers'),

          [media(theme('screens.md'))]: {
            fontSize: rem(90),
          },

          [media(theme('screens.laptop'))]: {
            fontSize: rem(170),
            letterSpacing: '-0.08em',
          },
        },

        'h3, .h3': {
          fontSize: rem(24),
          fontWeight: theme('fontWeight.extrabold'),
          fontFamily: theme('fontFamily.headers'),
          letterSpacing: '-0.05em',

          [media(theme('screens.md'))]: {
            fontSize: rem(28),
          },

          [media(theme('screens.laptop'))]: {
            fontSize: rem(34),
          },
        },

        'h4, .h4': {
          fontSize: rem(20),

          [media(theme('screens.laptop'))]: {
            fontSize: rem(36),
          },
        },

        'h5, .h5': {
          fontSize: rem(18),
        },

        'h6, .h6': {
          fontSize: rem(18),
        },

        p: {
          marginBottom: '0',
        },

        '.text-large': {
          fontSize: rem(16),

          [media(theme('screens.tablet'))]: {
            fontSize: rem(18),
          },

          [media(theme('screens.laptop'))]: {
            fontSize: rem(20),
          },
        },

        '.form-group': {
          label: {
            marginBottom: theme('spacing[10]'),
          },
        },

        '.reset-last': {
          '> *:last-child': {
            marginBottom: '0',
          },
        },

        '.wysiwyg': {
          'h1, h2, h3': {
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            margin: '4rem 0',

            [media(theme('screens.laptop'))]: {
              paddingRight: '7rem',
            },

            '&:first-child': {
              marginTop: 0,
            },
          },

          'h1, .h1': {
            fontSize: rem(30),

            [media(theme('screens.laptop'))]: {
              fontSize: rem(40),
            },
          },

          'h2, .h2': {
            fontSize: rem(28),

            [media(theme('screens.laptop'))]: {
              fontSize: rem(36),
            },
          },

          'h3, .h3': {
            fontSize: rem(24),

            [media(theme('screens.laptop'))]: {
              fontSize: rem(34),
            },
          },

          

          h4: {
            marginTop: '3.5rem',
            opacity: 0.4,

            '&:first-child': {
              marginTop: '0 !important',
            },
          },

          a: {
            transition: 'opacity 0.3s',
            textDecoration: 'underline',

            '&:hover': {
              opacity: 0.5,
            },
          },

          p: {
            marginBottom: '0',
          

            '&.has-image': {
              paddingRight: 0,
            },
          },

          '.double-images-container': {
            margin: '4rem 0',
            img: {
              width: '100% !important',
              height: 'auto',
            },
          },

          '.image__container': {
            margin: '4rem 0 6rem',

            [media(theme('screens.laptop'))]: {
              marginBottom: '8rem',
            },
          },

          '.image_resized': {
            [media(theme('screens.lg'), false)]: {
              width: '100% !important',
            },
          },

          'ol, ul': {
            margin: '4rem 0',

            '&:first-child': {
              marginTop: 0,
            },
          },

          img: {
            width: '100%',
            height: 'auto',
            borderRadius: '1rem',
          },

          '.image': {
            margin: '4rem 0',

            '.image__container': {
              margin: 0,
            },

            figcaption: {
              opacity: 0.4,
              marginTop: '1rem',

              [media(theme('screens.lg'))]: {
                paddingRight: '6rem',
              },
            },
          },

          '.media': {
            margin: '4rem 0',
          },

          ol: {
            listStyle: 'none',
            counterReset: 'ol-counter',
            marginBottom: '6rem',

            [media(theme('screens.lg'))]: {
              marginBottom: '10rem',
            },

            li: {
              display: 'flex',
              counterIncrement: 'ol-counter',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(0,0,0,0.2)',
              marginBottom: '4rem',

              [media(theme('screens.lg'))]: {
                paddingRight: '7rem',
              },

              '&:last-child': {
                marginBottom: 0,
              },

              '&:before': {
                content: '"0" counter(ol-counter)',
                gridColumn: 'span 1/span 1',
                width: '16.666%',
                display: 'block',
                flexShrink: '0',

                [media(theme('screens.lg'))]: {
                  gridColumn: 'span 2/span 2',
                  width: '33.333%',
                },
              },
            },
          },

          ul: {
            listStyle: 'none',

            '> li': {
              paddingLeft: '2rem',
              position: 'relative',

              '&:before': {
                content: '""',
                width: '1rem',
                height: '1rem',
                borderRadius: '50%',
                background: 'currentColor',
                position: 'absolute',
                border: '0.2rem solid currentColor',
                left: 0,
                top: '0.45em',
              },
            },

            'ul, ol': {
              paddingTop: '1em',
            },

            ul: {
              '> li': {
                '&:before': {
                  backgroundColor: 'transparent',
                },
              },
            },

            li: {
              marginBottom: '1em',

              '&:last-child': {
                marginBottom: 0,
              },
            },
          },

          '&--font-description, &--case': {
            'ol, ul, p, h1, h2,h3,h4': {
              marginBottom: '1.25em',
              paddingRight: 0,
            },
          },

          '&--case': {
            ul: {
              fontSize: rem(18),

              [media(theme('screens.lg'))]: {
                fontSize: rem(20),
              },
            },
          },
        },
      });

      addComponents({
        '.container': {
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '2rem',
          paddingRight: '2rem',

          [media(theme('screens.lg'))]: {
            paddingLeft: '14rem',
            paddingRight: '14rem',
          },
        },

        '.bgImage':{
          backgroundImage: 'url(/bg.jpg)',
          minHeight: '100vh',
          width: '100%', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          filter: 'blur(64px)', // Додаємо ефект блюру на фон
        
        },

      '.btn': {
  '-webkit-appearance': 'none',
  display: 'inline-block',
  position: 'relative',
  cursor: 'pointer',
  fontSize: rem(12),
  padding: '1.5rem 1.9rem',
  lineHeight: 0.88,
  fontWeight: theme('fontWeight.semibold'),
  fontFamily: theme('fontFamily.primary'),
  userSelect: 'none',
  borderRadius: '100rem',
  textAlign: 'center',
  transition: 'background-color 0.4s ease-in-out, color 0.4s ease-in-out, transform 0.3s ease-in-out', // Збільшена тривалість переходу
  willChange: 'transform, background-color, color',

  [media(theme('screens.laptop'))]: {
    fontSize: rem(16),
    padding: '2.2rem 3.8rem',
  },

  '&:disabled': {
    opacity: 0.5,
    pointerEvents: 'none',
  },

  '&:focus': {
    outline: 'none',
  },

  '&:hover, &:focus': {
    backgroundColor: theme('colors.orange'),
    color: theme('colors.white'),
    transform: 'scale(1.05)', // Легкий зум на ховер
  },

  [BUTTON_STATES]: {
    transitionDelay: '0.1s', // Затримка для плавного переходу
    '.btn__icon': {
      '&:before': {
        transform: 'none',
      },
    },
  },

  '&--primary': {
    backgroundColor: theme('colors.white'),
    color: theme('colors.black'),
  },

  '&--secondary': {
    backgroundColor: theme('colors.purple'),
  },
},



  ".checkbox-container": {
    display: 'flex',
    alignItems: 'start',
    width: '100%',
  },
  
  ".custom-checkbox": {
    display: 'none', // Сховати стандартний чекбокс
  },
  
  ".checkbox-label": {
    position: 'relative',
    display: 'flex',
    
    paddingLeft: '0px', // Відступ для кастомного чекбокса
    fontFamily: theme('fontFamily.primary'),
    fontWeight: theme('fontWeight.medium'),
    lineHeight: '125%',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  
  ".checkbox-label::before": {
    content: '""',
    width: '24px', // Ширина кастомного чекбокса
    height: '24px', // Висота кастомного чекбокса
    backgroundColor: 'rgba(255, 255, 255, 0.05)', // Колір фону
    borderRadius: '4px', // Закруглення країв
    display: 'inline-block',
    marginRight: '20px', // Відстань між чекбоксом і текстом
    transition: 'background-color 0.3s',
    minWidth: '24px'
  },
  
  ".custom-checkbox:checked + .checkbox-label::before": {
    backgroundColor: 'rgba(255, 255, 255, 0.05)', // Колір фону при виборі
  },
  
  ".checkbox-label::after": {
    content: '""',
    position: 'absolute',
    left: '13px', // Центрування по горизонталі
    top: '13px', // Центрування по вертикалі
    width: '14px', // Ширина галочки
    height: '10px', // Висота галочки
    backgroundImage: 'url(/checkmark.svg)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    transform: 'translate(-50%, -50%)', // Центрування галочки
    opacity: 0, // Сховати галочку за замовчуванням
    transition: 'opacity 0.3s',
  },
  
  ".custom-checkbox:checked + .checkbox-label::after": {
    opacity: 1, // Показати галочку при виборі
  },

        "input[type='text'], input[type='password'], input[type='email'], input[type='tel'], textarea, .woocommerce-input-wrapper .choices": {
          width: '100%',
          // backgroundColor: 'rgba(255, 255, 255, 0.04)',
          borderStyle: 'solid',
          borderWidth: '2px',
          borderColor: 'transparent',
          fontFamily: theme('fontFamily.primary'),
          fontSize: rem(12),
          borderRadius: '.4rem',
          padding: '2rem',
          fontWeight: theme('fontWeight.medium'),
          lineHeight: 1,
          transitionProperty: theme('transitionProperty.colors'),
          transitionTimingFunction: theme('transitionTimingFunction[in-out]'),
          transitionDuration: theme('transitionDuration[300]'),
          ...nonAppearance,

          [media(theme('screens.laptop'))]: {
            fontSize: rem(16),
          },

          '&:hover, &:focus, &:not(:placeholder-shown)': inputHoverFocus,

        },

      });
    },
  ],
  future: {
    // removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  variants: {
    aspectRatio: ['responsive'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'checked'],
    borderColor: ['responsive', 'hover', 'focus', 'group-hover', 'checked'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover', 'checked'],
    fontFamily: ['responsive', 'hover', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover', 'checked'],
    transform: ['responsive', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    transformOrigin: ['responsive', 'hover', 'focus', 'group-hover'],
    mixBlendMode: ['responsive'],
    backgroundBlendMode: ['responsive'],
    isolation: ['responsive'],
    transitionTimingFunction: ['responsive', 'hover', 'group-hover'],
    transitionDuration: ['responsive', 'hover', 'group-hover'],
    transitionDelay: ['responsive', 'hover', 'group-hover'],
    pointerEvents: ['responsive', 'hover', 'group-hover'],
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
};

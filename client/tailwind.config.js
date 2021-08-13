module.exports = {
	purge: [],
	darkMode: false,
	theme: {
		translate: {
			'1/7': '14.2857143%',
			'2/7': '28.5714286%',
			'3/7': '42.8571429%',
			'4/7': '57.1428571%',
			'5/7': '71.4285714%',
			'6/7': '85.7142857%',
		},
		colors: {
			primary: '#FF6810',
			'primary-100': '#FF74681F',
			white: '#fff',
			black: '#000',
			dark: '#19191B',
			'gray': '#697883',
			'gray-800': '#222831',
			'gray-400': '#69788366',
			'gray-300': '#222831E5',
			'gray-200': '#7681921A',
			'gray-100': 'rgba(0, 0, 0, 0.06)',
			'blue-900': '#2E2E46',
			'blue-400': '#2E2E46CC',
			'blue-200': '#2e2e4699',
		},
		fontFamily: {
			sans: ['Circular Std', 'sans-serif'],
			sec: ['Airbnb Cereal', 'sans-serif']
		},
		fontSize: {
			xs: ['0.75rem', '1.2rem'],    // 12px
			sm: ['0.875rem', '1.4rem'],   // 14px
			base: ['1rem', '1.6rem'],     // 16px
			lg: ['1.125rem', '1.8rem'],   // 18px
			xl: ['1.5rem', '1.3'],        // 24px
			'2xl': ['1.75rem', '1.27'],   // 28px
			'3xl': ['2.625rem', '1.24'],  // 42px
			'4xl': ['3.375rem', '1.2'],   // 54px
		},
		container: false,
		extend: {
			spacing: {
				'22': '5.625rem'
			},
			maxWidth: {
				'2xs': '15rem',
				'4xs': '25rem'
			},
			minWidth: {
				'button': '134px',
				'button--big': '181px'
			},
			padding: {
				'37': '9.5rem'
			},
			borderWidth: {
				lg: '0.75rem'
			},
			zIndex: {
				'-1': '-1',
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [
		function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
					margin: '0 auto',
					padding: '0 20px',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1210px',
          }
        }
      })
    }
	]
}

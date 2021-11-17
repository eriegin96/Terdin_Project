const colorVars = require('./tailwind/variables');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				zoomInOut: 'zoomInOut 1s ease infinite',
			},
			backgroundColor: (theme) => ({
				...theme('colors'),
				bg1: 'rgba(0, 0, 0, 0.1)',
				bg3: 'rgba(0, 0, 0, 0.3)',
				bg4: 'rgba(0, 0, 0, 0.4)',
				'profile-nav': 'var(--color-bg-secondary)',
			}),
			backgroundImage: {
				'main-background': "url('./resources/img/homepage/bg.webp')",
				'dark-gradient': 'linear-gradient(0deg,var(--color-black,inherit),hsla(0,0%,100%,0))',
				'checkout-platinum':
					'linear-gradient(86deg,var(--color-gray-95) 20%,var(--color-gray-70),var(--color-gray-95) 80%)',
				'brand-btn': 'linear-gradient(225deg,var(--color-brand-coral),var(--color-brand-hot-pink))',
				'bottom-blur': 'linear-gradient(180deg,transparent,var(--color-white))',
			},
			borderRadius: {
				3: '0.1875rem',
				7.5: '1.875rem',
				25: '6.25rem',
			},
			borderWidth: {
				3: '3px',
				25: '100px',
			},
			boxShadow: {
				1: '0 2px 6px 0 rgb(101 110 123 / 14%)',
				2: '0 5px 13px 1px rgb(0 0 0 / 9%)',
				profile: '0 2px 6px 0 rgb(124 133 145 / 77%)',
				'btn-primary': '0 1px 6px 0 rgb(0 0 0 / 27%)',
				'checkout-platinum': '0 1px 20px 0 #999',
				'checkout-gold': '0 1px 20px 0 #e9aa43',
				'checkout-plus': '0 1px 20px 0 rgb(255 67 92 / 38%)',
			},
			colors: { ...colorVars, 'gold-5': 'rgb(193 146 15 / 4%)', 'pink-5': 'rgba(255,68,88,.04)' },
			fill: {
				current: 'currentColor',
				white: '#fff',
			},
			flexGrow: {
				3: 3,
			},
			fontSize: {
				11: '.6875rem',
				13: '.8125rem',
				15: '.9375rem',
				17: '1.0625rem',
				22: '1.375rem',
				110: '6.875rem',
				180: '11.25rem',
			},
			inset: {
				'1/5': '20%',
				'2/5': '40%',
				'3/5': '60%',
				'4/5': '80%',
			},
			keyframes: {
				zoomInOut: {
					'0%, 100%': { width: '80px', height: '80px' },
					'50%': { width: '100px', height: '100px' },
				},
			},
			letterSpacing: {
				1: '1px',
			},
			lineHeight: {
				50: '50px',
				55: '55px',
			},
			minHeight: {
				40: '40px',
				50: '50px',
				54: '54px',
				320: '320px',
			},
			maxHeight: {
				'y-12': 'calc(100vh - 48px)',
				profile: 'calc(375px / 0.8)',
				recs: 'calc(100vh - 103px)',
			},
			minWidth: {
				200: '200px',
				325: '325px',
				364: '364',
			},
			maxWidth: {
				'3/5': '60%',
				'4/5': '80%',
				'9/10': '90%',
				315: '315px',
				325: '325px',
				375: '375px',
				420: '420px',
				667: '667px',
				730: '730px',
			},
			spacing: {
				'3/10': '30%',
				'85/100': '85%',
				'9/10': '90%',
				'95/100': '95%',
				0.75: '3px',
				1.25: '5px',
				4.25: '17px',
				5.5: '22px',
				6.5: '26px',
				7.5: '30px',
				8.5: '34px',
				12.5: '50px',
				13: '52px',
				15: '60px',
				17.5: '70px',
				18: '72px',
				18.25: '73px',
				22: '88px',
				25: '100px',
				26: '104px',
				42: '168px',
				45: '180px',
				81.25: '325px',
				93.75: '375px',
				105: '420px',
				110: '440px',
				126: '504px',
				167: '668px',
			},
			zIndex: {
				1: 1,
				'-1': -1,
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ['active'],
			backgroundImage: ['hover', 'focus'],
			cursor: ['hover'],
			display: ['group-hover'],
			scale: ['group-hover'],
		},
	},
	plugins: [],
};

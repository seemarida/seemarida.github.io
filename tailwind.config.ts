import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				// Brand colors
				'light-pink': '#fbfcfc', // tab
				'creamy-white': '#fbfcfc', // background
				'soft-blue': '#000000', // Text
				'muted-rose': '#b39ddb', // More saturated rose for better visibility
				'safari-bg': '#F2F2F7', // Safari tab background color
				'myName': '#b39ddb',

				// Tag colors
				'tag-green': '#B6D7A8',
				'tag-yellow': '#FFE599',
				'tag-orange': '#F9CB9C',
				'tag-purple': '#D5A6BD',
				'tag-teal': '#A2D9CE',

				// Hover colors
				'tag-green-hover': '#78B159',
				'tag-yellow-hover': '#FFCC33',
				'tag-orange-hover': '#F4A460',
				'tag-purple-hover': '#B980A0',
				'tag-teal-hover': '#66CDAA',

				// Gray scale
				gray: {
					100: '#F3F4F6',
					200: '#E5E7EB',
					300: '#D1D5DB',
					500: '#6B7280',
					600: '#4B5563',
					700: '#374151',
					800: '#1F2937',
				},

				// Core colors
				white: '#FFFFFF',
				black: '#000000',
				transparent: 'transparent',
			},
			animation: {
				float: 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			backgroundImage: {
				'gradient-1': 'linear-gradient(45deg, var(--tw-gradient-from), var(--tw-gradient-to))',
				'gradient-2': 'linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))',
				'gradient-3': 'linear-gradient(225deg, var(--tw-gradient-from), var(--tw-gradient-to))',
				'gradient-4': 'linear-gradient(315deg, var(--tw-gradient-from), var(--tw-gradient-to))',
			},
		},
	},
	plugins: [],
};

export default config;
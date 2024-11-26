import { createTheme } from '@mui/material';

export const theme = createTheme({
		color:{
			title: '#111518',
			subTitle: '#B9B9B9',
			text: '#111518',
			whiteText: '#FFFFFF',

			main: '#FF6B09',
			black: '#111518',
			whiteBg: '#FFF',
			grayBg: '#F1F1F1',

			svgMain: '#FF6B09',
			svgSecondary: '#FFFFFF',

			inputBorder: '#FFFFFF',
			inputBorderHover: '#B9B9B9',
			inputBorderActive: '#FF6B09',

			btnColor: '#FF6B09',
			btnText: '#FFFFFF',
		},
		space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
		fontSizes: {
			xs: '8px', 
			s: '12px',
			n: '14px',
			m: '20px',
			l: '18px',
			xl: '30px',

			Logo: '26px',
			MobileLogo: '17px'
	},
	fontWeights: {
		n: 400,
		m: 600,
		l: 700,
	},
	lineHeights: {
		xs: '12.1px',
		s: '130%',
		n: '16.94px',
		button: '18px',
		authInput: '18px',
		m: '19.18px',
		auth: '20.4px',
		l: '21.78px',
	},
	letterSpacing: {
		xs: '0.03em',
		s: '0.04em',
		n: '',
		button: '0.14em',
		authInput: '',
		m: '',
		auth: '',
		l: '',
	}
	}
)
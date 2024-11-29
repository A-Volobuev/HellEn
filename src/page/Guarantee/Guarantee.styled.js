import styled from '@emotion/styled';
import {GuaranteeFireSvg} from '../../images';

export const Box = styled.section`
	margin-top:129px;

	@media(max-width: 1090.9px) {
		margin-top: 70px;
	}
`;
export const Title = styled.h2`
	margin: 0px;
	text-align: center;

	font-size: 46px;
	font-weight: 700;
	line-height: 130%;
	letter-spacing: 0.03em;

	color: #111518;

	@media(max-width: 1005.9px) {
		font-size: 26px;
	}
`;

export const EdgeBox = styled.ul`
	display: flex;
	gap:20px;
	flex-direction: column;
	margin-top:50px;
	padding: 50px 112px 45px 112px;
	background-color: #F1F1F1;

	@media(max-width: 1090.9px) {
		margin-top: 30px;
	}
	@media(max-width: 800.9px) {
		padding: 30px 64px;
	}
	@media(max-width: 650.9px) {
		padding: 45px 20px;
		width: calc(100% + 40px);
		transform: translateX(-40px)
	}
	@media(max-width: 580.9px) {
		width: 100%;
		transform: translateX(-20px)
	}
`;
export const EdgeItem = styled.li`
	display: flex;
	gap:30px;

	img{
		width: 22px;
		height: 30px;
		background-color: #F1F1F1;
		z-index: 1;
	}

	&.with-border::after {
    content: '';
    display: block;
    border-left: 1px dotted #B9B9B9;
    height: 40px;
    position: absolute;
    left: 12px;
    bottom: -21px;
  }

	@media(max-width: 1005.9px) {
		gap:24px;

		img{
			width: 15px;
			height: 20px;
		}

		&.with-border::after {
			height: 30px;
			left: 7px;
			bottom: -18px;
		}
	}

	@media(max-width: 500.9px) {
		&.with-border::after {
			height: 42px;
			left: 7px;
			bottom: -16px;
		}
	}

	@media(max-width: 420.9px) {
			gap:25px;
		&.with-border::after {
			height: 48px;
			left: 7px;
			bottom: -16px;
		}
	}
`;
export const FireSvg = styled(GuaranteeFireSvg)`
	@media(max-width: 1005.9px) {
		width: 15px;
		height: 20px;
	}
`;
export const EdgeText = styled.p`
	margin: 0px;
	max-width: 1038px;
	
	font-size: 20px;
	font-weight: 500;
	line-height: 130%;

	color: #3D3D3D;

	span{
		color: #FF6B09;
	}

	@media(max-width: 1005.9px) {
		font-size: 12px;
		line-height: 150%;
	}

	@media(max-width: 500.9px) {
		font-size: 12px;
		line-height: 120%;
		min-height: 4em;
	}

	/* Обрезаем текст */
	display: -webkit-box;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 4;

`;





// export const SvgBox = styled.div`
// 	width: 22px;
// 	height: 30px;

// 	&.with-border::after {
//     content: '';
//     display: block;
//     border-left: 1px dotted #B9B9B9;
//     height: 110%;
//     position: relative;
//     right: -11px;
//   }

// 	@media(max-width: 1005.9px) {
// 		width: 15px;
// 		height: 20px;

// 		&.with-border::after {
// 			right: -8px;
// 			height: 120%;
// 		}
// 	}

// 	@media(max-width: 745.9px) {
// 		&.with-border::after {
// 			right: -8px;
// 			height: 120%;
// 		}
// 	}
// `;
// export const EdgeBox = styled.div`
// 	display: flex;
// 	gap:20px;
// 	flex-direction: column;
// 	margin-top:50px;
// 	padding: 50px 112px 45px 112px;
// 	background-color: #F1F1F1;

// 	@media(max-width: 1090.9px) {
// 		margin-top: 30px;
// 	}
// 	@media(max-width: 800.9px) {
// 		padding: 30px 64px;
// 	}
// 	@media(max-width: 650.9px) {
// 		padding: 45px 20px;
// 		width: calc(100% + 40px);
// 		transform: translateX(-40px)
// 	}
// 	@media(max-width: 580.9px) {
// 		width: 100%;
// 		transform: translateX(-20px)
// 	}
// `;
// export const EdgeItem = styled.div`
// 	display: flex;
// 	gap:30px;

// 	@media(max-width: 1005.9px) {
// 		gap:24px;;
// 	}
// `;
// export const FireSvg = styled(GuaranteeFireSvg)`
// 	@media(max-width: 1005.9px) {
// 		width: 15px;
// 		height: 20px;
// 	}
// `;

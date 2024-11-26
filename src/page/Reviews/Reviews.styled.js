import styled from '@emotion/styled';
import { SplideSlide, Splide } from '@splidejs/react-splide';
import {Facebook} from '../../images';
// import { keyframes } from "@emotion/react";
// Анимация
// const arrowHoverR = keyframes`
// 	0% {
// 		transform: translateX(0);
//     }
//     50% {
// 		transform: translateX(-10px);
//     }
//     100% {
// 		transform: translateX(0);
//     }
// `;
// const arrowHoverL = keyframes`
// 	0% {
// 		transform: translateX(0);
//     }
//     50% {
// 		transform: translateX(10px);
//     }
//     100% {
// 		transform: translateX(0);
//     }
// `;
// Стили
export const Box = styled.div`
	margin-top: 130px;
	position: relative;

	@media(max-width: 1100.9px){
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

	@media(max-width: 1100.9px){
		font-size: 26px;
	}
`;
export const SplideCustom = styled(Splide)`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin: 0px auto;
`;
export const SplideSlideCustom = styled(SplideSlide)`
	display: flex;
	gap: 40px;
	padding: 50px 82px;
	margin-top: 50px;
	max-width: 1090px;

	@media(min-width: 581.9px){
		box-shadow: 0px 8px 26px 0px rgba(0, 0, 0, 0.1);
	}
	@media(max-width: 1100.9px){
		margin-top: 30px;
		gap: 46px; 
		padding: 40px;
		max-width: 788px;
	}
	@media(max-width: 900.9px){
		max-width: 688px;
	}
	@media(max-width: 580.9px){
		flex-direction: column;
		gap: 21px;
		padding: 0px 20px;
	}
`;
export const SplideImgBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 17px;

	margin-top:33px;

	@media(max-width: 990.9px){
		margin-top:18px;
	}
`; 
export const SplideImg = styled.img`
	border-radius: 50%;
	width: 150px;
	height: 150px;

	@media(max-width: 580.9px){
	width: 90px;
	height: 90px;
	}
`;
export const SplideTextBox = styled.div`
	display: flex; 
	flex-direction: column;
	max-width: 706px;
`;
export const SplideTitle = styled.h4`
	margin:0px;
	font-size: 30px;
	font-weight: 700;
	letter-spacing: 0.08em;

	color: #FF6B09;

	@media(max-width: 990.9px){
		font-size: 20px;
	}
	@media(max-width: 580.9px){
		font-size: 14px;
		text-align: center;
	}
`; 
export const SplideSubTitle = styled.h6`
	max-width: 482px;
	margin:10px 0px 0px 0px;

	font-size: 14px;
	font-weight: 400;
	line-height: 138%;
	letter-spacing: 0.08em;

	color: #B9B9B9;

	@media(max-width: 990.9px){
		font-size: 12px;
	}

	@media(max-width: 580.9px){
		margin-top: 20px;
		text-align: center;
	}
`; 
export const SplideText = styled.p`
	margin:18px 0px 0px 0px;

	font-size: 18px;
	font-weight: 400;
	line-height: 142%;

	color: #3D3D3D;

	@media(max-width: 990.9px){
		font-size: 12px;
		margin-top: 20px;
	}
	@media(max-width: 580.9px){
		margin-top: 16px;
		text-align: center;
	}
`; 
export const SplideLink = styled.a`
	max-width: 102px;
	margin:0px;
	font-size: 18px;
	font-weight: 400;
	line-height: 128%;
	color: #FF6B09;

	position: relative;
	text-decoration: none;

	@media(max-width: 990.9px){
		font-size: 12px;
	}
	@media(max-width: 580.9px){
		margin: 0px auto;
	}

	/* АНимация */
	transition: transform 0.5s ease-in-out;
	&:hover{
		transform: scale(1.05);
	}

	&::after{
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #FF6B09;
		bottom: 0px;
		left: 0px;

		transform-origin: right;
		transform: scaleX(0);
		transition: transform 0.5s ease-in-out;
	}

	&:hover::after{
		transform-origin: left;
		transform: scaleX(1);
	}
`; 

export const SlideSvg = styled.div`
	width: 35px;
	height: 35px;

	transition: transform 0.5s ease;

&:hover{
	transform: scale(1.2);
} 
`;
export const FacebookIcon = styled(Facebook)`

`;
export const ArrowPrevBtn = styled.button`
	padding: 0px;
	position: absolute;
	border: none;
	left: 0;



	@media(min-width: 581.9px){
		top: 52%;
	}
	@media(max-width: 580.9px){
		bottom: 0px;
	}
	@media(max-width: 500.9px){
		bottom: 6px;
	}
`;
export const ArrowNextBtn = styled.button`
	padding: 0px;
	position: absolute;
	border: none;
	right:0;


	@media(min-width: 581.9px){
		top: 52%;
	}
	@media(max-width: 580.9px){
		bottom: 0px;
	}
	@media(max-width: 500.9px){
		bottom: 6px;
	}
`;

export const PaginationCustom = styled.div`
	display: flex;
	justify-content: center; 
	margin-top: 20px;

	@media(max-width: 580.9px){
		margin-top: 52px;
	}
`;
export const PaginationCustomBtn = styled.button`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  margin: 0 5px;
  border: ${({ active }) => (active ? '1px solid #FF6B09' : '1px solid rgba(0, 0, 0, 0)')};
  background: ${({ avatar }) => `url(${avatar})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: ${({ active }) => (active ? '1' : '0.6')};
  cursor: pointer;
  transition: transform 0.5s ease, border 0.5s ease, opacity 0.5s ease, box-shadow 0.5s ease;
	
	@media(min-width: 580.9px){
		box-shadow: ${({ active }) => (active ? '0px 5px 20px rgba(0, 0, 0, 0.25)': 'none')};
		transform: ${({ active }) => (active ? 'scale(1.2)' : 'scale(1)')};

		&:hover{
		transform: ${({ active }) => (active ? 'scale(1.2)' : 'scale(1.1)')};
	}
	}
`;

export const PaginationMobileBox = styled.div`
	@media(max-width: 580.9px){
		display: flex;
		overflow: hidden;
		width: 170px;
		padding: 6px 18px 6px 6px;
	}
`;
export const PaginationMobileSplide = styled.div`
	@media(max-width: 580.9px){
		display: flex;
		width: 500px;
		transition: transform 0.5s ease;
		/* transform: translateX(${({ mobileSlideIndex }) => (mobileSlideIndex !== 5 ? `-${mobileSlideIndex * 65}px` : "-260px")}); */

		transform: translateX(${({ mobileSlideIndex }) => `-${mobileSlideIndex * 65}px`});
	}
`;
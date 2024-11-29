import styled from '@emotion/styled';
// import {TeachersCheck} from '../../images';

export const Box = styled.section`
	margin-top: 324px;
	width: 100%;

	@media(max-width: 900.9px) {
		margin-top: 295px;
	}
	@media(max-width: 320.9px) {
		margin-top: 308px; 
	}
`;
export const Title = styled.h2`
	margin: 0px;

	font-size: 46px;
	font-weight: 700;
	line-height: 130%;
	letter-spacing: 0.03em;

	color: #111518;

	@media(max-width: 1090.9px){
		font-size: 26px;
	}
`;
export const AboutTeacherBox = styled.div`
	margin-top:50px;
	display: flex;
	gap: 60px;

	@media(max-width: 973.9px) {
		gap: 42px;
		margin-top:30px;
	}
	@media(max-width: 668.9px) {
		gap: 20px;
		flex-direction: column;
		align-items: center;
	}
`;
export const Img = styled.img`
	width: 243px;
	height: 305px;

	@media(max-width: 973.9px) {
		gap: 10px;
	}
	@media(min-width: 831.9px) {
		width: 50%;
		height: auto;
	}
`;
export const OverviewBox = styled.div`
`;
export const SubTitle = styled.h3`
	margin: 0px;

	font-size: 30px;
	font-weight: 700;
	letter-spacing: 0.08em;

	color: #111518;

	@media(max-width: 1090.9px){
		font-size: 20px;

		&::after{
			margin-top: 10px;
		}
	}
	
	&::after{
		content: '';
		display: block;
		width: 100%;
		border-bottom:1px solid #B9B9B9;
		margin-top: 15px;
	}
`;
export const TextBox = styled.div`
	margin-top: 43px;
	display: flex;
	flex-direction: column;
	gap: 28px;

	@media(max-width: 1090.9px){
		gap: 15px;
		margin-top: 30px;
	}
`;
export const Text = styled.p`
	margin: 0px;

	font-size: 18px;
	font-weight: 500;
	line-height: 141%;
	letter-spacing: 0em;

	color:#B9B9B9;

	@media(max-width: 1090.9px){
		font-size: 10px;
		line-height: 171%;
	}
`;
export const DetailLink = styled.a`
	margin-top: 22px;
	display: inline-block;

	font-size: 18px;
	font-weight: 500;
	line-height: 128%;
	letter-spacing: 0em;

	color:#FF6B09;

	position: relative;
	text-decoration: none;

	@media(max-width: 1090.9px){
		margin-top: 20px;

		font-size: 12px;
	}


	/* Анимации */
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



export const EdgeList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 30px;
	margin-top: 30px;
	padding: 0px;

	&::after{
		content: '';
		display: block;
		width: 20px;
		border-bottom:2px solid #FF6B09;
		margin-top: 13px;
	}

	@media(max-width: 1090.9px){
		margin-top: 20px;
		gap: 20px;

		&::after{
			margin-top: 10px;
		}
	}
`;
export const EdgeItem = styled.li`
	display: flex;
	gap: 34px;

	@media(max-width: 1090.9px) {
		gap: 10px;

		img{
			width: 18px;
			height: 14px;
		}
	}
`;
export const EdgeText = styled.p`
	margin: 0px;

	font-size: 16px;
	font-weight: 600;
	letter-spacing: 0.06em;

	color: #111518;

	@media(max-width: 1090.9px){
		font-size: 12px;
	}
`;






// export const EdgeList = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	gap: 30px;
// 	margin-top: 30px;

// 	&::after{
// 		content: '';
// 		display: block;
// 		width: 20px;
// 		border-bottom:2px solid #FF6B09;
// 		margin-top: 13px;
// 	}

// 	@media(max-width: 1090.9px){
// 		margin-top: 20px;
// 		gap: 20px;

// 		&::after{
// 			margin-top: 10px;
// 		}
// 	}
// `;
// export const EdgeItem = styled.div`
// 	display: flex;
// 	gap: 34px;

// 	@media(max-width: 1090.9px) {
// 		gap: 10px;
// 	}
// `;
// export const SvgBox = styled.div`
// 	width: 25px;
// 	height: 20px;

// 	@media(max-width: 1090.9px){
// 		width: 18px;
// 		height: 14px;
// 	}
// `;
// export const TeacherCheck = styled(TeachersCheck)`
// @media(max-width: 1090.9px){
// 		width: 18px;
// 		height: 14px;
// 	}
// `;
// export const EdgeText = styled.p`
// 	margin: 0px;

// 	font-size: 16px;
// 	font-weight: 600;
// 	letter-spacing: 0.06em;

// 	color: #111518;

// 	@media(max-width: 1090.9px){
// 		font-size: 12px;
// 	}
// `;
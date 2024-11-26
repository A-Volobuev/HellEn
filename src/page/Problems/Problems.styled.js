import styled from '@emotion/styled';
import { BgFire } from "../../images";

export const ContentBox = styled.div`
	margin-top: 130px;
	width: 100%;
	height: 560px;
	background-color: #111518;

	box-sizing: border-box;
	position: relative;
	padding: 100px 40px 0px 40px; 
	@media(min-width: 1680px){
		padding: 100px 183px 0px 183px;
	}
	@media(max-width: 1300px) {
		margin-top: 70px;
		padding: 55px 40px 0px 40px; 
	}
	@media(max-width: 900px){
		height: 340px;
	}
	@media(max-width: 620px){
		padding: 25px 20px 0px 20px;
		height: 440px;
	}
	@media(max-width: 430px){
		height: 535px;
	}
`;
export const FireBg = styled(BgFire)`
	position: absolute;
	right: 0;
	bottom: 0;

	@media(max-width: 900px) {
		display: none;
	}
`;
export const TitleBox = styled.div`
	width: 100%;
	z-index:1;
	position: relative;
`;
export const Title = styled.h2`
	margin:0px;

	font-size: 48px;
	font-weight: 700;
	line-height: 130%;
	letter-spacing: 0.01em;

	color: #FFF;

	span{
		color: #FF6B09;
	}

	@media(max-width: 900px) {
		font-size: 24px;
	}
`;
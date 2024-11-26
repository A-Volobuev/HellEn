import styled from '@emotion/styled';

export const Box = styled.div`
	margin-top: 130px;
	height: 1177px;
	box-sizing: border-box;
	position: relative;

	background-color: #111518;
	padding: 120px 0px 0px 0px;

	@media(max-width: 1100px){
		padding:60px 0px 0px 0px; 
		margin-top: 70px;
	}
	@media(max-width: 1110.9px){
		height: 1334px;
	}
	@media(max-width: 767.9px){
		margin-top: 40px;
		padding:50px 0px 0px 0px; 
		height: 2050px;
	}
`;

export const Title = styled.h2`
	margin:0px 0px 0px 40px;

	font-size: 46px;
	font-weight: 700;
	line-height: 130%;
	letter-spacing: 0.03em;

	color: #FFF;

	@media(min-width: 1680px){
		margin:0px 0px 0px 184px;
	}
	@media(max-width: 1110.9px){
		font-size: 26px;
	}
	@media(max-width: 767.9px){
		font-size: 20px;
		text-align: center;
		margin:0
	}
`;
export const Line = styled.span`
	display:block;
	width: 100%;
	border-bottom: 3px solid #FFF;
	margin-top: 58px;

	@media(max-width: 1110.9px){
	width: 0;
	height: 705px;
	display:block;
	border-right: 3px solid #FFF;
	margin: 66px 0px 0px 81px;
	position: absolute;
	}
	@media(max-width: 767.9px){
	height: 1282px;
	margin: 48px 0px 0px 72px;
	}
`;
export const CardList = styled.div`
	padding: 0px 40px;
	display: grid;
	gap: 46px;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

	@media(max-width: 1350.9px){
		display: flex;
	}

	@media(max-width: 1110.9px){
		flex-direction: column;
		padding: 0px 74px;
		margin-top: 40px;
		gap: 30px;
	}

	@media(max-width: 767.9px){
		padding: 0px 65px;
		gap: 40px;
		margin-top: 30px;
	}
`;
export const CardTextColumnBox = styled.div`
	@media(max-width: 1110.9px){
		display: flex;
		gap: 50px;
	}

	@media(max-width: 767.9px){
	flex-direction: column;
	gap: 8px;
	}
`;
export const Card = styled.div`
	@media(min-width: 1110.9px){
		width: 226px;
	}
`;
export const Elipse = styled.div`
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background-color: #FF6B09;

	position: relative;
	top: -10px;
	@media(max-width: 1110.9px){
		top: 18px;
	}
`;
export const CardColumn = styled.div`
	@media(max-width: 1110.9px){
		margin-left: 55px;
	}

	@media(max-width: 767.9px){
	display: flex;
  flex-direction: column;
  gap: 5px;
	margin-left: 57px;
	}

	@media(max-width: 320.9px){
	display: flex;
  flex-direction: column;
  gap: 5px;
	margin-left: 45px;
	}
	
`;
export const CardTitle = styled.h4`
	margin: 40px 0px 0px 0px;

	font-size: 22px;
	font-weight: 600;
	line-height: 128%;
	letter-spacing: 0.08em;

	color: #FFF;

	@media(max-width: 1110.9px){
		font-size: 14px;
		margin: 0px;
		text-transform: uppercase;
	}
`;

export const CardTextBox = styled.div`
	margin-top: 25px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	@media(max-width: 1110.9px){
		width: 150px;
		margin-top: 5px;
		gap: 5px;
	}
	@media(max-width: 767.9px){
		width: 150px;
		margin-top: 0px;
		gap: 5px;
	}
`;
export const CardSubTitle = styled.h5`
	margin: 0px;
	font-size: 20px;
	font-weight: 600;
	letter-spacing: 0.08em;
	line-height: 165%;
	color: #FF6B09;

	@media(max-width: 1110.9px){
		font-size: 12px;
	}
`;
export const CardText = styled.p`
	font-size: 18px;
	font-weight: 400;
	letter-spacing: 0.08em;
	line-height: 128%;
	color: #B9B9B9;
	margin: 0px;
	opacity: 50%;

	@media(max-width: 1110.9px){
		font-size: 12px;
		line-height: 172%;
	}
	@media(max-width: 767.9px){
		font-size: 12px;
		line-height: 190%;
	}
`;

export const BgImg = styled.img`
	width: 41%;
	height: 522px;
	
	object-fit: cover;
	position: absolute;
	bottom:14px;

	@media(max-width: 1110.9px){
		right: 0;
		width: 374px;
		max-height: 273px;
		bottom:239px;
	}
	
	@media(max-width: 767.9px){
		right: 0;
		width: 280px;
		bottom:453px;
	}
	@media(max-width: 540.9px){
		width: 120px;
		height: 137px;
	}
`;

export const VisibleTitle = styled.h3`
	margin: 0;
	font-size: 26px;
	font-weight: 700;
	line-height: 130%;
	letter-spacing: 0.03em;
	color: #FFF;
	text-align: center;
	position: relative;
	top:182px;

	@media(max-width: 767.9px){
		font-size: 20px;
	}
	@media(max-width: 620.9px){
		width: 180px;
		text-align: start;
		margin-left: 20px;
		top:50px;
		z-index:1;
	}
`;
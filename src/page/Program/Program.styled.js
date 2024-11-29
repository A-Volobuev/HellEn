import styled from '@emotion/styled';

export const Box = styled.section`
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
		width: 180px;
		text-align: start;
		margin-left: 20px;
		top:526px;
		z-index:1;
	}

	@media(max-width: 737.90px) {
		top:35px;
	}
`;

export const ProgramList = styled.ol`
	margin: 0px;
	margin-top: 58px;
	padding: 0px 40px;
	display: flex;
	flex-wrap: wrap;
	gap: 46px;
	position: relative;

	list-style: none;
  counter-reset: program-number-counter;

	/* Линия горизонт */
	::after{
		content: '';
		display:block;
		width: 100%;
		border-bottom: 3px solid #FFF;
		position: absolute;
		left: 0px;
		top: -4px;
	}

	@media (max-width: 1110.9px){
		::after{
			display: none;
		}
		/* Линия вертикаль*/
	::before{
		content: '';
		display: block;
		position: absolute;
		height: 717px;
		border-left: 3px solid #FFF;
		margin-left: 40px;
	}
	}

	@media (max-width: 720.9px){
		gap: 40px;
		/* Линия вертикаль моб*/
	::before{
		content: '';
		display: block;
		position: absolute;
		height: 1282px;
		border-left: 3px solid #FFF;
		margin-left: 34px;
	}
	}
`;
export const ProgramListItem = styled.li`
	margin-top: 48px;
	flex: 1 0 calc(20% - 46px);

	/* Елипс десктоп */
	position: relative;
	::before{
		content: '';
		display: block;
		position: absolute;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background-color: #FF6B09;
		top: -59px;
		z-index: 1;
	}

	@media (max-width: 1110.9px){
		flex: 1 0 calc(100% - 80px);
		display: flex;
		flex-direction: column;
		margin-top: 0px;
		padding-left: 80px;
		position: relative;
		top: -16px;


		::before{
			display: none;
		}
	}

	@media( max-width: 767.9px) {
		padding-left: 64px;
	}
`;
export const ProgramListTitle = styled.h3`
margin: 0px;

font-size: 22px;
font-weight: 600;
line-height: 128%;
letter-spacing: 0.08em;

color: #FFF;

@media(max-width: 1110.9px){
	font-size: 14px;
	margin: 0px;
	text-transform: uppercase;
	line-height: 140%;

	position: relative;
	::before{
		content: '';
		display: block;
		position: absolute;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background-color: #FF6B09;
		top: 2px;
		z-index: 1;
		left: -46.5px;
	}
}
	@media(max-width: 767.9px) {
		::before{
			left:-36.5px;
		}
	}
`;

export const LessonList = styled.ul`
	padding: 0px;
	list-style: none;

	@media(max-width: 1110.9px){
		gap: 50px;
		display: flex;
	}

	@media(max-width: 737.9px){
		gap: 8px;
		flex-direction: column;
	}
`;

export const LessonListTitle = styled.h4`
	margin: 0px;
	margin-top: 25px;
	font-size: 20px;
	font-weight: 600;
	letter-spacing: 0.08em;
	line-height: 165%;
	color: #FF6B09;

	@media(max-width: 1110.9px){
		font-size: 12px;
		margin-top: 0px;
		line-height: 259%;
	}
`;

export const LessonListItem = styled.li`
	@media(max-width: 1110.9px){
		margin-top: 5px;
		/*!!! Указываю, что бы они были в 1 линии или лучше гридами? */
		width: 150px;
	}
`;

export const List = styled.ul`
	padding: 0px;
	margin-top: 10px;
	list-style: none;
	@media(max-width: 1110.9px){
		margin-top: 10px;
	}
	@media(max-width: 767.9px){
		margin-top: 5px;
	}
`;
export const Item = styled.li`
	font-size: 18px;
	font-weight: 400;
	letter-spacing: 0.08em;
	line-height: 138%;
	color: #B9B9B9;
	margin: 0px;
	opacity: 50%;

	@media(max-width: 1110.9px){
		font-size: 12px;
		line-height: 148%;
	}
	@media(max-width: 767.9px){
		font-size: 12px;
		line-height: 172%;
	}
`;

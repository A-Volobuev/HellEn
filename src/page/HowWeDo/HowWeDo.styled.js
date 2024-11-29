import styled from '@emotion/styled';
import {HowWeDo1, HowWeDo2, HowWeDo3, HowWeDo4, HowWeDo5, HowWeDo6} from '../../images';

export const Box = styled.section`
	width: 100%;
	margin-top: 280px;

	@media(max-width: 1080.9px) {
		margin-top: 211px;
	}
`;
export const Title = styled.h2`
	margin: 0px;
	font-size: 46px;
	font-weight: 700;
	letter-spacing: 0.03em;
	line-height: 130%;
	color: #111518;

	@media(max-width: 768.9px) {
		font-size: 26px;
		text-align: center;
	}
`;
export const CardList = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 47px;
	justify-content: space-between;
	gap: 20px 30px;

	@media(max-width: 1080.9px) {
		justify-content: space-around;
		margin-top: 30px;
		gap: 20px;
	}
	@media(max-width: 744.9px) {
		gap: 15px;
	}
`;

export const Card = styled.div`
	display: flex;
	flex: 1 0 calc(33.333% - 30px);
	flex-direction: column;
	align-items: center;
	box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.1);
	height: 396px;
	box-sizing: border-box;
	padding: 35px 28px 0px 28px;

	@media(max-width: 1390.9px) {
		height: 315px;
	}
	@media(max-width: 1080.9px) {
		flex: 1 0 calc(50% - 20px);
	}
	@media(max-width: 744.9px) {
		height: 296px;
	}
	@media(max-width: 700.9px) {
		flex: 100%;
	}

	/* Анмиация */
	transition: transform 0.2s ease, background-color 0.5s ease, box-shadow 0.5s ease;

	&:hover{
		background-color: #FF6B09;
		transform: scale(1.05);
		box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.2);

		h4, p{
			color: #FFF;
		}
		svg{
			fill: #FFF;
		}
		p::before{
			background-color: #FFF;
		}
	}
`;
export const CardTitleBox = styled.div`
	height: 53px;
	display: flex;
	align-items: center;
	padding-bottom: 15px;

	@media(max-width: 1080.9px) {
		height: auto;
	}
`;
export const CardTitle = styled.h4`
	margin: 0px;
	max-width: 362px;

	font-size: 20px;
	font-weight: 600;
	letter-spacing: 0.09em;
	line-height: 128%;
	color: #111518;
  
	text-align: center;
	transition: color 0.5s ease;

	@media(max-width: 1390.9px) {
		font-size: 14px;
	}
`;
export const TextBox = styled.div`
	padding: 15px 0px;
	position: relative;
`;
export const Text = styled.p`
	margin: 0px;
	font-size: 18px;
	font-weight: 500;
	letter-spacing: 0.08em;
	line-height: 128%;
	color: #B9B9B9;

	text-align: center;
	transition: color 0.5s ease;

	@media(max-width: 1390.9px) {
		font-size: 12px;
	}

	/* линия */
	&::before{
		content: "";
    width: 20px;
    height: 2px;
    background-color: #FF6B09;
    position: absolute;
    top: 0px;
    left: 50%;
	}

	/* Обрезаем текст */
	display: -webkit-box;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 6;
`;

export const SvgBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 55px;
	height: 55px;

	margin-bottom: 28px;
`;
export const Svg1 = styled(HowWeDo1)`
	fill: #FF6B09;
	transition: fill 0.5s ease;
`;
export const Svg2 = styled(HowWeDo2)`
	fill: #FF6B09;
	transition: fill 0.5s ease;
`;
export const Svg3 = styled(HowWeDo3)`
	fill: #FF6B09;
	transition: fill 0.5s ease;
`;
export const Svg4 = styled(HowWeDo4)`
	fill: #FF6B09;
	transition: fill 0.5s ease;
`;
export const Svg5 = styled(HowWeDo5)`
	fill: #FF6B09;
	transition: fill 0.5s ease;
`;
export const Svg6 = styled(HowWeDo6)`
	fill: #FF6B09;
	transition: fill 0.5s ease;
`;
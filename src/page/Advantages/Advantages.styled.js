import styled from '@emotion/styled';
import {Human, Phone, Dolar} from '../../images';

export const Box = styled.section`
	margin-top: 130px;
	width: 100%;
	display: flex;

	@media (min-width: 1301.9px) {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	}
	@media( max-width: 1300px) {
		justify-content: space-between;
		margin-top: 70px;

		& > div span{
			transform: translateX(25px);
		}

		& > div:nth-of-type(2) span, & > div:nth-of-type(3) span {
			width: 116px;
  	}
	}

	@media( max-width: 1250px) {
		& > div span{
			transform: translateX(0px);
		}
	}

	@media( max-width: 680px) {
		flex-direction: column;
		gap: 30px;
		align-items: center;

		& > div:nth-of-type(2) span{
			width: 141px;
		}
	}
`;

export const CardBox = styled.div`
	display: flex;
	align-items: center;
`;
export const SvgBox = styled.div`
	width: 100px;
	height: 100px;
	border: 2px solid #FF6B09;

	display: flex;
	align-items: center;
	justify-content: center;

	@media( max-width: 1250px) {
		width: 60px;
		height: 60px;

		svg{ 
			max-height: 42px;
			max-width: 42px;
		}
	}

`;
export const HumanIcon = styled(Human)`

`;
export const PhoneIcon = styled(Phone)`

`;
export const DolarIcon = styled(Dolar)`

`;
export const TextBox = styled.div`
	display: flex;
	align-items: center;

	width: 238px;
	height: 66px;
	background-color: #FFF;

	position: relative;
	left: -18px;

	@media( max-width: 1250px) {
		width: 146px;
		height: 46px;

		padding-left: 8px;
		left: -3px;
	}
`;
export const Text = styled.span`
	font-size:20px;
	font-weight: 600;
	letter-spacing: 0.07em;
	line-height: 164%;

	color: #111518;

	@media( max-width: 1250px) {
		font-size:14px;
	}
`;


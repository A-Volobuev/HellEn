import styled from '@emotion/styled';

export const Box = styled.div`
	margin: 0px 40px;
	padding: 67px 113px;
	box-sizing: border-box;
	display: grid;
	justify-content: space-between;
	gap: 30px;
	grid-template-columns: 30% 30% 30%;
	grid-template-rows: auto auto;
 
	position:relative;
	top: 194px;
	background-color: #FFF;
	box-shadow: 0px 8px 26px 0px rgba(0, 0, 0, 0.1);

	@media(max-width: 1330.9px){
		top: 170px;
	}
	@media(max-width: 1100.9px){
		top: 224px; 
	}
	@media(max-width: 900px) {
		padding: 40px 98px;
		grid-template-columns: 50% 50%;
		grid-template-rows: 69px 69px;
		top:212px;
	}

	@media( max-width: 620px) {
		display: flex;
		flex-direction: column;
		padding: 35px 22px;
		gap: 30px;
		top:80px;
		margin: 0px 20px;
		
	}
`;

export const ItemList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	@media( max-width: 620px) {
		height: 73px;
	}
`;
export const Title = styled.span`
	font-size: 20px;
	font-weight: 600;
	letter-spacing: 0.08em;
	line-height: 124%;
	color: #FF6B09;

	/* Убираем выделение текста */
	cursor: default;
	user-select: none;

	@media(max-width: 1160px) {
		font-size: 18px;
	}
`;
export const Text = styled.span`
	font-size: 20px;
	font-weight: 600;
	letter-spacing: 0.08em;
	line-height: 165%;
	color: #111518;

	@media(max-width: 1160px) {
		font-size: 14px;
		line-height: 120%;
	}
`;
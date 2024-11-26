import styled from '@emotion/styled';

export const Box = styled.div`
	/* height: 362px; */
	padding: 67px 113px;
	box-sizing: border-box;
	display: grid;
	justify-content: space-between;
	gap: 30px;
	grid-template-columns: 33% 33% 33%;
	grid-template-rows: 99px 99px;
 
	position:relative;
	top: 68px;
	background-color: #FFF;
	box-shadow: 0px 8px 26px 0px rgba(0, 0, 0, 0.1);

	@media(max-width: 900px) {
		padding: 28px 90px;
		grid-template-columns: 50% 50%;
		grid-template-rows: 69px 69px;
		top: 30px;
	}

	@media( max-width: 620px) {
		display: flex;
		flex-direction: column;
		padding: 20px 27px;
		gap: 15px;
		top: 25px;
	}
`;
export const ItemList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
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
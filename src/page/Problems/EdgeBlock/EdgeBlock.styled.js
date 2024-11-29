import styled from '@emotion/styled';

export const Box = styled.ol`
margin: 0px;
	padding: 67px 113px; 
	box-sizing: border-box;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 30px;
 
	position:relative;
	top: 68px;
	background-color: #FFF;
	box-shadow: 0px 8px 26px 0px rgba(0, 0, 0, 0.1);

	@media(max-width: 1300px) {
		top: 120px;
	}
	@media(max-width: 1160px) {
		font-size: 18px;
	}
	@media(max-width: 900px) {
		padding: 28px 90px;
		top: 30px;
	}

	@media( max-width: 620px) {
		display: flex;
		flex-direction: column;
		padding: 20px 27px;
		gap: 15px; 
		top: 45px;
	};


	/* Счетчик */
	list-style: none;
  counter-reset: number-counter;
	li {
		counter-increment: number-counter;
		flex: 1 0 calc(33.333% - 30px);
		@media(max-width: 900px){
			flex: 1 0 calc(50% - 30px);
		}
		@media( max-width: 620px) {
			flex: 1 0 100%;
		}
	}
	li::before {
  content: "— 0" counter(number-counter);
  font-size: 20px;
	font-weight: 600;
	letter-spacing: 0.08em;
	line-height: 124%;
	color: #FF6B09;

	@media(max-width: 1160px) {
		font-size: 18px;
	}
	}
`;

export const Text = styled.p`
	margin: 0px;
	font-size: 20px;
	font-weight: 600;
	letter-spacing: 0.08em;
	line-height: 165%;
	color: #111518;

	margin-top: 10px; 

	@media(max-width: 1160px) {
		font-size: 14px;
		line-height: 120%;
	}
	@media(max-width: 900px){
		margin-top: 5px; 
	}
`;
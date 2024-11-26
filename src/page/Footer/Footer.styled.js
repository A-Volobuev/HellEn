import styled from '@emotion/styled';
import { FooterPhone, FooterInstagram } from "../../images"

export const Box = styled.div`
padding: 57px 40px;
	@media(max-width: 1260.9px) {
		padding: 50px 40px 40px 40px;
	}
	@media(max-width: 650.9px) {
		box-sizing: border-box;
		height: 194px;
		padding: 24px 20px 30px 20px;
	}
`;
export const FooterContacts = styled.div`
	display: flex;
	gap: 290px;

	@media(max-width: 1260.9px) {
		justify-content: space-between;
		gap: 0px;
	}
	@media(max-width: 650.9px) {
		
		flex-direction: column;
		gap: 22px;
		align-items: center;
	}
`;

export const Contacts = styled.div`
	display: flex;
	gap: 26px;
	height: 41px;

	span{
		display: block;
		height: 40px;
		border-left:1px solid #B9B9B9;
	}

	@media(max-width: 1260.9px) {
		gap: 20px;
	}
	@media(max-width: 650.9px) {
		flex-direction: column;
		gap: 28px;
		align-items: center;
		span{
			display: none;
		}

	}
`;
export const PhoneBox = styled.div`
	display: flex;
	gap:30px;

	@media(max-width: 1260.9px) {
		gap: 20px;
		align-items: center;
	}
	@media(max-width: 650.9px) {
		gap: 10px;
	}
`;
export const PhoneSvgBox = styled.div`
	display: flex;
  align-items: center;

	width: 30px;
	height: 41px;
	
	@media(max-width: 1260.9px) {
		width: 24px;
		height: 24px;
	}
	@media(max-width: 650.9px) {
		width: 20px;
		height: 20px;
	}
	
`;
export const PhoneText = styled.a`
	margin: 0px;
	font-size: 30px;
	font-weight: 600;
	letter-spacing: 0.08em;
	color: #111518;
	text-decoration: none;

	@media(max-width: 1260.9px) {
		font-size: 20px;
	}
	@media(max-width: 650.9px) {
		font-size: 14px;
	}

	transition:transform 0.5s ease;
	&:hover{
		transform: scale(1.1);
	}
`;
export const SvgPhone = styled(FooterPhone)`
@media(max-width: 1260.9px) {
		width: 24px;
		height: 24px;
	}
	@media(max-width: 650.9px) {
		width: 20px;
		height: 20px;
	}
`;
export const InstLink = styled.a`
	margin: 0px;
	display: block;
	width: 40px;
	height: 40px;
	border-radius: 10px;

	transition:transform 0.5s ease, box-shadow 0.5s ease;

	&:hover{
		transform: scale(1.1);
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
	}
`;
export const SvgInst = styled(FooterInstagram)`
`;

export const RightBox = styled.div`
	background-color: #111518;
	padding: 20px 40px; 
`;
export const Text = styled.p`
	margin: 0px;
	font-size: 14px;
	font-weight: 400;
	line-height: 200%;
	color: #B9B9B9;

	/* Убираем выделение текста */
	cursor: default;
	user-select: none;

	@media(max-width: 650.9px) {
		text-align: center;
	}
`;

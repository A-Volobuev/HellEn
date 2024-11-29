import styled from '@emotion/styled';
import {RegistrationBg} from '../../images';
import { Form, Field, ErrorMessage} from 'formik';
import { keyframes } from "@emotion/react";

export const BgBox = styled.section`
	margin-top: 130px;
	background: url(${RegistrationBg});
	background-color:#111518;
	width: 100%;
	/* height: 100vh; */
	max-height: 820px;

	@media(max-width: 1000.9px){
		margin-top: 70px;
	}
	@media(max-width: 680.9px){
		margin-top: 61px;
	}
`;
export const Box = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	box-sizing: border-box;

	width: 100%;
	padding: 100px 40px 62px 40px;

	@media(max-width: 1000.9px){
		padding: 60px 40px 68px 40px;
	}

	@media(max-width: 680.9px){
		padding: 55px 20px 55px 20px;
	}

`;
export const Title = styled.h2`
	margin: 0px;
	font-size: 46px;
	font-weight: 700;
	line-height: 130%;
	letter-spacing: 0.03em;

	color: #FFF;
	text-align: center;

	span{
		color: #FF6B09;
	}

	@media(max-width: 1000.9px){
		font-size: 26px;
	}

	@media(max-width: 680.9px){
		font-size: 14px;
	}
`;
export const SubTitle = styled.h4`

	margin: 50px 0px 0px 0px;
	font-size: 30px;
	font-weight: 400;
	letter-spacing: 0.08em;
	text-align: center;
	width: 100%;
	/* padding: 0px 40px; */
	box-sizing: border-box;

	color: #FFF;
	span{
		color: #FF6B09;
	}

	@media(max-width: 1000.9px){
		font-size: 16px;
	}

	@media(max-width: 680.9px){
		font-size: 12px;
		margin-top: 25px;
	}
`;

export const FormBox = styled(Form)`
	margin-top: 56px;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 478px;

	@media(max-width: 1000.9px){
		margin-top: 40px;
		width: 390px;
	}

	@media(max-width: 680.9px){
		margin-top: 43px;
		width: 280px;
	}
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const HelpText = styled(ErrorMessage)`
	color: #fe6969;
	font-size: 14px;

	position:absolute;

	animation: ${fadeIn} 0.5s ease-in-out;
	&.HelpTextName{
		bottom: -18px;
	}
	&.HelpTextPhone{
		bottom: -35px;
	}

	@media(max-width: 680.9px){
		font-size: 12px;
	}
`;
export const InputField = styled(Field)`

	padding: 23px 40px;
	width: 100%;
	font-weight: 400;
	font-size: 20px;
	color: #FFF;
	box-sizing: border-box;

	@media(max-width: 1000.9px){
		padding: 16px 28px 15px 28px; 
		font-size: 14px;
	}

	background: rgba(0, 0, 0, 0);
	border: 1px solid #FFF;
	cursor: pointer;

	transition:border 0.5s ease, opacity 2s ease, outline 0.5s ease;
	&:hover{
		border: 1px solid #B9B9B9;
	}
	&:focus{
		outline: none;
		border: 1px solid #FF6B09;
		cursor: pointer;
		outline: 1px solid #FF6B09;

		&::placeholder{
		color: #FFF;
		opacity: 0.5;
	}
	}
	&::placeholder{
		color: #FFF;
		transition: opacity 0.5s ease;
		opacity: 1;
	}
`;

export const ComponentsBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 30px;

	margin-bottom: 80px;

	@media(max-width: 1160.9px){
		margin-bottom: 30px;
		gap: 20px;
	}
	@media(max-width: 680.9px){
		margin-bottom: 50px;
	}
`;
export const InputBox = styled.div`
	position: relative;
`;
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { Form, Field, ErrorMessage } from 'formik';
import { keyframes } from "@emotion/react";
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
export const ModalBox = styled(Box)`
	position: absolute; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* width: 328px; */
	height: 306px;
  background-color: #FFFFFF;
  box-shadow: 0px 1px 4px 0px #7E93FF33;
	border-radius: 8px;
	border: 0px;
	outline: none;
`; 

export const FormBox = styled(Form)`
	background-color: #FFFFFF;
	border-radius: 8px;	
	padding: 40px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	border: 0px;

	@media(max-width: 580.9px) {
		padding: 20px;
	}
`;
export const EditTitlBox = styled.span`
	display:flex;
	justify-content: space-between;

button{
	width: 30px;
	position: relative;
	height: 30px;
	background-color: ${(props) => props.theme.color.whiteBg};
	border: 0px;
	padding: 0px;

	transition: transform 0.5s ease; 
	:hover{
    transform: scale(1.2);
		&::before, &::after{
			background-color: ${(props) => props.theme.color.main};
		}
  } 

	&::before, &::after{
        content:'';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #111518;
        transition: 0.5s;
        border-radius: 8px;
      }
			&::before{
        right: 0px;
        transform: rotate(45deg)
      }
      &::after{
        right: 0px;
        transform: rotate(135deg)
      }
}
`;

export const FormTitle = styled.h2`
	font-weight: ${(props) => props.theme.fontWeights.l};
	font-size: ${(props) => props.theme.fontSizes.Logo};
	color: ${(props) => props.theme.color.text};
	margin: 0px;
  line-height: ${(props) => props.theme.lineHeights.s};
  letter-spacing: ${(props) => props.theme.letterSpacing.xs};
`;

export const InputBox= styled.span`
	display: flex;
	flex-direction: column;
	gap: 8px;
	position: relative;
`;
export const InputLabel = styled.label`
	font-weight: ${(props) => props.theme.fontWeights.n};
	font-size: ${(props) => props.theme.fontSizes.n};
	color: ${(props) => props.theme.color.text};
`;
export const InputField = styled(Field)`
	padding: 11px 16px;
	width: 100%;
	font-weight: ${(props) => props.theme.fontWeights.n};
	font-size: ${(props) => props.theme.fontSizes.m};
	color: ${(props) => props.theme.color.text};
	box-sizing: border-box;

	@media(max-width: 1000.9px){
		font-size: ${(props) => props.theme.fontSizes.n};
	}

	background: rgba(0, 0, 0, 0);
	border: 1px solid #B9B9B9;
	cursor: pointer;

	transition:border 0.5s ease, border-radius 0.5s ease, opacity 2s ease;
	&:hover{
		border: 1px solid #111518;
	}
	&:focus{
		outline: none;
		border: 1px solid #FF6B09;
		border-radius: 10px;
		cursor: pointer;

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

export const FormInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-bottom: 25px;
`;
export const HelpText = styled(ErrorMessage)`
	color: #fe6969;
	font-size: ${(props) => props.theme.fontSizes.s};

	position:absolute;

	animation: ${fadeIn} 0.5s ease-in-out;
	&.HelpTextName{
		bottom: -18px;
	}
	&.HelpTextPhone{
		bottom: -35px;
	}
`;
export const Button = styled.button`
	width: 354px;
	height: 70px;
	font-size: ${(props) => props.theme.fontSizes.n};
	font-weight: ${(props) => props.theme.fontWeights.n};
	letter-spacing: ${(props) => props.theme.letterSpacing.button};
	text-transform: uppercase;
	color:  ${(props) => props.theme.color.whiteText};
	background-color: ${(props) => props.theme.color.main};

	border: none;
	margin: 0px;

	@media (max-width: 1160px){
  width: 260px;
	font-size: ${(props) => props.theme.fontSizes.s};
	height: 48px;
}

	transition: transform 0.5s ease, border-radius 0.5s ease, box-shadow 0.5s ease; 
&:hover{
	cursor: pointer;
	transform: scale(1.1);
	border-radius: 8px;
	box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
}
`;
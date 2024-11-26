import styled from '@emotion/styled';
import { IoIosArrowDropupCircle } from "react-icons/io";

export const Button = styled.button`
	position: fixed;
	bottom: 25px;
	right: 25px;
	width: 30px;
	height: 30px;
	border: none; 
	border-radius: 50%;
	transition: background-color 0.5s ease;
	&:hover{
		background-color: #FF6B09;
	}
	@media(max-width: 768.9px) {
		width: 25px;
		height: 25px;
	}
`;
export const Svg = styled(IoIosArrowDropupCircle)`
	position: fixed;
	bottom: 20px;
	right: 20px;
	width: 40px;
	height: 40px;
	fill: #B9B9B9;

	transition: transform 0.5s ease;
  &:hover{
		transform: scale(1.2);
	}

	@media(max-width: 768.9px) {
		width: 30px;
		height: 30px;
	}
`; 
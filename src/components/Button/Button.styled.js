import styled from '@emotion/styled';

export const Button = styled.button`
	width: 354px;
	height: 70px;
	font-size: ${(props) => props.theme.fontSizes.n};
	font-weight: ${(props) => props.theme.fontWeights.n};
	letter-spacing: ${(props) => props.theme.letterSpacing.button};
	text-transform: uppercase;
	color:  ${(props) => props.theme.color.btnText};
	background-color: ${(props) => props.theme.color.btnColor};

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
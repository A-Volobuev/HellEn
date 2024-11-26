import styled from '@emotion/styled';
import { LogoIcon } from "../../images"

export const LogoBox = styled.div`
	display: flex;
  width: 128px;
  height: 45px;
  flex-direction: column;
  z-index:10;

	@media(max-width: 580.9px) {
		width: 80px;
  	height: 30px;
	} 
`;
export const LogoTitle = styled.span`
	font-size: ${(props) => props.theme.fontSizes.Logo};
	color: ${({ open }) => (open ? "#FFF" : "#111518")};
	font-weight: ${(props) => props.theme.fontWeights.l};
	letter-spacing: ${(props) => props.theme.letterSpacing.s};
	z-index:10;

	/* Убираем выделение текста */
	cursor: default;
	user-select: none;

	@media(max-width: 580.9px) {
		font-size: ${(props) => props.theme.fontSizes.MobileLogo};
	}
`;
export const LogoSubTitle = styled.span`
	font-size: ${(props) => props.theme.fontSizes.xs};
	color: ${({ open }) => (open ? "#FFF" : "#111518")};
	font-weight: ${(props) => props.theme.fontWeights.m};
	text-transform: uppercase;
	z-index:10; 

	/* Убираем выделение текста */
	cursor: default;
	user-select: none;

	span{
		color: ${(props) => props.theme.color.main};
	}

	@media(max-width: 580.9px) {
		font-size: 5px;
	}
`;
export const LogoImg = styled(LogoIcon)`
width: 22px;
z-index:10;
transform: translateY(4px);

@media(max-width: 580.9px) {
	width: 14px;
	height: 20px;
	}
`;
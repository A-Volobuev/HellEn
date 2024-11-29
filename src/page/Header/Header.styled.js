import styled from '@emotion/styled';

export const HeaderBox = styled.header`
  position: fixed;
  top: 0; 
  left: 0;
  /* padding-left: 40px;
	padding-top: 30px; 
  padding-bottom: 30px;  */
  padding: 30px 40px;
  z-index: 2;
	width: 100%;
	display: flex;
	align-items: center;
	height: 30px;

  background-color: ${({ scroll }) => (scroll ? "rgba(25, 28, 38, .4)" : "")};
  backdrop-filter: ${({ scroll }) => (scroll ? "blur(6px)" : "")};

	@media(min-width: 1680px){
		height: 70px;
	}
	@media(min-width: 768px){
		height: 48px;
	}
  @media(max-width: 1160.9px){
    padding: 40px 40px;
	}
  @media(max-width: 767.9px){
    padding: 30px 20px;
	}
`;
export const HeaderBody = styled.div`
  width: calc(100% - 81px);
	display: flex;
	align-items: center;
	justify-content: space-between;

	position: relative;

  @media(max-width: 767.9px) {
    width: calc(100% - 41px);
  }
`;
export const Box = styled.div`
  width: calc(100% - 81px);
`;
export const HeaderBurger = styled.div`
  position: relative;
  width: 21px;
  height: 12px;
  overflow: visible;
  

  transition: transform 0.5s ease; 
  :hover{
    transform: scale(1.5);
  }
  span{
    position: absolute;
    width: 100%;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ open, scroll }) => (open ? "#transparent" : scroll? "#FFF" : "#000000")};
    transition: 0.5s;
    border-radius: 8px;

      &::before, &::after{
        content:'';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${({ open, scroll }) => (open ? "#FFF" : scroll? "#FFF" : "#000000")};
        transition: 0.5s;
        border-radius: 8px;
      }

      &::before{
        top: ${({ open }) => (open ? "0px" : "-6px")};
        transform: rotate(${({ open }) => (open ? "45deg" : "")})
      }
      &::after{
        top: ${({ open }) => (open ? "0px" : "6px")};
        transform: rotate(${({ open }) => (open ? "135deg" : "")})
      }

  }

	display: none;
  cursor: pointer;
  z-index:  2;

  @media (max-width: 1160px) {
    display: block;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  @media (max-width: 1160px) {
    flex-direction: row-reverse;
  }
`;
export const HeaderMenu = styled.nav`
	display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: 1160px) {
    display: ${({ open }) => (open ? "" : "none")};;
    position: absolute;
    box-sizing: border-box;
    top: -30px;
    left: -40px;
    right: ${({ open }) => (open ? "0" : "-100%")};
    height: 100vh;
    width: calc(100% + 80px);
    flex-direction: column;
    align-items: center;
    transition: right 0.3s ease;

    background-color: #111518;
    opacity: 0.9;
    z-index: 1;
  }

  @media (max-width: 580px) {
    align-items: flex-start;
    left: -20px;
    width: calc(100% + 40px);
  }
`;
export const HeaderList = styled.ul`
  margin: 0px;
	padding: 0px;
	display:flex;
	gap: 40px;

  @media (max-width: 1160px) {
    flex-direction: column;
    gap: 0px;
    margin-top: 159px;
  }
  @media (max-width: 580px) {
    flex-direction: column;
    gap: 0px;
    margin: 108px 0px 0px 20px;
  }
`;
export const HeaderItem = styled.li`
	list-style: none;
`;
export const HeaderLink= styled.a`
	text-transform: uppercase;
	text-decoration: none;
	color: ${({ scroll }) => (scroll ? "#FFF" : "#B9B9B9")};
	font-weight: 600;
  position: relative;
  font-size: 14px;

  &.active {
    color: #FF6B09;
  }

  @media (max-width: 1160px) {
    color: #FFF;
    font-size: 26px;
	  font-weight: 700;
	  line-height: 180%;
	  letter-spacing: 0.03em;
  }

  @media (max-width: 580px) {
    font-size: 20px;
  }

/* Анимации */
  transition: color 0.5s ease;
  &:not(.active):hover{
		transform: scale(1.05);
    color: #FF6B09;
	}

	&:not(.active)::after{
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #FF6B09;
		bottom: 0px;
		left: 0px;

		transform-origin: right;
		transform: scaleX(0);
		transition: transform 0.5s ease-in-out;
	}

	&:hover::after{
		transform-origin: left;
		transform: scaleX(1);
	}
`;

export const ContactButton = styled.button`
	text-transform: uppercase;
  font-weight: 600;
	color: #FF6B09;
	background-color: transparent;
	border: 2px solid #FF6B09;
	font-size: 14px;
  letter-spacing: 0.14em;
	width: 260px;
	height: 48px;

	@media (min-width: 1220.9px) {
    width: 336px;
	  height: 70px;
  }

  @media (max-width: 580px) {
    position: absolute;
    display: ${({ open }) => (open ? "block" : "none")};
    background-color: transparent;
    z-index: 10;
    left: 50%;
    top: 300px;
    transform: translate(-50%, 0);
  }


  /* Анимация */
  @media(min-width: 1280.9px) {
    transition: transform 0.5s ease, box-shadow 0.5s ease, color 0.5s ease, background-color 0.5s ease; 
      &:hover{
	      cursor: pointer;
	      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
        color: #FFF;
        background-color: #FF6B09;
}
	}
`;


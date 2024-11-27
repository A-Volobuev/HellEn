import styled from '@emotion/styled';

export const HeaderBox = styled.header`
	padding-top: 30px; 
	width: 100%;
	display: flex;
	align-items: center;
	height: 30px;

	@media(min-width: 1680px){
		height: 70px;
	}
	@media(min-width: 768px){
		height: 48px;
	}
`;
export const HeaderBody = styled.div`
width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	position: relative;
`;

export const HeaderBurger = styled.div`
  position: relative;
  width: 21px;
  

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
    background-color: ${({ open }) => (open ? "transparent" : "#000000")};
    transition: 0.5s;
    border-radius: 8px;

      &::before, &::after{
        content:'';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${({ open }) => (open ? "#FFF" : "#000000")};
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
  @media(max-width: 580px) {
    height: 14.5px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  gap: 60px;
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
    height: 113vh;
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

  @media(min-width:1160px) and (max-width:1300px){
    width: 100px;
  }
`;
export const HeaderLink= styled.a`
	text-transform: uppercase;
	text-decoration: none;
	color: #B9B9B9;
	font-weight: 600;
  position: relative;

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
  &:hover{
		transform: scale(1.05);
    color: #FF6B09;
	}

	&::after{
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
	color: #FF6B09;
	background-color:#FFF ;
	border: 2px solid #FF6B09;
	font-size: 14px;
  letter-spacing: 0.14em;
	width: 260px;
	height: 48px;

	@media (min-width: 1161px) {
    width: 336px;
	  height: 70px;
    :hover{
      transform: scale(0.9);
    }
  }
  @media (min-width: 581px) and (max-width: 1160px) {
    :hover{
      transform: scale(1.1);
    }
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
  transition: transform 0.5s ease, border-radius 0.5s ease, box-shadow 0.5s ease, color 0.5s ease, background-color 0.5s ease, font-weight 0.5s ease; 
&:hover{
	cursor: pointer;
	border-radius: 8px;
	box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
  color: #FFF;
  background-color: #FF6B09;
  font-weight: 600;
}
`;


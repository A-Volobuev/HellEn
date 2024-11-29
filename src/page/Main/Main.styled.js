import styled from '@emotion/styled';

export const MainBox = styled.section`
  display: flex;
  margin-top: 130px;
  gap: 50px;

  @media (max-width: 1160px){
    margin-top: 158px;
    gap: 18px;
    justify-content: space-between;
  } 
  @media (max-width: 768px) {
    margin-top: 90px;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    gap: 54px;
  }
`;
export const TitleBox = styled.div`
  @media (max-width: 1160px){
    width:320px;
  } 
  @media (min-width: 1161px){
    margin-top: 55px;
    width:530px;
  } 
  @media (max-width: 768px){
    width:280px;
  }
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const TextBox = styled.div`
  margin-top: 15px;
  margin-bottom: 45px;

  @media (max-width: 580px) {
    margin-bottom: 50px;
  }
`;
export const Title = styled.h1`
  margin: 0px; 
  color: #111518;

  font-size: 58px;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 0.03em;

  @media (max-width: 1160px){
  font-size: 26px;

}
  @media (max-width: 768px){
  font-size: 20px;
}
`;
export const Text = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 165%;
  letter-spacing: 0.08em;

  color: #B9B9B9;

  @media (max-width: 1160px){
  font-size: 14px;
  line-height: 122%;
}
`;
export const SubTitle = styled.h4`
  margin: 0px;

  font-size: 20px;
  font-weight: 600;
  line-height: 165%;
  letter-spacing: 0.08em;
  color: #111518;

  @media (max-width: 1160px){
  font-size: 14px;
  line-height: 122%;

  span{
    color: #FF6B09;
  }
}
`;

export const Img = styled.img`
  max-width: 55%;
  max-height: 718px;
  position: relative;
  right: -44px;

  z-index: -1;
  @media (max-width: 1260px){
    right: -20px;
    right: -37px;
  }
  @media (max-width: 1160px){
    right: -20px;
  }
  @media (max-width: 830px){
    right: -10px;
    max-width: 53%;
  }
  @media (max-width: 650px) {
    max-width: 74%;
  }
`;

export const Button = styled.button`
	width: 354px;
	height: 70px;
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	color:  #FFF;
	background-color: #FF6B09;

	border: none;
	margin: 0px;

  position: relative;
  z-index: 0;

	@media (max-width: 1160px){
  width: 260px;
	font-size: 12px;
	height: 48px;
}

  @media(min-width: 1280.9px) {
		transition: transform 0.5s ease, box-shadow 0.5s ease; 
		&:hover{
			cursor: pointer;
			transform: scale(1.1);
			box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
		}
	}
`;
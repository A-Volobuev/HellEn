 
import { WaveBg } from "../images";

export const MainBg = styled.div`
  background: url(${WaveBg}) no-repeat center center; 
  background-size: contain; 
  width: 100%; 
  height: auto; 
  aspect-ratio: 16 / 9; 
  position: absolute;
  top: 17px;
  left: 0;
  z-index: -1; 

  @media (max-width: 1300px) {
    height: 758px;
  }
  @media (max-width: 1160px) {
    height: 500px;
    /* scale: 1.3; */
  }
  @media (max-width: 1100px) {
    /* scale: 1.2; */
  }
  @media (max-width: 900px) {
    scale: 1;
  }
`;
export const Box = styled.div`
height: 100%;
padding: 0px 40px 0px 40px;
@media(min-width: 1680px){
	padding: 0px 183px 0px 183px;
}
@media(max-width: 580px){
	padding: 0px 20px 0px 20px;
}
`;

import { Img, MainBox, SubTitle, Text, TitleBox, Title, TextBox, Button } from "./Main.styled";
import {MainImg} from '../../images';
import {BasicModal } from "../../components";




export const MainBlock =({toggleModal, open}) =>{
	return(
		<>
			<MainBox data-aos="fade-right" >
				<TitleBox data-aos="fade-right">
					<Title data-aos="fade-right" data-aos-easing="ease-out" >Complex preparation for English UPE</Title>
					<TextBox data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease-out">
						<Text>It won’t be easy.</Text>
						<SubTitle >But you are guaranteed to get <span>+25 points</span></SubTitle>
					</TextBox>
					<Button  onClick={() => {
						toggleModal();
					}} type="button">I want a free lesson</Button>
				</TitleBox>
				<Img data-aos="fade-right"  data-aos-easing="ease-out" src={MainImg}/>
			</MainBox>

			<BasicModal open={open} toggleModal={toggleModal}/>
		</>
	)
} 
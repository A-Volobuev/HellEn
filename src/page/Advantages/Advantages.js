import { Box, CardBox, DolarIcon, HumanIcon, PhoneIcon, SvgBox, Text, TextBox } from "./Advantages.styled"


export const AdvantagesBlock =() =>{
	return(
		<Box>
		<CardBox data-aos="fade-up" data-aos-delay="100"> 
			<SvgBox>
				<HumanIcon/>
			</SvgBox>
			<TextBox>
				<Text>Adapted author's UPE program</Text>
			</TextBox>
		</CardBox>

		<CardBox data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
			<SvgBox>
				<PhoneIcon/>
			</SvgBox>
			<TextBox>
				<Text>Modern teaching methods</Text>
			</TextBox>
		</CardBox>

		<CardBox data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
			<SvgBox>
				<DolarIcon/>
			</SvgBox>
			<TextBox>
				<Text>Financial guarantee the result</Text>
			</TextBox>
		</CardBox>
		</Box>
	)
}
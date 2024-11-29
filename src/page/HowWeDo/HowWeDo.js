import { Box, Card, CardList, CardTitle, Svg1, Svg2, Svg3, Svg4, Svg5, Svg6, SvgBox, Text, Title, CardTitleBox, TextBox } from "./HowWeDo.styled"

export const HowWeDoBlock = () => {

	return(
		<Box id="HowWeDo">
			<Title >How do we do it</Title>
 
			<CardList>
				<Card data-aos="flip-left" data-aos-easing="ease-out-cubic">
					<SvgBox> 
						<Svg1/>
					</SvgBox> 
					<CardTitleBox>
						<CardTitle>Adapted program preparation for UPE</CardTitle>
					</CardTitleBox>
					<TextBox>
						<Text>You will learn grammar and vocabulary at the same time. And you will learn how to write essays. You will learn grammar and vocabulary at the same time. And you will learn how to write essays. You will learn grammar and vocabulary at the same time. And you will learn how to write essays</Text>
					</TextBox>
				</Card>
				
				<Card data-aos="flip-left" data-aos-easing="ease-out-cubic" >
					<SvgBox><Svg2/></SvgBox>
					<CardTitleBox>
						<CardTitle>Classroom and online learning</CardTitle>
					</CardTitleBox>

					<TextBox>
						<Text>The teacher will help not only in the classroom, but also during home preparation. </Text>
						<Text>Parents can chat if they wish.</Text>
					</TextBox>
				</Card>
				<Card data-aos="flip-left" data-aos-easing="ease-out-cubic" >
					<SvgBox><Svg3/></SvgBox>
					<CardTitleBox>
						<CardTitle>The habit of reading in English</CardTitle>
					</CardTitleBox>
		<TextBox>
						<Text>Articles from sources that are used in the development of this UPE will be received by phone twice a week. </Text>
					</TextBox>
				</Card>
				<Card data-aos="flip-left" data-aos-easing="ease-out-cubic" >
					<SvgBox><Svg4/></SvgBox>
					<CardTitleBox>
						<CardTitle>Psychological support</CardTitle>
					</CardTitleBox>
		<TextBox>
						<Text>We will teach you testing techniques, the ability to plan your confidence training in itself.</Text>
					</TextBox>
				</Card>
				<Card data-aos="flip-left" data-aos-easing="ease-out-cubic" >
					<SvgBox><Svg5/></SvgBox>
					<CardTitleBox>
						<CardTitle>Training on copyright manuals</CardTitle>
					</CardTitleBox>
		<TextBox>
						<Text>You don't have to waste your time on a search for material and to buy anything extra. We have compiled</Text>
						<Text> 2 manuals for you.</Text>
					</TextBox>
				</Card>
				<Card data-aos="flip-left" data-aos-easing="ease-out-cubic" >
					<SvgBox><Svg6/></SvgBox>
					<CardTitleBox>
						<CardTitle>Ability to comprehend spoken English</CardTitle>
					</CardTitleBox>
		<TextBox>
						<Text>“F.R.I.E.N.D.S” won't help you. You will listen regularly 
							and analyze audio recordings in accordance with the studied vocabulary. </Text>
					</TextBox>
				</Card>
			</CardList>
		</Box>
	)
}
import { Box, ItemList, Text, Title } from "./EdgeBlock.styled"


export const EdgeBlockProgram = () => {

	return(
		<Box data-aos="fade-up" data-aos-easing="linear">
			<ItemList data-aos="zoom-in" data-aos-easing="ease-out">
				<Title>— 01</Title>
				<Text>Training in small groups</Text>
			</ItemList>
			<ItemList data-aos="zoom-in" data-aos-easing="ease-out"> 
				<Title>— 02</Title>
				<Text>Rendered notes</Text>
			</ItemList>
			<ItemList data-aos="zoom-in" data-aos-easing="ease-out">
				<Title>— 03</Title>
				<Text>Each lesson has a goal and a specific result</Text>
			</ItemList>
			<ItemList data-aos="zoom-in" data-aos-easing="ease-out">
				<Title>— 04</Title>
				<Text>The real results of the teacher</Text>
			</ItemList>
			<ItemList data-aos="zoom-in" data-aos-easing="ease-out">
				<Title>— 05</Title>
				<Text>The course program meets the requirements of the MES of Ukraine</Text>
			</ItemList>
			<ItemList data-aos="zoom-in" data-aos-easing="ease-out">
				<Title>— 06</Title>
				<Text>Set of groups by level of knowledge</Text>
			</ItemList>
		</Box>
	)
}
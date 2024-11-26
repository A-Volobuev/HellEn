import { Box, ItemList, Text, Title } from "./EdgeBlock.styled"


export const EdgeBlockProgram = () => {

	return(
		<Box data-aos="fade-up" data-aos-easing="linear">
			<ItemList >
				<Title>— 01</Title>
				<Text>Training in small groups</Text>
			</ItemList>
			<ItemList > 
				<Title>— 02</Title>
				<Text>Rendered notes</Text>
			</ItemList>
			<ItemList >
				<Title>— 03</Title>
				<Text>Each lesson has a goal and a specific result</Text>
			</ItemList>
			<ItemList >
				<Title>— 04</Title>
				<Text>The real results of the teacher</Text>
			</ItemList>
			<ItemList >
				<Title>— 05</Title>
				<Text>The course program meets the requirements of the MES of Ukraine</Text>
			</ItemList>
			<ItemList >
				<Title>— 06</Title>
				<Text>Set of groups by level of knowledge</Text>
			</ItemList>
		</Box>
	)
}
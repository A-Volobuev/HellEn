import { Box, ItemList, Text, Title } from "./EdgeBlock.styled"


export const EdgeBlockProblems = () => {
 
	return(
		<Box data-aos="fade-up" data-aos-easing="linear">
			<ItemList  >
				<Title>— 01</Title>
				<Text>Grammar</Text>
			</ItemList>
			<ItemList  > 
				<Title>— 02</Title>
				<Text>Inability to understand spoken English</Text>
			</ItemList>
			<ItemList  >
				<Title>— 03</Title>
				<Text>Stingy vocabulary for writing an essay</Text>
			</ItemList>
			<ItemList >
				<Title>— 04</Title>
				<Text>Preparing alone</Text>
			</ItemList>
			<ItemList >
				<Title>— 05</Title>
				<Text>Lack of a single knowledge resource</Text>
			</ItemList>
			<ItemList >
				<Title>— 06</Title>
				<Text>Lack of self-organization</Text>
			</ItemList>
		</Box>
	)
}
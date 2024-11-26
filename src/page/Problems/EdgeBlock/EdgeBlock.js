import { Box, ItemList, Text, Title } from "./EdgeBlock.styled"


export const EdgeBlockProblems = () => {
 
	return(
		<Box data-aos="fade-up" data-aos-easing="linear">
			<ItemList data-aos="zoom-in" data-aos-easing="ease-out" >
				<Title>— 01</Title>
				<Text>Grammar</Text>
			</ItemList>
			<ItemList data-aos="zoom-in" data-aos-easing="ease-out" > 
				<Title>— 02</Title>
				<Text>Inability to understand spoken English</Text>
			</ItemList>
			<ItemList data-aos="zoom-in" data-aos-easing="ease-out" >
				<Title>— 03</Title>
				<Text>Stingy vocabulary for writing an essay</Text>
			</ItemList>
			<ItemList data-aos="zoom-in" data-aos-easing="ease-out">
				<Title>— 04</Title>
				<Text>Preparing alone</Text>
			</ItemList>
			<ItemList data-aos="zoom-in" data-aos-easing="ease-out">
				<Title>— 05</Title>
				<Text>Lack of a single knowledge resource</Text>
			</ItemList>
			<ItemList data-aos="zoom-in" data-aos-easing="ease-out">
				<Title>— 06</Title>
				<Text>Lack of self-organization</Text>
			</ItemList>
		</Box>
	)
}
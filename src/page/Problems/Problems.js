
import { ContentBox, FireBg, Title, TitleBox } from "./Problems.styled";
import {EdgeBlockProblems} from './EdgeBlock/EdgeBlock'

export const ProblemsBlock = () => {
	return( 
		<ContentBox>
			<TitleBox data-aos="fade-down" data-aos-easing="linear">
				<Title >The main problems of students</Title>
				<Title >in English UPE, which</Title>
				<Title>we <span>help</span> to solve</Title>
			</TitleBox>
			<FireBg/> 

			<EdgeBlockProblems />
		</ContentBox>
	)
}
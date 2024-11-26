
import { ContentBox, FireBg, Title, TitleBox } from "./Problems.styled";
import {EdgeBlockProblems} from './EdgeBlock/EdgeBlock'

export const ProblemsBlock = () => {
	return( 
		<ContentBox>
			<TitleBox>
				<Title data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">The main problems of students</Title>
				<Title data-aos="fade-down" data-aos-easing="linear" data-aos-duration="900">in English UPE, which</Title>
				<Title data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">we <span>help</span> to solve</Title>
			</TitleBox>
			<FireBg/> 

			<EdgeBlockProblems />
		</ContentBox>
	)
}
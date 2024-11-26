import { AboutTeacherBox, Box, DetailLink, EdgeItem, EdgeList, EdgeText, Img, OverviewBox, SubTitle, SvgBox, TeacherCheck, Text, TextBox, Title } from "./Teacher.styled";
import {TeacherImg} from '../../images';

export const TeacherBlock = () => {

	return (
		<Box>
		<Title data-aos="fade-right">Teacher</Title>

		<AboutTeacherBox>
			<Img src={TeacherImg}  data-aos="fade-right" data-aos-duration="1500"/> 
			<OverviewBox>
				<SubTitle data-aos="fade-up">Elena Moreva</SubTitle>
				
				<EdgeList data-aos="fade-up" data-aos-duration="1500">
					<EdgeItem data-aos="fade-up" data-aos-duration="1500">
						<SvgBox>
							<TeacherCheck/>
						</SvgBox>
						<EdgeText>6 yeards of experience in preparing students for UPE</EdgeText>
					</EdgeItem>

					<EdgeItem data-aos="fade-up" data-aos-duration="1500">
						<SvgBox>
							<TeacherCheck/>
						</SvgBox>
						<EdgeText>Own result of passing VNO - 197 points 2 years in a row</EdgeText>
					</EdgeItem>

					<EdgeItem data-aos="fade-up" data-aos-duration="1500">
						<SvgBox>
							<TeacherCheck/>
						</SvgBox>
						<EdgeText>Passed excellent at the international analogue of UPE - Cambridge PET (Preliminary English Test)</EdgeText>
					</EdgeItem>
				</EdgeList>

				

				<TextBox>
					<Text data-aos="fade-up" data-aos-duration="1500">Graduated from the Institute of International Relations of the NAU with a degree in translator-analyst.</Text>
					<Text data-aos="fade-up" data-aos-duration="1500">In spare time takes courses from the best universities in the world on effective teaching and essay writing techniques.</Text>
					<Text data-aos="fade-up" data-aos-duration="1500">Completed: English Grammar and Essay Writing (Berkeley), English Grammar & Style (The University of Queesland), How to Write an Essay (Berkeley), Academic and Business Writing (Berkeley), The Art of Teaching (GEMS education), Powerful Tools for Teaching and Learning (University of Houston). </Text>
				</TextBox>

				<DetailLink href=""  data-aos="fade-up">Cambrige English Entry Level Certificate</DetailLink>
			</OverviewBox>
		</AboutTeacherBox>
		</Box>
	)
}
import { ProgramBg } from "../../images"
import { BgImg, Box, Card, CardList, CardSubTitle, CardText, CardTextBox, CardTitle, Elipse, Line, Title,CardTextColumnBox, CardColumn, VisibleTitle} from "./Program.styled"
import {EdgeBlockProgram} from './EdgeBlock/EdgeBlock'
import { useEffect, useState } from "react"

export const ProgramBlock = () => {
	const [isVisibleTitle, setIsVisibleTitle] = useState(window.innerWidth <= 900);
	
	// Проверяем ширину что бы проявить
	useEffect(() => {
		const handleResize = () => {
			setIsVisibleTitle(window.innerWidth <= 900);
		};
	
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
		}, []);

	return(
		<Box id="Program">
			<Title data-aos="zoom-in-up">Our program</Title>
			<Line/>
			<CardList>

				<Card> 
					<Elipse/>
					<CardColumn>
						<CardTitle data-aos="fade-up">1 semester</CardTitle>
						<CardTextColumnBox>
							<CardTextBox data-aos="fade-up" data-aos-duration="1500">
								<CardSubTitle>— Grammar</CardSubTitle>
								<CardText>Nouns & Articles Adjectives & Adverb </CardText>
							</CardTextBox>
							<CardTextBox data-aos="fade-up" data-aos-duration="1500">
								<CardSubTitle>— Vocabulary</CardSubTitle>
								<CardText>Family & Relations <br/> People & Society </CardText>
							</CardTextBox>
						</CardTextColumnBox>
					</CardColumn>
				</Card>

				<Card>
					<Elipse/>
					<CardColumn>
					<CardTitle data-aos="fade-up">2 semester</CardTitle>
					<CardTextColumnBox>
					<CardTextBox data-aos="fade-up" data-aos-duration="1500">
						<CardSubTitle>— Grammar</CardSubTitle>
						<CardText>Pronouns <br/> Active Voice  <br/>Passive Voice </CardText>
					</CardTextBox>
					<CardTextBox data-aos="fade-up" data-aos-duration="1500">
						<CardSubTitle>— Vocabulary</CardSubTitle>
						<CardText>Home <br/> School <br/> Work </CardText>
					</CardTextBox>
					</CardTextColumnBox>
					</CardColumn>
				</Card>

				<Card>
					<Elipse/>
					<CardColumn>
					<CardTitle data-aos="fade-up">3 semester</CardTitle>
					<CardTextColumnBox>
					<CardTextBox data-aos="fade-up" data-aos-duration="1500">
						<CardSubTitle>— Grammar</CardSubTitle>
						<CardText>Modal verbs <br/> Infinitive <br/> Gerund <br/> Participle: 1, 2 </CardText>
					</CardTextBox>
					<CardTextBox data-aos="fade-up" data-aos-duration="1500">
						<CardSubTitle>— Vocabulary</CardSubTitle>
						<CardText>Travel & Tourism <br/> Culture & Free Time <br/> Sport </CardText>
					</CardTextBox>
					<CardTextBox data-aos="fade-up" data-aos-duration="1500">
						<CardSubTitle>— Writing</CardSubTitle>
						<CardText>Informal Letter </CardText>
					</CardTextBox>
					</CardTextColumnBox>
					</CardColumn>
				</Card>

				<Card>
					<Elipse/>
					<CardColumn>
					<CardTitle data-aos="fade-up">4 semester</CardTitle>
					<CardTextColumnBox>
					<CardTextBox data-aos="fade-up" data-aos-duration="1500">
						<CardSubTitle>— Grammar</CardSubTitle>
						<CardText>Clauses: Conditional and Wishes  <br/>Direct / Reported speech <br/> Preposition <br/> Conjunction <br/> Numeral </CardText>
					</CardTextBox>
					<CardTextBox data-aos="fade-up" data-aos-duration="1500">
						<CardSubTitle>— Vocabulary</CardSubTitle>
						<CardText>Healthy Living Nature & Environment Money
</CardText>
					</CardTextBox>
					<CardTextBox data-aos="fade-up" data-aos-duration="1500">
						<CardSubTitle>— Writing</CardSubTitle>
						<CardText>Formal Letter </CardText>
					</CardTextBox>
					</CardTextColumnBox>
					</CardColumn>
				</Card>

				<Card>
					<Elipse/>
					<CardColumn>
					<CardTitle data-aos="fade-up">5 semester</CardTitle>

					<CardTextColumnBox>
					<CardTextBox data-aos="fade-up" data-aos-duration="1500">
						<CardSubTitle>—</CardSubTitle>
						<CardText> Revision  <br/> Tests </CardText>
					</CardTextBox>
					</CardTextColumnBox>
					</CardColumn>
				</Card>
				
			</CardList>

			{isVisibleTitle && <VisibleTitle>Why do people choose us</VisibleTitle>}
			<BgImg src={ProgramBg} data-aos="zoom-in"/>

			<EdgeBlockProgram/>
		</Box>
	)
}
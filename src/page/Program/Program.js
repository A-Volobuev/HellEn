import { ProgramBg } from "../../images"
import { BgImg, Box, Title, VisibleTitle, ProgramList, ProgramListItem, ProgramListTitle, LessonList, LessonListItem, LessonListTitle, List, Item} from "./Program.styled"
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
			<Title >Our program</Title>
			{/* data-aos="fade-up" data-aos-duration="1500" */}

			<ProgramList>
				<ProgramListItem className="haf">
					<ProgramListTitle>1 semester</ProgramListTitle> 
								<LessonList className="LessonList">
									<LessonListItem>
										<LessonListTitle>— Grammar</LessonListTitle>
										<List className="List">
											<Item>Nouns & Articles</Item>
											<Item>Adjectives & Adverb</Item>
										</List>
									</LessonListItem>
									<LessonListItem>
										<LessonListTitle>— Vocabulary</LessonListTitle>
										<List>
											<Item>Family & Relations</Item>
											<Item>People & Society</Item>
									</List>
									</LessonListItem>
								</LessonList>
				</ProgramListItem>

				<ProgramListItem>
					<ProgramListTitle>2 semester</ProgramListTitle> 
						<LessonList className="LessonList">
							<LessonListItem className="LessonListItem">
								<LessonListTitle>— Grammar</LessonListTitle>
								<List>
									<Item>Pronouns</Item>
									<Item>Active Voice</Item>
									<Item>Passive Voice</Item>
								</List>
								</LessonListItem>

								<LessonListItem className="LessonListItem">
									<LessonListTitle>— Vocabulary</LessonListTitle>
									<List>
										<Item>Home</Item>
										<Item>School</Item>
										<Item>Work</Item>
									</List>
								</LessonListItem>
						</LessonList>
				</ProgramListItem>

				<ProgramListItem>
					<ProgramListTitle>3 semester</ProgramListTitle> 
					<LessonList className="LessonList">
						<LessonListItem className="LessonListItem">
							<LessonListTitle>— Grammar</LessonListTitle>
							<List>
								<Item>Modal verbs</Item>
								<Item>Infinitive</Item>
								<Item>Gerund</Item>
								<Item>Participle: 1, 2</Item>
							</List>
						</LessonListItem>

						<LessonListItem className="LessonListItem">
							<LessonListTitle>— Vocabulary</LessonListTitle>
							<List>
								<Item>Travel & Tourism</Item>
								<Item>Culture & Free Time</Item>
								<Item>Sport</Item>
							</List>
						</LessonListItem>

						<LessonListItem className="LessonListItem">
							<LessonListTitle>— Writing</LessonListTitle>
							<List>
								<Item>Informal Letter</Item>
							</List>
						</LessonListItem>
					</LessonList>
				</ProgramListItem>

				<ProgramListItem>
					<ProgramListTitle>4 semester</ProgramListTitle> 
					<LessonList className="LessonList">
						<LessonListItem className="LessonListItem">
							<LessonListTitle>— Grammar</LessonListTitle>
							<List>
								<Item>Clauses: Conditional and Wishes</Item>
								<Item>Direct / Reported speech</Item>
								<Item>Preposition</Item>
								<Item>Conjunction</Item>
								<Item>Numeral</Item>
							</List>
					</LessonListItem>

					<LessonListItem className="LessonListItem">
						<LessonListTitle>— Vocabulary</LessonListTitle>
						<List>
							<Item>Healthy Living Nature & Environment Money</Item>
						</List>
					</LessonListItem>

					<LessonListItem className="LessonListItem">
						<LessonListTitle>— Writing</LessonListTitle>
						<List>
							<Item>Formal Letter</Item>
						</List>
					</LessonListItem>
					</LessonList>
				</ProgramListItem>

				<ProgramListItem>
					<ProgramListTitle>5 semester</ProgramListTitle> 
					<LessonList className="LessonList">
						<LessonListItem className="LessonListItem">
							<LessonListTitle>—</LessonListTitle>
							<List>
								<Item>Revision</Item>
								<Item>Tests</Item>
							</List>
						</LessonListItem>
					</LessonList>
				</ProgramListItem>
				
			</ProgramList>

			{isVisibleTitle && <VisibleTitle>Why do people choose us</VisibleTitle>}
			<BgImg src={ProgramBg} />

			<EdgeBlockProgram/>
		</Box>
	)
}

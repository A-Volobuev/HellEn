import { Box, EdgeBox, EdgeItem, EdgeText, Title } from "./Guarantee.styled";
import {GuaranteeFireImg} from '../../images';

export const GuaranteeBlock = () => {

	return(
		<Box>
			<Title >We guarantee</Title>
			
			<EdgeBox>
				<EdgeItem data-aos="fade-right" data-aos-duration="1500" className="with-border"> 
					<img src={GuaranteeFireImg} alt="List img Fire"/>
					<EdgeText>You will pass the UPE with at least 25 points better than on the first practice test. Otherwise, we will refund your money. <span>*</span></EdgeText>
				</EdgeItem>

				<EdgeItem data-aos="fade-right" data-aos-duration="1500" className="with-border">
					<img src={GuaranteeFireImg} alt="List img Fire"/>
					<EdgeText>You will learn to write essays with at least 10 points out of 14. <span>While 20% of the students received 0 for essays.</span></EdgeText>
				</EdgeItem>

				<EdgeItem data-aos="fade-right" data-aos-duration="1500" className="with-border">
					<img src={GuaranteeFireImg} alt="List img Fire"/>
					<EdgeText>You will study in your area. We will choose the location for the classes after the teams have been formed. </EdgeText>
				</EdgeItem>

				<EdgeItem data-aos="fade-right" data-aos-duration="1500">
					<img src={GuaranteeFireImg} alt="List img Fire"/>
					<EdgeText>Teams will be formed based on the starting level of the students. We take into account the characteristics of each student. </EdgeText>
				</EdgeItem>
			</EdgeBox>


			{/* <EdgeBox>
				<EdgeItem data-aos="fade-right" data-aos-duration="1500"> 
					<SvgBox className="with-border" >
						<FireSvg/>
					</SvgBox>
					<EdgeText>You will pass the UPE with at least 25 points better than on the first practice test. Otherwise, we will refund your money. <span>*</span></EdgeText>
				</EdgeItem>

				<EdgeItem data-aos="fade-right" data-aos-duration="1500">
					<SvgBox className="with-border">
					<FireSvg/>
					</SvgBox>
					<EdgeText>You will learn to write essays with at least 10 points out of 14. <span>While 20% of the students received 0 for essays.</span></EdgeText>
				</EdgeItem>

				<EdgeItem data-aos="fade-right" data-aos-duration="1500">
					<SvgBox className="with-border">
					<FireSvg/>
					</SvgBox>
					<EdgeText>You will study in your area. We will choose the location for the classes after the teams have been formed. </EdgeText>
				</EdgeItem>

				<EdgeItem data-aos="fade-right" data-aos-duration="1500">
					<SvgBox>
					<FireSvg/>
					</SvgBox>
					<EdgeText>Teams will be formed based on the starting level of the students. We take into account the characteristics of each student. </EdgeText>
				</EdgeItem>
			</EdgeBox> */}
		</Box>
	)
}
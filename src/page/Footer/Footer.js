import { Logo } from "../../components/Logo/Logo";
import { Box, Contacts, FooterContacts, InstLink, PhoneBox, PhoneSvgBox, PhoneText, RightBox, SvgInst, SvgPhone, Text } from "./Footer.styled";

export const FooterBlock = () => {

	return(
		<>
			<Box>
				<FooterContacts data-aos="fade-up" data-aos-easing="linear">
				<Logo/>
					<Contacts>
						<PhoneBox>
							<PhoneSvgBox> 
								<SvgPhone/>
							</PhoneSvgBox>
							<PhoneText href="tel:+380991234567">+38 (099) 123 45 67</PhoneText>
							<span></span>
						</PhoneBox>
							<InstLink href='http://localhost:3000/'>
								<SvgInst/>
							</InstLink>
					</Contacts>
				</FooterContacts>
			</Box>
			<RightBox>
				<Text>© All rights reserved, 2022</Text>
			</RightBox>
		</>
	)
}
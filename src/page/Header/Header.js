import { useState } from "react";
import { Logo, BasicModal } from "../../components";

import { ContactButton, HeaderBody, HeaderBox, HeaderBurger, HeaderContent, HeaderItem, HeaderLink, HeaderList, HeaderMenu } from "./Header.styled";

export const HeaderBlock = ({toggleModal, open}) => {
	const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
    // Отключаем возможность скрола при открытии бургера
    if (!openMenu) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }; 

	
	return(
		<HeaderBox>
			<>
				<HeaderBody>
					<Logo open={openMenu}/>

				<HeaderContent>
					<HeaderBurger onClick={toggleMenu} open={openMenu}>
						<span></span>
					</HeaderBurger>

					<HeaderMenu open={openMenu}>
						<HeaderList>
							<HeaderItem>
								<HeaderLink href="#Program">Studying program</HeaderLink>
							</HeaderItem>
							<HeaderItem>
								<HeaderLink href="#HowWeDo">About</HeaderLink>
							</HeaderItem>
							<HeaderItem>
								<HeaderLink href="#Teacher">training options</HeaderLink>
							</HeaderItem>
							<HeaderItem>
								<HeaderLink href="#Registration">contacts</HeaderLink>
							</HeaderItem>
						</HeaderList>
					</HeaderMenu>

					<ContactButton onClick={() => {
						toggleModal();
					}} open={openMenu}>consultation by phone</ContactButton>
				</HeaderContent>

				</HeaderBody>
			</>

			<BasicModal open={open} toggleModal={toggleModal}/>
		</HeaderBox>
	)
}
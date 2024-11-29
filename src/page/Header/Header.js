import { useState, useEffect } from "react";
import { Logo, BasicModal } from "../../components";

import { ContactButton, HeaderBody, HeaderBox, HeaderBurger, HeaderContent, HeaderItem, HeaderLink, HeaderList, HeaderMenu } from "./Header.styled";

export const HeaderBlock = ({toggleModal, open}) => {
	// Отключаем скрол
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

	// Что бы при клике на линк в моб приложении возвращался скролл и закрывалось бургер меню
	const mobileMenuClose = () => {
		setOpenMenu(false);
		document.documentElement.style.overflow = "";
	}

	// Что бы при скроле хедер изменял цвет с белого на блур
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
    const isScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", isScroll);
		// снимаем слушателя
    return () => window.removeEventListener("scroll", isScroll);
  }, []);

	// Делаем кнопки активными при нажатии 
	const [activeLink, setActiveLink] = useState('HowWeDo');
	const handleActiveLinkClick = (linkId) => {
    setActiveLink(linkId);
  };
	
	return(
		<HeaderBox scroll={scroll}>

				<HeaderBody>
					<Logo open={openMenu} scroll={scroll}/>

				<HeaderContent>
					<HeaderBurger onClick={toggleMenu} open={openMenu} scroll={scroll}>
						<span></span>
					</HeaderBurger>

					<HeaderMenu open={openMenu}>
						<HeaderList>
							<HeaderItem>
								<HeaderLink 
								href="#Program" 
								scroll={scroll} 
								className={activeLink === 'Program' ? 'active' : ''} 
								onClick={() => {
									mobileMenuClose();
									handleActiveLinkClick('Program');
								}}>Studying program</HeaderLink>
							</HeaderItem>
							<HeaderItem>
								<HeaderLink href="#HowWeDo" scroll={scroll}  
								className={activeLink === 'HowWeDo' ? 'active' : ''} 
								onClick={() => {
									mobileMenuClose();
									handleActiveLinkClick('HowWeDo');
								}}>About</HeaderLink>
							</HeaderItem>
							<HeaderItem>
								<HeaderLink href="#Teacher" scroll={scroll}  
								className={activeLink === 'Teacher' ? 'active' : ''} 
								onClick={() => {
									mobileMenuClose();
									handleActiveLinkClick('Teacher');
								}}>training options</HeaderLink>
							</HeaderItem>
							<HeaderItem>
								<HeaderLink href="#Registration" scroll={scroll}  
								className={activeLink === 'Registration' ? 'active' : ''} 
								onClick={() => {
									mobileMenuClose();
									handleActiveLinkClick('Registration');
								}}>contacts</HeaderLink>
							</HeaderItem>
						</HeaderList>
					</HeaderMenu>

					<ContactButton onClick={() => {
						toggleModal();
					}} open={openMenu}>consultation by phone</ContactButton>
				</HeaderContent>

				</HeaderBody>


			<BasicModal open={open} toggleModal={toggleModal}/>
		</HeaderBox>
	)
}
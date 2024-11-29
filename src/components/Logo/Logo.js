import { LogoBox, LogoImg, LogoSubTitle, LogoTitle } from "./Logo.styled"

export const Logo = ({open, scroll}) => {
	return(
		<LogoBox>
				<div>
					<LogoTitle open={open} scroll={scroll}>Hell</LogoTitle>
					<LogoImg/>
					<LogoTitle open={open} scroll={scroll}>EN</LogoTitle>
				</div>

				<LogoSubTitle open={open} scroll={scroll}> <span>hellish</span> english</LogoSubTitle>
		</LogoBox>
	) 
} 
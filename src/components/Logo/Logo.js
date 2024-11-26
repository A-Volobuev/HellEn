import { LogoBox, LogoImg, LogoSubTitle, LogoTitle } from "./Logo.styled"

export const Logo = ({open}) => {
	return(
		<LogoBox>
				<div>
					<LogoTitle open={open}>Hell</LogoTitle>
					<LogoImg/>
					<LogoTitle open={open}>EN</LogoTitle>
				</div>

				<LogoSubTitle open={open}> <span>hellish</span> english</LogoSubTitle>
		</LogoBox>
	) 
} 
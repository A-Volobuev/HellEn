import React, {useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, MainBg } from "./App.styled";
import { HeaderBlock, MainBlock, AdvantagesBlock, ProblemsBlock, ProgramBlock, TeacherBlock, GuaranteeBlock, ReviewsBlock, RegistrationBlock, FooterBlock, HowWeDoBlock} from "../page";
import {BackToTopBtn} from './'

function App() {
  AOS.init({ 
		duration: 1000, // Длительность анимации
  	offset: 10,
	});
  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen((prev) => !prev);

  return ( 
    <>
    <MainBg/>
    <HeaderBlock toggleModal={toggleModal} open={open}/>
    <main>
    <Box>
        
        <MainBlock toggleModal={toggleModal} open={open}/>
        
        <AdvantagesBlock/>
      </Box>

      <ProblemsBlock/>

      <Box>
        <HowWeDoBlock/>
      </Box>

      <ProgramBlock/>

      <Box>
        <TeacherBlock/>
        <GuaranteeBlock/>
        <ReviewsBlock/>
      </Box>

      <RegistrationBlock/>

    </main>
      <FooterBlock/>

      <BackToTopBtn/>
    </>
  );
}

export default App;

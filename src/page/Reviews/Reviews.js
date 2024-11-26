import React, { useRef, useState } from 'react';
import { Box, FacebookIcon, SlideSvg, SplideCustom, SplideImg, SplideImgBox, SplideLink, SplideSlideCustom, SplideSubTitle, SplideText, SplideTextBox, SplideTitle, Title, ArrowPrevBtn, ArrowNextBtn, PaginationCustom, PaginationCustomBtn, PaginationMobileBox, PaginationMobileSplide} from "./Reviews.styled";
import {Avatar01, Avatar02, Avatar03, Avatar04, Avatar05, Avatar06, Avatar07, ArrowPrev, ArrowNext} from '../../images';
import "@splidejs/react-splide/css";
import "./Review.css";
const reviews = [
	{avatar: Avatar01, name:"Tonya Kucherovskaya", subTitle:"Graduated from 2015, National University of Bioresources and natural history of Ukraine", text:"In a short time with Elena, I mastered grammar and replenished my completely empty vocabulary. From the first lesson I realized that I was on my plate. Elena and I became friends because she was really worried about my success. She became an authority for me, but I did not tremble in class, fearing to make the slightest mistake. Now I can brag that I'm student ..." },
	{avatar: Avatar02, name: "Anya Petrova", subTitle: "Graduated from 2015, National University of Bioresources and natural history of Ukraine", text:"A short course with Elena helped me master grammar and significantly expand my vocabulary. From the very first lesson, I felt comfortable and confident. Elena's dedication to my success was inspiring, and her guidance helped me overcome my fear of making mistakes. Now, I can proudly say that I'm a student..."},
	{avatar: Avatar03, name: "Katia Ivanova", subTitle: "Graduated from 2015, National University of Bioresources and natural history of Ukraine", text:"Elena's classes were a game-changer for me. Her patient and supportive teaching style helped me overcome my language barrier. I'm amazed at how much progress I've made in such a short time. I'm grateful for her guidance and encouragement..."},
	{avatar: Avatar04, name: "Olya Smirnova", subTitle: "Graduated from 2015, National University of Bioresources and natural history of Ukraine", text:"I was initially hesitant to take language classes, but Elena's enthusiasm and expertise quickly changed my mind. Her lessons were engaging and effective, and I was able to learn quickly and efficiently. I'm so happy I chose to study with her..."},
	{avatar: Avatar05, name: "Daria Nikolaeva", subTitle: "Graduated from 2015, National University of Bioresources and natural history of Ukraine", text:"Before starting with Elena, I felt lost and overwhelmed. However, her clear explanations and practical exercises helped me gain confidence. I'm now able to communicate fluently and confidently in a foreign language..."},
	{avatar: Avatar06, name: "Victoria Sidorova", subTitle: "Graduated from 2015, National University of Bioresources and natural history of Ukraine", text:"Elena's personalized approach to teaching made a huge difference. She tailored her lessons to my specific needs and learning style. I'm incredibly grateful for her patience and support..."},
	{avatar: Avatar07, name: "Mila Popova", subTitle: "Graduated from 2015, National University of Bioresources and natural history of Ukraine", text:"I was surprised at how quickly I was able to progress with Elena's help. Her innovative teaching methods made learning fun and enjoyable. I highly recommend her to anyone looking to improve their language skills..."}
]

export const ReviewsBlock = () => {
	const splideRef = useRef(null);
	// Для установки активного индекса пагинации
	const [activeIndex, setActiveIndex] = useState(0);
	// Слайдер иконок
	const [iconMobileSlideIndex, setIconMobileSlideIndex] = useState(0);

	const goToSlide = (index) => {
		setActiveIndex(index);
    splideRef.current?.splide.go(index);
		setIconMobileSlideIndex(index-1);

		//! ЗАЧЕМ Я ПРОВЕРЯЛ ЭТО? 
		// if(index > iconMobileSlideIndex) {
		// 	setIconMobileSlideIndex(index-1);
		// } else if (index <= iconMobileSlideIndex) {
		// 	setIconMobileSlideIndex(index-1);
		// }

  };

	// Подвязываю слайдер к кнопкам
	const handleNextClick = () => {
		// Проверяем есть ли еще слайды сдвигаем вправо
		if (iconMobileSlideIndex < reviews.length - 1) {
			setIconMobileSlideIndex((prev) => prev + 1);
		}
	};
	const handlePrevClick = () => {
		// Сдвиг влево
		if (iconMobileSlideIndex > 0) {
			setIconMobileSlideIndex((prev) => prev - 1);
		}
	};
	return(
		<Box>
			<Title data-aos="zoom-in" data-aos-duration="1500">Feedback from graduates</Title>


			<SplideCustom aria-label="Reviews" data-aos="zoom-in-up" data-aos-duration="1500"
			ref={splideRef}
			options={ {
				padding: { left: 85, right: 85 },
				gap: 290,
				arrows: false, 
				width:1260,
				pagination: false,
				breakpoints: {
					1100: { 
						// gap: 190,
						width:788,
						padding: { left: "2%", right: "2%" },
					},
					990: { 
						gap: 190,
						width:688,
						padding: { left: "2%", right: "2%" },
					},
					580: { 
						gap: 190,
						width:688,
						padding: { left: "0", right: "0" },
					},
				},
			} }
			onMove={(splide) => setActiveIndex(splide.index)}
			>

			{reviews.map((review, index) => (
				<SplideSlideCustom id={index}>
					<SplideImgBox>
						<SplideImg src={review.avatar} alt={review.name}/>
						<SlideSvg><a href="http://localhost:3000/"><FacebookIcon/></a></SlideSvg>
					</SplideImgBox>

					<SplideTextBox>
						<SplideTitle>{review.name}</SplideTitle>
						<SplideSubTitle>{review.subTitle}</SplideSubTitle>
						<SplideText>{review.text}</SplideText>
						<SplideLink href="http://localhost:3000/">Read more</SplideLink>
					</SplideTextBox> 
				</SplideSlideCustom> 
			))}
			</SplideCustom>

 
 {/* Навигация */}
 		<PaginationCustom >
						<PaginationMobileBox>
							<PaginationMobileSplide mobileSlideIndex={iconMobileSlideIndex}>
								{reviews.map((review, index) => (
									<PaginationCustomBtn
									key={index}
									onClick={() =>{
										goToSlide(index);
										console.log(index)
										console.log(iconMobileSlideIndex)
									}}
									avatar={review.avatar}
									active={activeIndex === index}
									>
									</PaginationCustomBtn>
								))}
							</PaginationMobileSplide>
						</PaginationMobileBox>
      </PaginationCustom>

	{/* Стрелки */}
			<ArrowPrevBtn data-aos="zoom-in" data-aos-duration="1500"
        onClick={() => {
					splideRef.current?.splide.go('<');
					handlePrevClick();
				}}
        class="splide__arrow splide__arrow--prev"
    		type="button"
    		aria-label="Previous slide"
    		aria-controls="splide01-track"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <img src={ArrowPrev} alt="Previous" width="25" height="40" />
      </ArrowPrevBtn>

      <ArrowNextBtn data-aos="zoom-in" data-aos-duration="1500"
        onClick={() => {splideRef.current?.splide.go('>');
				handleNextClick();
			}}
        className="splide__arrow splide__arrow--next"
    		type="button"
    		aria-label="Next slide"
    		aria-controls="splide01-track"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <img src={ArrowNext} alt="Next" width="25" height="40" />
      </ArrowNextBtn>
		</Box> 
	)
}
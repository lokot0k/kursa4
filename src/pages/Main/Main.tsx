import React from "react"
import {SliderSection} from "../../components/SliderSection/SliderSection";
import {CarouselSection} from "../../components/CarouselSection/CarouselSection";
import {CatalogSection} from "../../components/CatalogSection/CatalogSection";
import {AboutSection} from "../../components/AboutSection/AboutSection";
import {BottomSection} from "../../components/BottomSection/BottomSection";
import {LetterSection} from "../../components/LettersSection/LetterSection";
import OurWorkSection from "../../components/OurWorksSection/OurWorkSection";

export const Main = () => {
	return (
		<div>
			<SliderSection></SliderSection>
			<CarouselSection></CarouselSection>
			<CatalogSection></CatalogSection>
			<AboutSection></AboutSection>
			<OurWorkSection></OurWorkSection>
			<BottomSection></BottomSection>
		</div>
	)
}
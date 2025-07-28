"use client"
import LightRays from '../reactbits/Backgrounds/LightRays/LightRays';
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { ShinyButton } from "@/components/magicui/shiny-button";
import FadeContent from '../reactbits/Animations/FadeContent/FadeContent'
import useMedia from 'use-media';
import { useRouter } from 'next/navigation';
import { Inter} from "next/font/google";

const InterFont = Inter({
  subsets: ["latin"],
});

export default function LandingPage() {
  const words = `Engineers are the architects of technological evolution, shaping tomorrow with intelligence and code`
  const wordsby = `-Farhan Ramadhan`

  const isLarge = useMedia({ minWidth: 1024 });
  const fontSizeWords = isLarge ? 26 : 18;
  const fontSizeWordsBy = isLarge ? 14 : 10;

  const router = useRouter();
  const handleRouteHome = () => {
    router.push("/home");
  };

  return (
    <div className="relative bg-black h-dvh overflow-hidden">
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={10}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center z-10 text-white py-5 px-5">
        <div className='flex flex-col gap-2'>
          <TextGenerateEffect className='text-xl font-medium text-white text-center' fontSize={fontSizeWords} words={words} />
          <TextGenerateEffect className='font-light text-center mt-1' fontSize={fontSizeWordsBy} duration={3} words={wordsby} />
        </div>
        <FadeContent blur={true} duration={3000} easing="ease-out" initialOpacity={0}>
          <ShinyButton className={`${InterFont.className} text-base`} onClick={handleRouteHome}>Explore Portfolio</ShinyButton>
        </FadeContent>
      </div>
    </div>
  );
}

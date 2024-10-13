import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

import javascriptImg from "../../assets/javascript.png";
import typescriptImg from "../../assets/typescript.png";
import reactjsImg from "../../assets/reactjs.png";
import figmaImg from "../../assets/figma.png";
import nodejsImg from "../../assets/nodejs.png";
import postegresql from "../../assets/postgresql.png";
import nextjsImg from "../../assets/nextjs.png";

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="self-center"
    >
      <CarouselContent>
        <CarouselItem className="basis-1/6"><img src={javascriptImg} alt="logo do javascript" /></CarouselItem>
        <CarouselItem className="basis-1/6"><img src={typescriptImg} alt="logo do typescript" /></CarouselItem>
        <CarouselItem className="basis-1/6"><img src={reactjsImg} alt="logo do react js" /></CarouselItem>
        <CarouselItem className="basis-1/6"><img src={figmaImg} alt="logo do figma" /></CarouselItem>
        <CarouselItem className="basis-1/6"><img src={nodejsImg} alt="logo do node js" /></CarouselItem>
        <CarouselItem className="basis-1/6"><img src={postegresql} alt="logo do postgresql" /></CarouselItem>
        <CarouselItem className="basis-1/6"><img src={nextjsImg} alt="logo do next js" /></CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

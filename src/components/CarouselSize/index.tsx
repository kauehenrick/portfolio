import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";

import javascriptImg from "../../assets/javascript.png";
import typescriptImg from "../../assets/typescript.png";
import reactjsImg from "../../assets/reactjs.png";
import figmaImg from "../../assets/figma.png";
import nodejsImg from "../../assets/nodejs.png";
import postgresqlImg from "../../assets/postgresql.png";
import nextjsImg from "../../assets/nextjs.png";

export function CarouselSize() {
  const logos = [
    javascriptImg,
    typescriptImg,
    reactjsImg,
    figmaImg,
    nodejsImg,
    postgresqlImg,
    nextjsImg
  ];

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
        {logos.map(logo => (
          <CarouselItem key={logo} className="basis-1/5">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 bg-background/90">
                  <img className="hover:drop-shadow-glow duration-300" src={logo} alt={`logo do ${logo}`} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

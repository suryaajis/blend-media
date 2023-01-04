import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function CarouselImage() {
  return (
    <Carousel autoPlay infiniteLoop>
      <div>
        <Image src="/assets/promo1.jpg" width={1600} height={700} />
      </div>
      <div>
        <Image src="/assets/promo2.jpg" width={1600} height={700} />
      </div>
      <div>
        <Image src="/assets/promo3.jpg" width={1600} height={700} />
      </div>
    </Carousel>
  );
}

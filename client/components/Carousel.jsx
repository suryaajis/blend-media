import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function CarouselImage() {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <Image src="/assets/promo2.jpg" alt="promo1" width={1600} height={700} />
      </div>
      <div>
        <Image src="/assets/promo3.jpg" alt="promo2" width={1600} height={700} />
      </div>
      <div>
        <Image src="/assets/promo1.jpg" alt="promo3" width={1600} height={700} />
      </div>
    </Carousel>
  );
}

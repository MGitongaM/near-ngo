import Image from "next/image";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="min-h-screen">
      {/* <div className="min-h-screen container mx-auto flex flex-col justify-center items-center px-4"> */}
      <div className="min-h-screen container mx-auto flex flex-col  px-4">
        <div className="flex flex-wrap-reverse lg:flex-nowrap gap-x-8">
          {/* <div className="max-w-3xl space-y-6 flex flex-col justify-center"> */}
          <div className="max-w-3xl space-y-6 pt-10 lg:pt-60 xl:pt-80">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Empowering Communities, Transforming Futures
            </h1>
            <p className="leading-8">
              Imagine a world where every local community has the resources,
              knowledge, and power to solve its own challenges. We&apos;re
              dedicated to making that vision a reality. Helping neighborhoods
              thrive by giving them the tools and agency they need to shape
              their destinies.
            </p>
            <Button
              size="lg"
              // className="w-96 bg-pink-700 text-white hover:bg-pink-600 hover:scale-110 transition duration-200"
              className=" bg-pink-700 text-white text-lg font-semibold hover:bg-pink-600 hover:scale-110 transition duration-200"
            >
              Join Us in Building Stronger Communities
            </Button>
          </div>
          <div className="bg-amber-300 rounded-b-md w-full lg:min-w-[42vw]">
            <Image
              src="/images/Near-ngo-home-hero-img no-bg.png"
              width={800}
              height={800}
              alt="Near Ngo Home Hero Image"
              className="object-contain min-h-[44vh] lg:min-h-screen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

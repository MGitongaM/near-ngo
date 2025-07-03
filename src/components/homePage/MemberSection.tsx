import {
  membershipHighlights,
  membershipTestimonial,
} from "@/StaticData/homePage";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function MemberSection() {
  return (
    <section id="membership" className="min-h-screen">
      <div className=" py-16">
        <div className="c">
          <div className="max-w-3xl mx-auto px-4 space-y-4">
            <h2 className="text-3xl text-center font-semibold text-black">
              NEAR Membership
            </h2>
            <p className="leading-8">
              NEAR&apos;s membership reaches nearly 300 members in 42 countries
              across 4 regions in the Global South. This is a movement of local
              and national civil society organisations from the Global South
              with a bold ambition to reshape the top-down humanitarian and
              development aid system to one that is locally driven and owned.
            </p>
          </div>
          <div className="bg-amber-400 rounded-md my-10 ">
            <Image
              src="/images/NEAR Membership Map.png"
              width={800}
              height={800}
              alt="Near Ngo Home Hero Image"
              className="object-cover h-[45dvh] w-full  rounded-md"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 space-y-4 py-10">
          <p className="leading-8 text-center font-semibold">
            When you become a member of NEAR, the benefits are:
          </p>
          <div className="flex flex-wrap justify-evenly items-center gap-4 py-4">
            {membershipHighlights.map((highlight) => (
              <div
                key={highlight.id}
                className=" w-full md:w-5/12 lg:w-[24rem] min-h-[20rem] flex flex-col gap-4 rounded-md bg-amber-100 px-4 py-8"
              >
                <div className="flex items-center gap-1">
                  <span className="p-2 w-10 rounded-lg bg-amber-400">
                    {highlight.icon}
                  </span>
                  <p className="font-bold">{highlight.title}</p>
                </div>
                <p className="leading-8">{highlight.text}</p>
              </div>
            ))}
          </div>
        </div>
        {/* memmbership testimonials */}
        <div className="px-14  md:px-20 py-20">
          <p className="leading-8 text-center font-semibold">
            What our Members say:
          </p>
          <Carousel className="py-10">
            <CarouselContent>
              {membershipTestimonial.map((testimonial) => (
                <CarouselItem key={testimonial.id} className=" lg:basis-1/2">
                  <div className="  flex flex-wrap md:flex-nowrap items-center gap-4 bg-slate-100 min-h-[24rem] rounded-md px-4 md:px-8 py-4">
                    <div className="c">
                      <div className="size-48 rounded-md bg-amber-100">
                        <Image
                          src={testimonial.userImage}
                          width={800}
                          height={800}
                          alt="NEAR member image"
                          className="object-cover size-48 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-7/12 mx-auto space-y-4">
                      <p className="leading-8 text-base font">
                        {`"${testimonial.point}"`}
                      </p>
                      <p className=" text-sm font-light leading-8">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* call to action  */}
        <div className="grid place-content-center -mt-10">
          <Button className="bg-pink-700 text-xl text-white hover:bg-pink-600 hover:scale-110 transition duration-200">
            Become a member
          </Button>
        </div>
      </div>
    </section>
  );
}

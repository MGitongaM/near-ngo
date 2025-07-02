import Image from "next/image";
import { Metadata } from "next";

const url = "/images/Near Open Graph.png";

export const metadata: Metadata = {
  title: "Resources - NEAR",
  description:
    "At NEAR, we are dedicated to reimagining and reshaping the global aid system to ensure it truly serves and support local civil society in the Global South.",
  openGraph: {
    images: {
      width: 1200,
      height: 627,
      url,
    },
  },
};

export default function page() {
  return (
    <>
      <section className="min-h-screen">
        <div className="min-h-screen container mx-auto grid place-content-center px-4">
          <Image
            src="/images/comming soon.png"
            width={800}
            height={800}
            alt="Near Ngo Home Hero Image"
            className="object-cover"
          />
          <p className="text-center text-xs">
            This page is under developement{" "}
          </p>
        </div>
      </section>
    </>
  );
}

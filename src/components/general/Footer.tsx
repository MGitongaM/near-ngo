import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="min-h-[40dvh] bg-gray-900">
      <div className="container mx-auto px-4 py-10 text-sm text-slate-100">
        <div className="flex flex-wrap justify-between items-start  gap-x-4 gap-y-12">
          <div className="w-full md:w-3/12 flex flex-col items-center md:items-start gap-4">
            <Image
              src="/images/NEAR logo.png"
              width={800}
              height={800}
              alt="Near Ngo Home Hero Image"
              className="object-contain w-40 mx-auto"
            />
            <p className="text-center">
              We focus on genuine local
              participation at all levels of development and disaster management
            </p>
          </div>
          <div className="w-full md:w-3/12 flex flex-col items-center md:items-start gap-4">
            <p className="font-bold">Contact Us</p>
            <p className="">P.O. BOX 70331-00400</p>
            <p className="">Nairobi, Kenya </p>
            <p className="">info@near.ngo </p>
          </div>
          <div className="w-full md:w-3/12 flex flex-col items-center md:items-start gap-4">
            <p className="font-bold">Set up to date with our work</p>
            <Link href="https://ngo.us16.list-manage.com/subscribe?id=9e7b3a1fc7&u=948d143bb1282c49d43311ce4" target="_blank" >
            <p className="">sign up for our newsletter</p>
            </Link>
          </div>
        </div>
        <p className="text-center text-xs  mt-24">
          {" "}
          &copy; copyright {new Date().getFullYear()} NEAR
        </p>
      </div>
    </footer>
  );
}

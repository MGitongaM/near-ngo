import Image from "next/image";

export default function InfoSection() {
  return (
    <section className="min-h-screen bg-amber-2000">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-xl mx-auto space-y-4 ">
          <h2 className="text-3xl text-center font-semibold text-black">
            Who we are
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-20">
          <div className="bg-amber-400 rounded-md">
            <Image
              src="/images/flags.jpg"
              width={800}
              height={800}
              alt="Near Ngo Home Hero Image"
              className="object-cover h-96  rounded-md"
            />
          </div>
          <div className="bg-amber-400 rounded-md row-span-2 h-full flex flex-col justify-evenly px-8 py-12">
            <div className="space-y-4 pb-20">
                <p className="text-4xl font-bold">NEAR is:</p>
                <p className="leading-8 text-lg">
                A movement of Local and National Civil Society
                Organisations (CSOs) from the Global South rooted in our
                communities who share a common goal of a fair, equitable and
                dignified Aid system.
                </p>
            </div>
            <div className="space-y-4 pb-20">
                <p className="text-4xl font-bold">Our work is:</p>
                <p className="leading-8 text-lg">
                Empowering and providing access to local and national NGOs in the
              Global South to take a positive and active role in the global aid
              system.
                </p>
            </div>

          </div>
          <div className="bg-amber-400 rounded-md">
            <Image
              src="/images/water.jpg"
              width={800}
              height={800}
              alt="Near Ngo Home Hero Image"
              className="object-cover h-96 rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

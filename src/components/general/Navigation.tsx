import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { navigationEntries } from "@/StaticData/general";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { MenuIcon } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="container mx-auto px-4 ">
      <NavigationMenu className="">
        <NavigationMenuList className="flex justify-between items-center w-[99vw] lg:w-[90vw] mx-auto min-h-[10dvh] fixed bg-white blur-md z-10 ">
          <NavigationMenuItem>
            <Link href="/">
            <Image
              src="/images/NEAR logo.png"
              width={800}
              height={800}
              alt="Near Ngo Home Hero Image"
              className="object-cover w-28 p-2 mx-auto"
            />
            </Link>
          </NavigationMenuItem>
          <div className="hidden md:flex gap px-10 justify-">
            {navigationEntries.map((entry) => (
              <NavigationMenuItem key={entry.id}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href={entry.link}>{entry.name}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </div>
          {/* Mobile Navigation  */}
          <div className="block md:hidden">
            <Sheet>
              <SheetTrigger>
                <MenuIcon className="size-10" />
              </SheetTrigger>
              <SheetContent side='top' className="">
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>
                <div className="flex flex-col px-8  gap-2 justify-end list-none">
                  {navigationEntries.map((entry) => (
                    <NavigationMenuItem key={entry.id}>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link href={entry.link}>{entry.name}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

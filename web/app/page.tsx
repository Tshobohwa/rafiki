import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <nav className="sticky top-0 left-0 right-0 z-50 w-full flex items-center justify-between p-4 bg-white/75 backdrop-blur-sm h-20 border-b px-10">
        <CardTitle className="text-2xl">Rafiki</CardTitle>
        <div className="flex gap-5">
          <Button variant={"secondary"} className="w-30">
            Login
          </Button>
          <Button variant={"default"} className="w-30">
            Sign Up
          </Button>
        </div>
      </nav>
    </div>
  );
}

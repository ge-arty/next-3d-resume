import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main>
      <Image
        src={bg}
        alt="background-image"
        fill
        className="w-full h-full object-cover object-center opacity-25 -z-10"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
    </main>
  );
}

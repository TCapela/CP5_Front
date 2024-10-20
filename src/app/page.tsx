import Image from "next/image"
import Foto from "@/src/app/img/Immanuel_Velikovsky.jpg"

export default function Home() {
  return (
  <div>
      <Image src={Foto} alt="Emanuel" />
  </div>
  );
}

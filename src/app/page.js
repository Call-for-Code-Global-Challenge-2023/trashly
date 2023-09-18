import Image from "next/image";
import Jumbotron from "@/_components/Jumbotron";

export default function Home() {
  return (
    <main className="">
      <Jumbotron
        maintext="Welcome to Trashly"
        leadtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, at."
      />
      <Jumbotron
        maintext="Lorem ipsum dolor sit amet."
        leadtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, at."
      />
      <Jumbotron
        maintext="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        leadtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, at."
      />
    </main>
  );
}

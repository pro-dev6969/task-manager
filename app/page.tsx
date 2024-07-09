import { Landing } from "@/components/landing/landing";
import Image from "next/image";

export default function Home() {
  return (
    <div className='flex flex-col justify-center align-center'>
      <div className='flex flex-row justify-center align-center'>
        <h1 className="mb-2 text-3xl text-black font-extrabold pt-4"> Task Manager </h1>
      </div>
      <Landing />
    </div>
  );
}

import React from "react";
import Image from "next/image";
import Card from "./components/card";

export default function page() {
  return (
    <div className="bg-slate-700 fixed w-full h-full flex flex-wrap justify-center items-center gap-5 pt-52 p-4">
      
      <div className="relative group h-80 w-64">
        <div className="absolute inset-0 justify-center transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
          <Image
            src="/jerry.jpeg"
            alt="Image"
            height={320}
            width={256}
            className=" object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gray-800 text-white flex flex-col justify-center items-center transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 p-4">
          <Card name="Jerry" age={22} rollno={1234} day="Monday" />
        </div>
      </div>

      <div className="relative group h-80 w-64">
        <div className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
          <Image
            src="/dora.jpeg"
            alt="Image"
            height={320}
            width={256}
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gray-800 text-white flex flex-col justify-center items-center transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100  p-4">
          <Card name="Dora" age={18} rollno={5678} day="Monday" />
        </div>
      </div>

      <div className="relative group h-80 w-64">
        <div className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
          <Image
            src="/tom.jpeg"
            alt="Image"
            height={320}
            width={256}
            className=" object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gray-800 text-white flex flex-col justify-center items-center transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 p-4">
          <Card name="Tom" age={20} rollno={9012} day="Monday" />
        </div>
      </div>
    </div>
  )
};
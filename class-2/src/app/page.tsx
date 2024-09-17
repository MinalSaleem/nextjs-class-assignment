import Head from "next/head";
import About from "./components/about";
import Header from "./components/header";

export default function Home() {
  return (
    <div>
      <h1>This is our Page.tsx</h1>
      <Header/>
      <About/>
      
    </div>
  )
}
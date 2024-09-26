'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
    const route = useRouter()
  return (
    <div>

        <div className="topdiv">
          <button onClick={()=>route.push('/about')}>
              About</button>

          <button onClick={()=>route.push('/contact')}>
              Contact</button>

          <button onClick={()=>route.push('/footer')}>
              Footer</button>
        </div>
  

        <h1  style={{ color: 'navy', fontSize: '2rem' , margin: '80px' }}>This is Main Page of website.</h1>

    </div>
  )
};

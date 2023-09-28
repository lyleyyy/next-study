import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import getta from "@/public/images/getta.jpg";
import Image from "next/image";
import { Metadata } from "next";
import HeavyComponent from "./components/HeavyComponent/HeavyComponent";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen">
      <h1 className="font-poppins">
        Hello World {session && <span>{session.user!.name}</span>}
      </h1>
      <HeavyComponent />
      <Link href="/users">Users</Link>
      <ProductCard />
      {/* <h1>{session && <span>{session.user!.name}</span>}</h1> */}
      {/* <Image src={getta} alt="Getta" /> */}
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="Getta"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
    </main>
  );
}

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");

//   return {
//     title: "product.title",
//     description: "....",
//   };
// }

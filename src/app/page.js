import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className=" flex flex-col justify-center items-center gap-16 my-16">
      <div className="flex justify-center items-center gap-16  w-full flex-wrap flex-col md:flex-row ">
        <div className="flex flex-col justify-center items-center gap-10  w-2/4">
          <h1 className="text-4xl font-bold">Creative Thoughts Agency.</h1>
          <p className="text-lg font-semibold text-gray-500 text-center"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            blanditiis adipisci minima reiciendis a autem assumenda dolore.</p>
          <div className="flex items-center justify-center gap-16">
            <button className="bg-white text-black rounded p-2 font-semibold hover:bg-gray-300">Learn More</button>
            <button className="bg-white text-black rounded p-2 font-semibold hover:bg-gray-300">Contact</button>
          </div>
          <Image src='/brands.png' width={600} height={300} alt="brands"></Image>
        </div>
        <div className="">
          <Image src='/hero.gif' width={500} height={500} alt='hero'></Image>
        </div>
      </div>
      <div className="flex justify-center items-center gap-16 bg-blue-800/20 py-16 shadow   w-full flex-wrap flex-col md:flex-row">
        <Image src='https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width={600} height={300} alt="brands"></Image>
        <div className="flex justify-center items-center gap-8 flex-col">
          <h1 className="text-3xl font-semibold text-white">Whats New</h1>
          <p className="text-2xl text-gray-300">Read the latest blogs and add your one</p>
          <Link href="/blog" className="text-lg border-b ">Read Now</Link>
        </div>
      </div>
    </section>
  );
}

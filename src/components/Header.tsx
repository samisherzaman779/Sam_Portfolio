import Link from "next/link";
import Nav from "./Nav";
import MObileNav from "./MobileNav";



const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
        <div className='container mx-auto flex justify-between items-center'>

            {/* Logo */}
            <Link href={"/"}>
            <h1 className="text-4xl font-semibold">
                Sam<span className="text-accent">.</span>
            </h1>
            </Link>

            {/* Desktop Nav & Hire me Button */}
            <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href={"contact"} >
            <button className="bg-accent rounded-2xl px-3 py-1 text-black font-bold text-lg">Hire me</button>
            </Link>
            </div>
            {/* mobile nav */}
            <div className="xl:hidden">
              <MObileNav />
            </div>
        </div>
    </header>
  )
}

export default Header
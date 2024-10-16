import Link from "next/link"

const Header = () => {
  return (
    <div className="w-full h-12 bg-[#020202] flex justify-evenly items-center">
        <Link href={"/"} >Home</Link>
        <Link href={"/gallery"} >Gallery</Link>
    </div>
  )
}

export default Header
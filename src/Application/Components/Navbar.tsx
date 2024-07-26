export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-black py-7">
        <ul className="text-white text-xl font-bold uppercase flex gap-12 justify-center">
            <li><a href="#about" className="hover:text-white">Notre restaurant</a></li>
            <li><a href="#menu" className="hover:text-white">Le menu</a></li>
            <li>Contact</li>
        </ul>
    </div>
  )
}
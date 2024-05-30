// eslint-disable-next-line react/prop-types
const Navbar = ({logoName , tag}) => {
  return (
    <nav className="flex justify-between border items-center h-10 shadow-sm">
      <div>{logoName} </div>
      <div>{tag} </div>
      <div>
        <ul className="flex gap-2">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
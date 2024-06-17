import Link from "next/link"

const Navbar = () => {
  
  return (
    <nav>
      <div>
      <h1>AnhTuanKckt</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/dashboard">Dashboard</Link>
    </nav>
  )
}

export default Navbar
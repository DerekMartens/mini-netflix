import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='bg-gray-800 text-white shadow-lg' role='navigation' aria-label='Main Navigation'>
      <div className='container mx-auto flex justify-between items-center p-4'>
        <div className='text-2xl font-bold'>
          <Link href='/' aria-label='Home'>Mini-Netflix</Link>
        </div>
        <div className='space-x-4'>
            <Link href='/' className='hover:text-gray-400 transition duration-300' aria-label='Home'>Home</Link>
            <Link href='/about' className='hover:text-gray-400 transition duration-300' aria-label='About'>About</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

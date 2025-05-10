import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Simple Next.js Site</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/recipe" className="hover:text-gray-300">
                Recipe
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-gray-300">
                Resources
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
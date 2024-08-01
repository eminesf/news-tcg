export function Footer() {
  return (
    <footer className="bg-primary text-secondary py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">PokeNews TCG</h2>
          <p className="text-secondary/90">© 2024 All rights reserved</p>
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="hover:text-secondary/90">
            Home
          </a>
          <a href="#" className="hover:text-secondary/90">
            About
          </a>
          <a href="#" className="hover:text-secondary/90">
            Services
          </a>
          <a href="#" className="hover:text-secondary/90">
            Contact
          </a>
        </nav>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-secondary hover:text-secondary/90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.5c-.9.4-1.8.7-2.8.8a5 5 0 002.2-2.7c-1 .6-2.1 1-3.3 1.2a5 5 0 00-8.5 4.6c-4-.2-7.6-2-10-4.9a5 5 0 001.6 6.7c-.8-.1-1.6-.3-2.3-.6v.1c0 2.3 1.6 4.3 3.7 4.8-.7.2-1.5.2-2.2.1a5 5 0 004.6 3.4 10 10 0 01-6.1 2.1c-.4 0-.9 0-1.3-.1a14 14 0 007.6 2.2c9.1 0 14-7.5 14-14v-.6c.9-.7 1.7-1.5 2.3-2.4z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

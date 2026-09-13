function Navbar() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center
        min-h-24 max-w-[1240px] mx-auto px-4 md:px-6 py-4 gap-4">

            {/* Logo */}
            <img
                src="/logo.png"
                alt="logo"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                <a
                    href="#"
                    className="text-gray-700 font-medium hover:text-blue-600
                    hover:-translate-y-1 transition-all duration-300"
                >
                    Home
                </a>

                <a
                    href="#"
                    className="text-gray-700 font-medium hover:text-blue-600
                    hover:-translate-y-1 transition-all duration-300"
                >
                    About
                </a>

                <a
                    href="#"
                    className="text-gray-700 font-medium hover:text-blue-600
                    hover:-translate-y-1 transition-all duration-300"
                >
                    Services
                </a>

                <a
                    href="#"
                    className="text-gray-700 font-medium hover:text-blue-600
                    hover:-translate-y-1 transition-all duration-300"
                >
                    Contact
                </a>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 md:gap-4">

                <button
                    className="border border-blue-600 bg-blue-300 rounded-full
                    px-4 md:px-6 py-2 md:py-3 cursor-pointer font-medium
                    hover:bg-blue-500 hover:text-white
                    active:bg-blue-700 active:scale-95
                    transition-all duration-200"
                >
                    Sign Up
                </button>

                <button
                    className="border border-blue-600 bg-blue-300 rounded-full
                    px-4 md:px-6 py-2 md:py-3 cursor-pointer font-medium
                    hover:bg-blue-500 hover:text-white
                    active:bg-blue-700 active:scale-95
                    transition-all duration-200"
                >
                    Login
                </button>

            </div>

        </div>
    )
}

export default Navbar;

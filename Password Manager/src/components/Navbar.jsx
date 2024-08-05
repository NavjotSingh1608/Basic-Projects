import { useState, useRef, UseEffect, useEffect } from "react";

export default function NavBar() {

    let menuref = useRef()
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        let handler = (e) => {
            if (!menuref.current.contains(e.target)) {
                setNavbar(false)
            }
        }

        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })


    return (
        <nav className="w-full bg-white shadow fixed top-0 rounded-lg">
            <div ref={menuref} className="justify-around p-2 m-2 lg:flex lg:justify-between lg:items-center  md:flex md:items-center md:justify-between md:p-2">
                <div>
                    <div className="flex items-center justify-between md:block">
                        <a href="/" className="flex">
                            <span>
                                <img src="src/assets/image.png" alt="Logo" className="h-8 w-8 mr-2 rounded-md" />
                            </span>
                            <h2 className="text-2xl font-bold">PassManager</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center p-2 md:block md:p-2  ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/">Home</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/">About Us</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/">Contact Us</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/">Sign Up </a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/">Log In </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

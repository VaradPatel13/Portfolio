"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfilesOpen, setIsProfilesOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleProfiles = () => {
    setIsProfilesOpen(!isProfilesOpen)
  }

  return (
    <nav className="bg-gray-900 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Varad Patel
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="#about" className="hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="#skills" className="hover:text-blue-400 transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-blue-400 transition-colors">
            Projects
          </Link>
          <Link href="#certifications" className="hover:text-blue-400 transition-colors">
            Certifications
          </Link>

          {/* Profiles Dropdown */}
          <div className="relative">
            <button className="flex items-center hover:text-blue-400 transition-colors" onClick={toggleProfiles}>
              Profiles <ChevronDown size={16} className="ml-1" />
            </button>

            {isProfilesOpen && (
              <div className="absolute top-full mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10">
                <a
                  href="https://www.codechef.com/users/varadpatel1324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  CodeChef
                </a>
                <a
                  href="https://leetcode.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  LeetCode
                </a>
                <a
                  href="https://www.hackerrank.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  HackerRank
                </a>
                <a
                  href="https://www.geeksforgeeks.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  GeeksforGeeks
                </a>
              </div>
            )}
          </div>

          <a
            href="https://drive.google.com/file/d/1PueXAzjGye9rNbN1ARoULyhPrriG807s/view?usp=drive_link"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-800 p-4 flex flex-col space-y-4">
            <Link href="#about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-blue-400 transition-colors">
              Projects
            </Link>
            <Link href="#certifications" className="hover:text-blue-400 transition-colors">
              Certifications
            </Link>

            {/* Profiles Dropdown for Mobile */}
            <div>
              <button className="flex items-center hover:text-blue-400 transition-colors" onClick={toggleProfiles}>
                Profiles <ChevronDown size={16} className="ml-1" />
              </button>

              {isProfilesOpen && (
                <div className="mt-2 pl-4 flex flex-col space-y-2">
                  <a
                    href="https://www.codechef.com/users/varadpatel1324"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    CodeChef
                  </a>
                  <a
                    href="https://leetcode.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    LeetCode
                  </a>
                  <a
                    href="https://www.hackerrank.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    HackerRank
                  </a>
                  <a
                    href="https://www.geeksforgeeks.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    GeeksforGeeks
                  </a>
                </div>
              )}
            </div>

            <a
              href="/Varad_Patel_CV.pdf"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-center transition-colors"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}


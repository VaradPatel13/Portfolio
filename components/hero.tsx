import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-500">Varad Patel</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6">Computer Engineer</h2>
          <p className="text-lg mb-8 text-gray-300">
            Passionate about building innovative solutions and creating impactful software applications.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-blue-500 shadow-xl">
            <Image
              src="/IMG20250215101555.jpg"
              alt="Varad Patel - Software Developer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}


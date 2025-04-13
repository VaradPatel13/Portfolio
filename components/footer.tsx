import Link from "next/link"
import { Github, Linkedin} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Varad Patel</h2>
            <p className="text-gray-400 mt-2">Computer Engineer</p>
          </div>

          <div className="flex space-x-4 mb-6 md:mb-0">
            <a
              href="https://github.com/VaradPatel13"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Varad Patel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


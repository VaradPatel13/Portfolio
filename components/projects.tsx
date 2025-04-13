import { Code, Smartphone, Cpu } from "lucide-react"

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ATM Project */}
          <a
            href="https://github.com/VaradPatel13/ATM-in-python-"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">ATM System</h3>
              <p className="text-gray-600 mb-4">
                A basic ATM system implemented in Python using SQLite for database management. Provides functionality
                for managing accounts and handling transactions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">SQLite3</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Database</span>
              </div>
            </div>
          </a>

          {/* Student Feedback Form */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Student Feedback Form</h3>
              <p className="text-gray-600 mb-4">
                An Android application for student feedback using Java and XML. Features a user-friendly interface,
                real-time data validation, and secure storage using SQLite.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Java</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">XML</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Android</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">SQLite</span>
              </div>
            </div>
          </div>

          {/* Automatic Door System */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Automatic Door System</h3>
              <p className="text-gray-600 mb-4">
                An IoT-based Automatic Door System using fingerprint authentication. Integrated biometric modules for
                secure access control with Arduino UNO.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">C++</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Arduino UNO</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">IoT</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Hardware</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


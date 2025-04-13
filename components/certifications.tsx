import { Code, Briefcase, FileCode, Smartphone } from "lucide-react"

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Python Programming */}
          <a
            href="https://drive.google.com/file/d/1hhp_aZbvnHwUdZ_FI1hTCHpTy7L_5lP2/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Code className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Python Programming</h3>
              <p className="text-gray-600">Certified by VJ Tech Academy</p>
            </div>
          </a>

          {/* Android Development */}
          <a
            href="https://drive.google.com/file/d/11L2DIPqqMLivgLgoWXKxQE4MtVAAqk9v/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Smartphone className="text-green-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Android Development</h3>
              <p className="text-gray-600">Certified by VJ Tech Academy</p>
            </div>
          </a>

          {/* 6 Weeks Internship */}
          <a
            href="https://drive.google.com/file/d/1HT_orAw0LedVrwtuMnu0ylXrzelmSlWc/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Briefcase className="text-purple-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">6 Weeks Internship</h3>
              <p className="text-gray-600">Web Development at Sumago Infotech</p>
            </div>
          </a>

          {/* JavaScript */}
          <a
            href="https://drive.google.com/drive/u/1/folders/1tITd1NVxHZh-nGvEmJbG9W9VUEu5jYFa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <FileCode className="text-yellow-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">JavaScript</h3>
              <p className="text-gray-600">Certified by CodeChef</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}


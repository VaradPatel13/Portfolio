import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    let count = localStorage.getItem('visitorCount');
    if (count) {
      count = String(Number(count) + 1);
      localStorage.setItem('visitorCount', count);
    } else {
      count = '1';
      localStorage.setItem('visitorCount', count);
    }
    setVisitorCount(Number(count));
  }, []);

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/VaradPatel13',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/varad-patel',
      label: 'LinkedIn'
    },
    
    {
      icon: Mail,
      href: 'mailto:contact@varadpatel.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-[#2b2b2b] text-[#e6dfd3] font-poppins">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#bda863]">Varad Patel</h3>
            <p className="text-sm text-[#e6dfd3] opacity-80">
              Building digital experiences that make a difference.
            </p>
          </div>


          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#bda863]">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects',  'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[#e6dfd3] opacity-70 hover:opacity-100 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#bda863]">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e6dfd3] opacity-70 hover:opacity-100 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>


        <div className="mt-12 pt-8 border-t border-[#857f74]/40 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm opacity-70">© {new Date().getFullYear()} Varad Patel. All rights reserved.</p>
          <div className="flex items-center space-x-2 text-sm">
            <span className="opacity-70">Visitors:</span>
            <span className="px-3 py-1 bg-[#3b3b3b] text-[#bda863] rounded-full font-medium">{visitorCount}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

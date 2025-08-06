import React from 'react'

const contact = () => {
  return (
    <div>
        {/* Footer */}
      <footer className="bg-[#043e3a] py-8 text-sm text-gray-300 mt-12" id='contact'>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
          <div>
            <h4 className="text-white font-bold text-lg">Tutorful</h4>
            <p className="mt-2">Empowering students through better learning.</p>
          </div>
          <div className="space-y-2">
            <p className="text-white font-semibold">Company</p>
            <a href="#" className="hover:underline">About Us</a><br />
            <a href="#" className="hover:underline">Careers</a><br />
            <a href="#" className="hover:underline">Help Center</a>
          </div>
          <div className="space-y-2">
            <p className="text-white font-semibold">Connect</p>
            <a href="#" className="hover:underline">Facebook</a><br />
            <a href="#" className="hover:underline">Twitter</a><br />
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400 text-xs">
          © {new Date().getFullYear()} Tutorful. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default contact
function About(){
    return(
        <footer className="bg-gradient-to-br from-[#1252b2] to-[#14031f] text-white pt-10 border-t-1 border-white/50">
            <div className="max-w-6xl mx-auto text-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Let's Connect
                    </h2>
                    <p className="text-lg mb-6">
                        I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                </div>
                <p className="text-1xl">
                    &copy; {new Date().getFullYear()} Sanchay Mandil. All rights reserved.
                </p>
                <p className="text-xs mt-2">
                    Built with ❤️ using React and Tailwind CSS
                </p>
                 <div className=" flex justify-center py-5 px-5">
                <ul className="flex space-x-10">
                    <li><a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEKDoWYhHxl2QAAAZcrU7agizBdS-8sidPdO9nPENNTHG_5AcmO4a2kCJ5AnzVTS53XlBNOykYSuhzR1E46QcYdQEypf4bdjJqSU2I1qf2EWlRsLIjx8aAajJ2HuVcZERX8Dlo=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsanchay-mandil-727a9b256%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app" className="hover:underline"><img className="h-6 inline invert" src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000" alt="" /></a></li>
                      <li><img className="h-6 inline invert" src="https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=000000" alt="" /> <span className="text-white">: sanchaymandil@gmal.com</span> </li>
                </ul>
            </div>
            </div>
        </footer>
    )
}
export default About;;
import React from "react";

function Header(){
    return(
        <>
        <nav className="flex top-0 fixed z-10 justify-start  text-white">
            <h1 className="text-[1.5vw] font-bold bg-[#3f72d8] rounded-br-3xl px-[0.5vw] pt-[1.3vw] max-md:text-[5.5vw] max-md:pt-[4vw] max-md:px-[4vw]">Sanchay Mandil</h1>
            <div className=" flex text-2xl invert py-5 px-5">
                <ul className="flex space-x-10">
                    <li> <a href="https://leetcode.com/u/sanchaymandil/" className="hover:underline"><img className="h-6" src="https://img.icons8.com/?size=100&id=dc6kdToG53HN&format=png&color=000000" alt="" /></a></li>
                    <li><a href="https://github.com/sanchayMandil" className="hover:underline"><img className="h-6"src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" alt="" /></a></li>
                    <li><a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEKDoWYhHxl2QAAAZcrU7agizBdS-8sidPdO9nPENNTHG_5AcmO4a2kCJ5AnzVTS53XlBNOykYSuhzR1E46QcYdQEypf4bdjJqSU2I1qf2EWlRsLIjx8aAajJ2HuVcZERX8Dlo=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsanchay-mandil-727a9b256%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app" className="hover:underline"><img className="h-6" src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000" alt="" /></a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}
export default Header;
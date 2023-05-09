import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaGoogle } from "react-icons/fa";

function SocialLinks() {
    const links = [
        {
            id:1,
            child:<>
            FaceBook <FaFacebook size={25}/>
          </>,
          href:'https://www.facebook.com/john.prakash.9231712',
          style:'rounded-tr-md'
        },
        {
            id:2,
            child:<>
            Instagram <FaInstagram size={25}/>
          </>,
          href:'https://www.instagram.com/mr_john1432_/',
          
        },
        {
            id:3,
            child:<>
            YouTube <FaYoutube size={25}/>
          </>,
          href:'https://www.youtube.com/@001-cm-johnprakash4',
          
        },
        {
            id:4,
            child:<>
            Google <FaGoogle size={25}/>
          </>,
          href:'https://www.google.com/search?client=ms-android-oppo-rvo3&sxsrf=APwXEdd1M_MFLWvbJJ8hgxzGuZd-A2abEw:1683617012868&q=001-+CM+-+JOHN+PRAKASH&stick=H4sIAAAAAAAAAOOwesSozi3w8sc9YSm5SWtOXmOU4BLzSsxLLEl0LkpNLEkNTk0sSs5wTixK4VnEKmZgYKir4OyroKvg5e_hpxAQ5OjtGOwBAADnYqZFAAAA&sa=X&ved=2ahUKEwjSgvWP2uf-AhX8SmwGHXx8ApIQnJoFegQIARAG&biw=360&bih=706&dpr=3',
          style:'rounded-br-md'
        },
    ]
  return (
 <div className="hidden md:block">
       <div className=" flex flex-col top-[35%] left-0 fixed">
      <ul>
        {
            links.map(({id,child,href,style})=>(
                <li key={id} className={`flex justify-between items-center w-40 h-14 px-4  bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] ${style}`}>
          <a href={href} target="_blank" rel="noreferrer"  className="flex justify-between items-center w-full text-white">
           {child}
          </a>
        </li>
            ))
        }
      </ul>
    </div>
 </div>
  );
}

export default SocialLinks;

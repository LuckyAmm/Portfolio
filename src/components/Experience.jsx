import React from "react";
import Angular from "./assets/angularjs.jfif";
import Next from "./assets/nextjs.jfif";
import ReactJs from "./assets/reactjs.jfif";
import Python from "./assets/python.jfif";

const Experience = () => {
   const technology = [
    {
        id:1,
        src:ReactJs,
        name:'React Js',
        style:'shadow-blue-600'
    },
    {
        id:2,
        src:Angular,
        name:'Angular Js',
        style:'shadow-red-600'
    },
    {
        id:3,
        src:'https://itguru.vn/blog/wp-content/uploads/2020/06/Express-JS-logo-768x426.jpg',
        name:'Express Js',
        style:'shadow-yellow-600'
    },
    {
        id:4,
        src:Next,
        name:'Next Js',
        style:'shadow-gray-600'
    },
    {
        id:5,
        src:'https://tse4.mm.bing.net/th?id=OIP.GPe6FXZEGUWbGm2vkdAMtAHaEO&pid=Api&P=0',
        name:'Spring Boot',
        style:'shadow-green-600'
    },
    {
        id:6,
        src:'https://logos-download.com/wp-content/uploads/2016/09/PHP_logo.png',
        name:'PHP',
        style:'shadow-blue-600'
    },
    {
        id:7,
        src:Python,
        name:'Python',
        style:'shadow-orange-600'
    },
    {
        id:8,
        src:'https://tse2.mm.bing.net/th?id=OIP.eTG_I4LEgyGwP3RLc65GjAHaEG&pid=Api&P=0',
        name:'MongoDb',
        style:'shadow-green-800'
    },
   ]

  return (
    <div
      className="bg-gradient-to-b from-black to-gray-800 lg:h-screen w-full text-white"
      name="experience"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline">Experience</h2>
          <p className="py-6 text-3xl">Some of my frontend and backend Technologies i Used</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-6 px-12 sm:px-0">
            {
                technology?.map(({id,src,name,style})=>
                <div className={`shadow-md ${style}`} rounded-lg key={id}>

                <img src={src} alt="angular" className="rounded-md duration-200 hover:scale-105 object-cover max-h-80" height="100px"/>
                <div className="flex items-center justify-center">
                    <h3 className="my-3 text-3xl">{name}</h3>
                </div>
                </div>
                )
            }
         
        </div>
      </div>
    </div>
  );
};

export default Experience;

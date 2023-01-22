
import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
   

export default function () {
  return (
    <>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <h1 className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            OUR PAST SPEAKERS
          </h1>
        </div>
        </div>
       
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.moneycontrol.com/static-mcnews/2021/08/Ashneer-Grover-2-770x433.jpg?impolicy=website&width=770&height=431"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Ashneer Grover
              </p>
              <p className="mb-4 text-xs text-gray-100"> Former co-founder of BharatPe</p>
             
              
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://raw.githubusercontent.com/ecelldtu/esummit/main/images/Kenny-Sebastian.webp"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Kenny Sebastian
              </p>
              <p className="mb-4 text-xs text-gray-100">Comedian</p>
             
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Vinod_Dham_%28cropped%29.jpg"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Vinod Dham
              </p>
              <p className="mb-4 text-xs text-gray-100">Father Of Pentium</p>
              
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://starsunfolded.com/wp-content/uploads/2020/08/Rahul-Dua.jpg"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Rahul Dua
              </p>
              <p className="mb-4 text-xs text-gray-100">Comedian</p>
              
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://esummit.ecelldtu.in/images/ASHWANI-LOHANI.webp"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
              ASHWANI LOHANI
              </p>
              <p className="mb-4 text-xs text-gray-100">CEO AIR INDIA LIMITED</p>
              
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://esummit.ecelldtu.in/images/Rajiv-Sikka.webp"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
              RAJIV SIKKA
              </p>
              <p className="mb-4 text-xs text-gray-100">CEO INDIAN OIL-ADANI GAS</p>
              
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://i0.wp.com/biographyinsider.com/wp-content/uploads/2021/09/Ankur-Warikoo.jpeg?fit=1920%2C2400&ssl=1"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Ankur Warikoo
              </p>
              <p className="mb-4 text-xs text-gray-100">former CEO of Groupon India, co-founder & former CEO of Nearbuy</p>
              
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2021/08/11/156320-dukaan.jpg?itok=3-ESTIEE&c=c5af8c0f92ccc8e249257bf0f1cb18e8"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
               Subash Chaudhary
              </p>
              <p className="mb-4 text-xs text-gray-100">Co-Founder & CTO of DUKAAN</p>
              
            </div>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}




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
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Oliver Aguilerra
              </p>
              <p className="mb-4 text-xs text-gray-100">Product Manager</p>
             
              
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Marta Clermont
              </p>
              <p className="mb-4 text-xs text-gray-100">Design Team Lead</p>
             
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Anthony Geek
              </p>
              <p className="mb-4 text-xs text-gray-100">CTO, Lorem Inc.</p>
              
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Alice Melbourne
              </p>
              <p className="mb-4 text-xs text-gray-100">Human Resources</p>
              
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Martin Garix
              </p>
              <p className="mb-4 text-xs text-gray-100">Good guy</p>
              
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Andrew Larkin
              </p>
              <p className="mb-4 text-xs text-gray-100">Backend Developer</p>
              
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Sophie Denmo
              </p>
              <p className="mb-4 text-xs text-gray-100">Designer</p>
              
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                Benedict Caro
              </p>
              <p className="mb-4 text-xs text-gray-100">Frontend Developer</p>
              
            </div>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}



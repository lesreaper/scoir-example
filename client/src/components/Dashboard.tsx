import React from "react";
// import { useSelector } from "react-redux";
import { useAppSelector } from "../redux/hooks";

export const Dashboard = (): JSX.Element => {

  const { token, username } = useAppSelector((state) => state.user);

  return (
    <div className="flex h-screen">
      <div className="px-4 py-2 bg-gray-200 bg-indigo-600 lg:w-1/4">
        <svg xmlns="http://www.w3.org/2000/svg" className="inline w-8 h-8 text-white lg:hidden" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <div className="hidden lg:block">
          <div className="my-2 mb-6">
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          </div>
          <ul>
            <li className="mb-6">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button type="submit" className="p-1 focus:outline-none">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round"
                      strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                      className="w-4 h-4">
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </span>
                <input type="search" name="search"
                  className="w-full px-4 py-2 pl-12 rounded shadow outline-none" placeholder="Search..." />
              </div>
            </li>
            <li className="mb-2 rounded hover:shadow hover:bg-gray-800">
              <a href="#" className="inline-block w-full h-full px-3 py-2 font-bold text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2 -mt-2"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </a>
            </li>
            <li className="mb-2 bg-gray-800 rounded shadow">
              <a href="#" className="inline-block w-full h-full px-3 py-2 font-bold text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2 -mt-2"
                  viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                    clipRule="evenodd" />
                </svg>
                Blogs
              </a>
            </li>
            <li className="mb-2 rounded hover:shadow hover:bg-gray-800">
              <a href="#" className="inline-block w-full h-full px-3 py-2 font-bold text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2 -mt-2"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Reports
              </a>
            </li>
            <li className="mb-2 rounded hover:shadow hover:bg-gray-800">
              <a href="#" className="inline-block w-full h-full px-3 py-2 font-bold text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2 -mt-2"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Inbox
              </a>
            </li>
          </ul>
        </div>

      </div>
      <div className="w-full px-4 py-2 bg-gray-200 lg:w-full">
        <div className="container mx-auto mt-12">
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="flex items-center px-4 py-6 bg-white rounded-md shadow-md">
              <div className="p-3 bg-indigo-600 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="mx-4">
                <h4 className="text-2xl font-semibold text-gray-700">Your token</h4>
                <div className="text-gray-500 break-all">{token}</div>
              </div>
            </div>
            <div className="flex items-center px-4 py-6 bg-white rounded-md shadow-md">
              <div className="p-3 bg-indigo-600 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div className="mx-4">
                <h4 className="text-2xl font-semibold text-gray-700">Username</h4>
                <div className="text-gray-500">{username}</div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}
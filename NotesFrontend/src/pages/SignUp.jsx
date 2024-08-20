import React from 'react'

const SignUp = () => {
    return (
        /* From Uiverse.io by themrsami */
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg shadow-gray-500 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">SignUp for free</h2>
                <strong className='text-sm font-semibold text-gray-500 '>so that only you can see your Notes</strong>

                <form className="flex flex-col mt-4">
                    <div className=" flex gap-5">
                        <input type="text" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="First Name" />
                        <input type="text" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="last Name" />
                    </div>
                    <input type="email" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email (will be your username)" />
                    <input type="text" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Phone Number" />
                    <input type="password" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Password" />

                    <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">SignUp</button>
                </form>
            </div>
        </div>

    )
}

export default SignUp

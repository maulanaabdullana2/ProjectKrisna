import React from 'react'
import Navbar from '../../components/Navbar'
import "./style.css"

export default function Register() {
    return (
        <div>
            <Navbar />
            <div className='bg min-h-screen flex  gap-10'>
                <div className="w-1/2 relative">
                    <div className="absolute top-0 left-0 w-full h-full  flex flex-col justify-center items-start p-10 text-white">
                        <h1 className="text-4xl font-bold mb-4">HAPPY CHILD, HAPPY FAMILY</h1>
                        <p className="text-lg">Admissions Open</p>
                    </div>
                </div>
                <form className="w-full max-w-xl p-8 mt-5 bg-white rounded-xl shadow-lg space-y-4">
                    <h1 className="text-2xl font-bold text-center text-blue-800">Register Now for LAP 2025–2026</h1>
                    <p className="text-center text-gray-500">Fill the form below and we'll get in touch shortly!</p>

                    <input type="text" placeholder="Student Name" className="w-full p-3 border rounded-md" />
                    <input type="text" placeholder="Parent Name" className="w-full p-3 border rounded-md" />
                    <input type="text" placeholder="Your Location" className="w-full p-3 border rounded-md" />
                    <input type="text" placeholder="Phone Number" className="w-full p-3 border rounded-md" />
                    <input type="email" placeholder="Email Id" className="w-full p-3 border rounded-md" />

                    <select className="w-full p-3 border rounded-md">
                        <option>Select Program</option>
                        <option>LAP A</option>
                        <option>LAP B</option>
                        <option>LAP C</option>
                    </select>

                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="whatsapp" className="w-4 h-4" />
                        <label htmlFor="whatsapp" className="text-sm text-gray-700">I agree to receive messages on Whatsapp</label>
                    </div>

                    <button type="submit" className="w-full p-3 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                        Enquiry Now
                    </button>
                </form>
            </div>

        </div>
    )
}

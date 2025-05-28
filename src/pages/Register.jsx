import React from 'react'
import Navbar from '../components/navbar'
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer'
import Success from '@assets/Notif.png'
import { useState } from 'react'

export default function Register() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        studentName: '',
        parentName: '',
        location: '',
        phoneNumber: '',
        email: '',
        program: '',
        whatsappConsent: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const scriptURL = 'https://script.google.com/macros/s/AKfycbyZmzyOIZgJCjLLRCmkXFskxPRczY6voRPhYdf_e_iPO-jf8Hf7C17B5kIijrvIadZ3jA/exec'; // <- ganti dengan URL Web Apps kamu

        const response = await fetch(scriptURL, {
            method: 'POST',
            body: new URLSearchParams(formData),
        });

        if (response.ok) {
            setIsSubmitted(true);
            setFormData({
                studentName: '',
                parentName: '',
                location: '',
                phoneNumber: '',
                email: '',
                program: '',
                whatsappConsent: false
            });
        } else {
            alert('Failed to submit form');
        }

    };

    return (
        <div>
            <Navbar />
            <div className='bg min-h-screen flex flex-wrap justify-center items-center p-4 gap-10'>
                <div className="w-full md:w-1/2 relative min-h-[400px]">
                    <div className="hidden md:hidden lg:flex sm:flex absolute top-0 left-0 w-full h-full flex-col justify-center items-start p-10 text-white">
                        <h1 className="text-4xl font-bold mb-4">HAPPY CHILD, HAPPY FAMILY</h1>
                        <p className="text-lg">Admissions Open for 2025/2026</p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="w-full md:w-[500px] p-4 bg-white rounded-xl shadow-lg space-y-3 relative top-[-25rem] md:top-0"
                >
                    <h1 className="text-2xl font-bold text-center text-blue-800">
                        Register Now for LAP 2025–2026
                    </h1>
                    <p className="text-center text-gray-500">
                        Fill the form below and we'll get in touch shortly!
                    </p>

                    <input
                        type="text"
                        name="studentName"
                        placeholder="Student Name"
                        value={formData.studentName}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-md"
                    />
                    <input
                        type="text"
                        name="parentName"
                        placeholder="Parent Name"
                        value={formData.parentName}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-md"
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Your Location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-md"
                    />
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-md"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Id"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-md"
                    />

                    <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-md"
                    >
                        <option value="">Select Program</option>
                        <option value="Preparatory">Preparatory (age 1.5 - 2 Years)</option>
                        <option value="Toddler">Toddler (age 2 - 3 Years)</option>
                        <option value="Playgroup">Playgroup (age 3 - 4 Years)</option>
                        <option value="Learnes & Achives">Learnes & Achives (age 4 Years+)</option>
                    </select>

                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="whatsappConsent"
                            checked={formData.whatsappConsent}
                            onChange={handleChange}
                            id="whatsapp"
                            className="w-4 h-4"
                        />
                        <label htmlFor="whatsapp" className="text-sm text-gray-700">
                            I agree to receive messages on Whatsapp
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full p-3 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Enquiry Now
                    </button>
                </form>

            </div>
            <AnimatePresence>
                {isSubmitted && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                        onClick={() => setIsSubmitted(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="p-4 rounded-lg"
                            onClick={() => setIsSubmitted(false)}
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <img src={Success} alt="Success" className="w-[500px] h-[650px]" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <Footer />
        </div>
    )
}

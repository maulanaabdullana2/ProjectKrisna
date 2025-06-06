import React, { useState, useRef } from 'react'
import Navbar from '../components/navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import image1 from "@assets/asuma.jpg"
import image2 from "@assets/choji.jpg"
import image3 from "@assets/guy.jpg"
import image4 from "@assets/hinata.jpg"
import image5 from "@assets/itachi.jpg"
import image6 from "@assets/jiraya.jpg"
import image7 from "@assets/kakashi.jpg"
import image8 from "@assets/rocklee.jpg"
import image9 from "@assets/naruto.jpg"
import image10 from "@assets/shikamaru.jpg"
import imagebg1 from "@assets/4.jpg"
import imagebg2 from "@assets/3.jpg"
import imagebg3 from "@assets/5.jpg"
import imageevn1 from "@assets/event1.jpg"
import imageevn2 from "@assets/event2.jpg"
import imageevn3 from "@assets/event3.jpg"
import imageevn4 from "@assets/event4.jpg"
import imageevn5 from "@assets/event5.jpg"
import imageevn6 from "@assets/event6.jpg"
import imageevn7 from "@assets/event7.jpg"
import imageevn8 from "@assets/event8.jpg"
import imageevn9 from "@assets/event9.jpg"
import imageevn10 from "@assets/event10.jpg"

const teachers = [
    { name: "Mr. John", image: image1 },
    { name: "Ms. Alice", image: image2 },
    { name: "Mr. Bob", image: image3 },
    { name: "Ms. Clara", image: image4 },
    { name: "Mr. Daniel", image: image5 },
    { name: "Ms. Emma", image: image6 },
    { name: "Mr. Frank", image: image7 },
    { name: "Ms. Grace", image: image8 },
    { name: "Mr. Henry", image: image9 },
    { name: "Ms. Irene", image: image10 }
];



import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import Footer from '../components/Footer';


const testimonials = [
    { image: imageevn1, text: "This event combines environmental awareness with a love for reading. Children dress up in themed costumes and present their favorite books, learning the importance of caring for the planet while developing early literacy and public speaking skills.", judul: "EARTH & BOOK DAY" },
    { image: imageevn2, text: "This fun field trip gave children an exciting outdoor learning experience. They actively joined various activities and explored the environment firsthand, guided by their teachers. It helped them become more independent, disciplined, and cooperative.", judul: "FUNTASIA FIELDTRIP" },
    { image: imageevn3, text: "The children joyfully celebrate Chinese New Year by wearing bright red costumes and participating in cultural activities like singing and storytelling. This celebration encourages them to be more active, confident, and enthusiastic about learning while also introducing them to cultural diversity.", judul: "CHINESE NEW YEAR" },
    { image: imageevn4, text: "This event offers an opportunity for teachers to connect, collaborate, and share inspiring ideas on teaching young children. Parents appreciate the patience and friendliness of the teachers, who always create a fun and nurturing learning environment.", judul: "TEACHERS GATHERING" },
    { image: imageevn5, text: "In this eco-friendly activity, children are invited to plant trees around the school area. They learn about the importance of taking care of nature, develop a sense of responsibility, and enjoy outdoor learning experiences in a fun and cheerful way.", judul: "PLANTING 1000 TREES" },
    { image: imageevn6, text: "The joyful spirit of Christmas is celebrated with performances by the children dressed in festive costumes. This event helps build their confidence to perform in front of others, promotes discipline, and fosters a sense of sharing and happiness among classmates.", judul: "CHRISMAS DAY" },
    { image: imageevn7, text: "This in-school field trip provides a simulated outdoor experience where children practice real-life activities such as crossing the street and recognizing traffic signs. It teaches them discipline, independence, and safety in a hands-on, engaging way.", judul: "INSCHOOL FIELDTRIP" },
    { image: imageevn8, text: "The children dress up in traditional costumes from various countries, celebrating global diversity in a joyful and engaging way. This activity teaches them about different cultures, encourages tolerance, and fosters a sense of global unity from an early age.", judul: "UNITED NATIONAL DAY" },
    { image: imageevn9, text: "Children take part in fun games and light physical activities that help develop agility, sportsmanship, and teamwork. With a cheerful atmosphere, this event becomes one of the students’ favorites. They not only become more disciplined but also learn to value health through active play.", judul: "SPORTS DAY" },
    { image: imageevn10, text: "The children celebrated Independence Day with fun games and activities in red-and-white outfits. They learned about patriotism, bravery, and unity in an engaging and joyful way.", judul: "INDEPENDENCE DAY" },
];



export default function Home() {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? teachers.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setIndex((prevIndex) =>
            prevIndex === teachers.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = teachers[(index - 1 + teachers.length) % teachers.length];
    const currentImage = teachers[index];
    const nextImage = teachers[(index + 1) % teachers.length];
    return (
        <>
            <Navbar />
            <div className="bg-blue-600 h-[10rem] md:h-full flex items-center justify-center">
                <div className="w-full relative">
                    {/* Swiper */}
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                    >
                        <SwiperSlide>
                            <img
                                src={imagebg1}
                                className="w-full h-full object-cover "
                                alt="Slide 1"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={imagebg2}
                                className="w-full h-full object-cover"
                                alt="Slide 2"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={imagebg3}
                                className="w-full h-full object-cover"
                                alt="Slide 3"
                            />
                        </SwiperSlide>

                        {/* Prev & Next Buttons */}
                        <div className="swiper-button-prev text-white text-2xl absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer" />
                        <div className="swiper-button-next text-white text-2xl absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer" />
                    </Swiper>
                </div>
            </div>



            <div class="py-8">
                <div class="container mx-auto px-6">
                    <p class="font-marathi text-justify md:text-center text-black-700 mb-8 text-lg w-full md:w-[70%] px-4 mx-auto">
                        Yayasan Tunas Anak Mulia (YTAM), an educational institution dedicated to nurturing young minds through our preschool and tutoring services. Since our establishment in 2021, we have been committed to providing quality education and empowering them to reach their full potential.
                    </p>
                    <div class="flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left">
                        <div class="md:w-1/2 mb-8 md:mb-0">
                            <h2 class="text-2xl font-bold mb-4">
                                PROBLEM
                            </h2>
                            <p class="font-marathi text-black-700 w-[90%] text-lg mx-auto md:mx-0 text-justify md:text-left">
                                Busy parents and the impact of the COVID-19 pandemic have led to many children interacting more with gadgets than with their parents in the development in this modern era.
                            </p>
                        </div>
                        <div class="md:w-1/2 md:text-right">
                            <h2 class="text-2xl font-bold mb-4">
                                SOLUTION
                            </h2>
                            <p class="font-marathi text-black-700 text-lg w-[90%] mx-auto md:mx-0 lg:ml-16 text-justify md:text-right">
                                We teach using various methods, become facilitators for students with diverse characters because they have the same opportunities. We provide our students with a strong foundation for lifelong learning and leading academically.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="bg-gray-200 p-8 rounded shadow-lg max-w-[90%] mx-auto">
                <div class="flex flex-col md:flex-row items-center">

                    <div class="md:w-3/4 p-4 order-2 md:order-1">

                        <h1 class="hidden md:block text-3xl font-tiltwarp mb-2 text-left">SPEECH FOUNDER</h1>
                        <h2 class="hidden md:block text-lg font-tiltwarp mb-4 text-left">YAYASAN TUNAS ANAK MULIA</h2>

                        <p class="mb-4 font-marathi text-justify">Dear parents, students, and community members. It is my great pleasure to welcome you to the Yayasan Tunas Anak Mulia. Let me tell about my dedication in early childhood programme.</p>
                        <p class="mb-4 font-marathi text-justify">Because every child is a unique individual with different strengths and weakness, that's why our philosophy of education has been designed to our students.</p>
                        <p class="mb-4 font-marathi text-justify">I am delighted that our students continue to be very happy in a range of their ages. Reflecting on my experiences, I created the critical environment to our students school. We let them to ask as many as they want, we also understanding the concept of who children are, what they are capable or how they learn from the curiosity.</p>
                        <p class="mb-4 font-marathi text-justify">Thus, in this great time I engaged all parents to see and observe how your child learn and growth differently with nurture their talents to bring out their almost potential.</p>
                        <p class="mb-4 font-marathi text-justify">Finally, I believed that learning occurs when children are involved in first hand experiences is the point of child's growth.</p>
                        <p class="mb-4 font-marathi text-justify">Thank you for your trust and support to Yayasan Tunas Anak Mulia. I hope together we can nurture bright future.</p>
                    </div>


                    <div class="md:w-1/4 flex flex-col items-center mt-8 md:mt-0 order-1 md:order-2">

                        <h1 class="block md:hidden text-2xl font-tiltwarp mb-1 text-center">SPEECH FOUNDER</h1>
                        <h2 class="block md:hidden text-sm font-tiltwarp mb-3 text-center">YAYASAN TUNAS ANAK MULIA</h2>

                        <div class="w-[220px] h-[350px] image1 bg-red-700 rounded-[1rem] mb-4"></div>
                        <p class="font-tiltwarp">NOVITA WIJAYA</p>
                        <p class="text-sm font-marathi">Founder Yayasan Tunas Anak Mulia</p>
                    </div>

                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-10 px-4">
                <h1 className="text-2xl md:text-4xl font-tiltwarp mb-6 text-center">MEET OUR TEACHERS</h1>
                <div className="flex flex-wrap justify-center items-center gap-2 md:space-x-4 mb-4 transition-all duration-500">
                    <img
                        alt={teachers[(index - 2 + teachers.length) % teachers.length].name}
                        className="w-20 h-20 md:w-40 md:h-40 rounded-full bg-gray-300 opacity-70 object-cover hidden  lg:block"
                        src={teachers[(index - 2 + teachers.length) % teachers.length].image}
                    />
                    <img
                        alt={teachers[(index - 1 + teachers.length) % teachers.length].name}
                        className="w-20 h-20 md:w-40 md:h-40 rounded-full bg-gray-300 opacity-70 object-cover"
                        src={teachers[(index - 1 + teachers.length) % teachers.length].image}
                    />

                    <div className="flex flex-col items-center">
                        <img
                            alt={teachers[index].name}
                            className="w-32 h-32 md:w-60 md:h-60 rounded-full bg-gray-300 object-cover"
                            src={teachers[index].image}
                        />
                        <p className="mt-2 text-base md:text-lg font-semibold text-center w-full">
                            {teachers[index].name}
                        </p>
                    </div>

                    {/* Gambar setelah */}
                    <img
                        alt={teachers[(index + 1) % teachers.length].name}
                        className="w-20 h-20 md:w-40 md:h-40 rounded-full bg-gray-300 opacity-70 object-cover"
                        src={teachers[(index + 1) % teachers.length].image}
                    />

                    {/* Gambar kanan paling ujung (hanya tampil di md ke atas) */}
                    <img
                        alt={teachers[(index + 2) % teachers.length].name}
                        className="w-20 h-20 md:w-40 md:h-40 rounded-full bg-gray-300 opacity-70 object-cover hidden lg:block"
                        src={teachers[(index + 2) % teachers.length].image}
                    />
                </div>

                <div className="flex space-x-4 mt-4">
                    <button
                        className="w-10 h-10 flex items-center justify-center border-2 border-gray-700 rounded-full text-gray-700"
                        onClick={handlePrev}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button
                        className="w-10 h-10 flex items-center justify-center border-2 border-gray-700 rounded-full text-gray-700"
                        onClick={handleNext}
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>



            <div className="bg-blue-100 flex items-center justify-center mt-14 pt-10 pb-9 overflow-hidden">
                <div className="text-center w-full max-w-7xl md:max-w-full px-2 sm:px-6">
                    <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">NEWS & EVENT</h1>
                    <div className="relative mt-10 overflow-hidden">
                        <div className="auto-scroll gap-2 sm:gap-4 w-max px-1 sm:px-4">
                            {[...testimonials, ...testimonials].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-lg w-56 sm:w-64 md:w-72 h-[300px] sm:h-[340px] px-3 pt-2 pb-4 flex flex-col flex-shrink-0 mx-1"
                                >
                                    <img
                                        src={item.image}
                                        alt={`testimonial-${index}`}
                                        className="w-full h-[120px] sm:h-[140px] object-cover rounded-xl"
                                    />
                                    <h1 className="font-bold text-sm sm:text-base mt-2 mb-1">{item.judul}</h1>
                                    <p className="text-gray-700 text-xs sm:text-sm text-center italic">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </>
    )
}

import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import image1 from "../../assets/asuma.jpg"
import image2 from "../../assets/choji.jpg"
import image3 from "../../assets/guy.jpg"
import image4 from "../../assets/hinata.jpg"
import image5 from "../../assets/itachi.jpg"
import image6 from "../../assets/jiraya.jpg"
import image7 from "../../assets/kakashi.jpg"
import image8 from "../../assets/rocklee.jpg"
import image9 from "../../assets/naruto.jpg"
import image10 from "../../assets/shikamaru.jpg"
import imagebg1 from "../../assets/slider4.jpg"
import imagebg2 from "../../assets/slider1.jpg"
import imagebg3 from "../../assets/slider2.jpg"
import imageevn1 from "../../assets/event1.jpg"
import imageevn2 from "../../assets/news.jpg"
import './home.css'
const teacherImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10
];

import { useRef } from 'react';
// Benar untuk Swiper v11+
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import Footer from '../../components/Footer';


const testimonials = [
    { image: imageevn1, text: "“blablablala bldfagda afadfadaallala lalala la lalal lalaaa lalala lalalalala”" , judul : "contoh1"},
    { image: imageevn2, text: "“testimoni ke dua dari orang tua yang sangat puas”" , judul : "contoh2"},
    { image: imageevn1, text: "“anak saya jadi lebih aktif dan semangat belajar!”" , judul : "contoh3"},
    { image: imageevn2, text: "“guru-gurunya sabar dan menyenangkan!”" , judul : "contoh4"},
    { image: imageevn1, text: "“anak saya jadi lebih disiplin dan ceria”" , judul : "contoh5"},
];


export default function Home() {
    const [index, setIndex] = useState(0);
    const swiperRef = useRef(null);

    const handlePrev = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? teacherImages.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setIndex((prevIndex) =>
            prevIndex === teacherImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = teacherImages[(index - 1 + teacherImages.length) % teacherImages.length];
    const currentImage = teacherImages[index];
    const nextImage = teacherImages[(index + 1) % teacherImages.length];
    return (
        <>
            <Navbar />
            <div className="bg-blue-600 h-[30rem] flex items-center justify-center">
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
                                className="w-full h-[30rem] object-cover rounded-none"
                                alt="Slide 1"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={imagebg2}
                                className="w-full h-[30rem] object-cover rounded-none"
                                alt="Slide 2"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={imagebg3}
                                className="w-full h-[30rem] object-cover rounded-none"
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
                    <p class="font-marathi text-center text-black-700 mb-8 text-lg w-[70%] mx-auto">
                        Yayasan Tunas Anak Mulia (YTAM), a educational institution dedicated to nurturing young minds through our preschool and tutoring services. Since our establishment in 2021, we have been committed to providing quality education and empower them to reach their full potential.
                    </p>

                    <div class="flex flex-col md:flex-row justify-between">
                        <div class="md:w-1/2 mb-8 md:mb-0">
                            <h2 class="text-xl font-bold mb-4">
                                PROBLEM
                            </h2>
                            <p class="font-marathi text-black-700 w-[90%]  text-lg ">
                                Busy parents and the impact of the COVID-19 pandemic have led to many children interacting more with gadgets than with their parents in the development in this modern era.
                            </p>
                        </div>
                        <div class="md:w-1/2 text-right">
                            <h2 class="text-xl font-bold mb-4">
                                SOLUTION
                            </h2>
                            <p class="font-marathi text-black-700 text-lg ">
                                We teach using various methods, become facilitators for students with diverse characters because they have the same opportunities. We provide our students with a strong foundation for lifelong learning and leading academically.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-gray-200 p-8 round shadow-lg max-w-[90%] mx-auto">
                <div class="flex flex-col md:flex-row items-center">
                    <div class="md:w-3/4 p-10">
                        <h1 class="text-4xl font-tiltwarp mb-2">SPEECH FOUNDER</h1>
                        <h2 class="text-lg  font-tiltwarp mb-4">YAYASAN TUNAS ANAK MULIA</h2>
                        <p class="mb-4 font-marathi ">Dear parents, students, and community members. It is my great pleasure to welcome you to the Yayasan Tunas Anak Mulia. Let me tell about my dedication in early childhood programme.</p>
                        <p class="mb-4 font-marathi ">Because every child is a unique individual with different strengths and weakness, that's why our philosophy of education has been designed to our students.</p>
                        <p class="mb-4 font-marathi ">I am delighted that our students continue to be very happy in a range of their ages. Reflecting on my experiences, I created the critical environment to our students school. We let them to ask as many as they want, we also understanding the concept of who children are, what they are capable or how they learn from the curiosity.</p>
                        <p class="mb-4 font-marathi ">Thus, in this great time I engaged all parents to see and observe how your child learn and growth differently with nurture their talents to bring out their almost potential.</p>
                        <p class="mb-4 font-marathi ">Finally, I believed that learning occurs when children are involved in first hand experiences is the point of child's growth.</p>
                        <p class="mb-4 font-marathi ">Thank you for your trust and support to Yayasan Tunas Anak Mulia. I hope together we can nurture bright future</p>
                    </div>
                    <div class="md:w-1/4 flex flex-col items-center mt-8 md:mt-0">
                        <div class="w-[220px] h-[350px] image1 bg-red-700 rounded-[1rem] mb-4"></div>
                        <p class="font-tiltwarp">NOVITA WIJAYA</p>
                        <p class="text-sm font-marathi ">Founder Yayasan Tunas Anak Mulia</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-[50px]">
                <h1 className="text-2xl font-tiltwarp mb-8">Meet Our Teachers</h1>

                <div className="flex justify-center items-center space-x-4 mb-8 transition-all duration-500">
                    <img
                        alt="Prev 2"
                        className="w-40 h-40 rounded-full bg-gray-300 opacity-70 object-cover"
                        src={teacherImages[(index - 2 + teacherImages.length) % teacherImages.length]} // Gambar sebelumnya 2
                    />
                    <img
                        alt="Prev 1"
                        className="w-40 h-40 rounded-full bg-gray-300 opacity-70 object-cover"
                        src={prevImage} // Gambar sebelumnya
                    />
                    <img
                        alt="Current"
                        className="w-60 h-60 rounded-full bg-gray-300 object-cover"
                        src={currentImage} // Gambar saat ini
                    />
                    <img
                        alt="Next 1"
                        className="w-40 h-40 rounded-full bg-gray-300 opacity-70 object-cover"
                        src={nextImage} // Gambar berikutnya
                    />
                    <img
                        alt="Next 2"
                        className="w-40 h-40 rounded-full bg-gray-300 opacity-70 object-cover"
                        src={teacherImages[(index + 2) % teacherImages.length]} // Gambar berikutnya 2
                    />
                </div>


                <div className="flex space-x-4">
                    <button
                        className="w-9 h-9 flex items-center justify-center border-2 border-blue-500 rounded-full text-blue-500"
                        onClick={handlePrev}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button
                        className="w-9 h-9 flex items-center justify-center border-2 border-blue-500 rounded-full text-blue-500"
                        onClick={handleNext}
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>

            <div className="bg-blue-100 flex items-center justify-center mt-10">
                <div className="text-center w-full max-w-6xl">
                    <h1 className="text-3xl font-bold text-blue-900 mt-8">NEWS & EVENT</h1>
                    <p className="italic text-gray-600">Hear From Our Parents</p>

                    <Swiper
                        modules={[Autoplay]}
                        ref={swiperRef}
                        spaceBetween={30}
                        slidesPerView={4}
                        autoplay={{ delay: 4000 }}
                        className="mt-6"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-[2rem] shadow-lg p-2 h-[40vh] overflow-hidden">
                                    <img src={item.image} alt={`testimonial-${index}`} className="w-full h-[20vh] object-cover rounded-[30px]" />
                                    <h1 className='font-bold mt-4 mb-2'>{item.judul}</h1>
                                    <div className="p-2">
                                        <p className="text-gray-700 text-xs text-center italic">{item.text}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Arrow Buttons */}
                    <div className="flex justify-center mt-4 space-x-4">
                        <button
                            onClick={() => swiperRef.current.swiper.slidePrev()}
                            className="w-9 h-9 flex items-center justify-center border-2 border-blue-500 rounded-full text-blue-500"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button
                            onClick={() => swiperRef.current.swiper.slideNext()}
                            className="w-9 h-9 flex items-center justify-center border-2 border-blue-500 rounded-full text-blue-500"
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

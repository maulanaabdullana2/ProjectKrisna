import { useState, useRef } from "react";
import Navbar from '../../components/Navbar'
import "./style.css"
import logo2 from '../../assets/logo2.png';
import Ellipse from '../../assets/Ellipse.png';
import Children from '../../assets/children.png';
import Education from '../../assets/education.png';
import Fasilitas1 from '../../assets/fasilitas1.jpg';
import Fasilitas2 from '../../assets/fasilitas2.jpg';
import Fasilitas3 from '../../assets/fasilitas3.jpg';
import Fasilitas4 from '../../assets/fasilitas4.jpg';
import Fasilitas5 from '../../assets/fasilitas5.jpg';
import Galery1 from '../../assets/galery1.jpg';
import Galery2 from '../../assets/galery2.jpg';
import Galery3 from '../../assets/galery3.jpg';
import Galery4 from '../../assets/galery4.jpg';
import Galery5 from '../../assets/galery5.jpg';
import Galery6 from '../../assets/galery6.jpg';
import Galery7 from '../../assets/galery7.jpg';
import Garis from '../../assets/Garis.png';
import Awan from '../../assets/awan.png';
import Awan2 from '../../assets/awan2.png';
import Footer from '../../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';



const testimonials = [
    {
        img: Fasilitas1,
        text: "“blablablala...”"
    },
    {
        img: Fasilitas2,
        text: "“blablablala...”"
    },
    {
        img: Fasilitas3,
        text: "“blablablala...”"
    },
    {
        img: Fasilitas4,
        text: "“blablablala...”"
    },
    {
        img: Fasilitas5,
        text: "“Tambahan agar loop & next jalan.”"
    }
];


const galleryImages = [Galery1, Galery2, Galery3, Galery4, Galery5, Galery6, Galery7];




export default function Lap() {
    const [swiperInstance, setSwiperInstance] = useState(null);


    return (
        <div>
            <Navbar />
            <div
                className='bg-lap flex flex-wrap justify-center items-start pt-28 p-4 gap-10 bg-cover bg-center relative min-h-screen'
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

                {/* Konten Kiri */}
                <div className="w-full md:w-1/2 relative z-10 flex flex-col items-start p-10 text-white" style={{ marginLeft: "50px" }}>
                    <h1 className="text-4xl md:text-5xl font-bold pb-7" style={{ fontFamily: "'Poetsen One', sans-serif" }}>A HAPPY</h1>
                    <h1 className="text-4xl md:text-5xl font-bold pb-10" style={{ fontFamily: "'Poetsen One', sans-serif" }}>PRE-SCHOOL</h1>
                    <p className="text-lg pb-1">
                        Where every day is an unforgettable
                    </p>
                    <p className="text-lg pb-7">
                        adventure of learning
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold">
                            Join Us
                        </button>
                        <button className="bg-transparent border border-white text-white px-6 py-2 rounded font-semibold hover:bg-white/20">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-[500px] flex justify-end relative z-10  pr-4">
                    <img src={logo2} alt="Logo" style={{ marginTop: "-100px", marginRight: "-50px" }} className="h-40 md:h-60 ml-10 object-contain" />
                </div>
            </div>


            <div className="max-w-4xl px-4 mx-auto ml-80 py-12 mt-20">
                <div className="flex items-center gap-40">
                    <div className="relative group">
                        <img
                            alt="Back card"
                            src="https://storage.googleapis.com/a1aa/image/d8ef3b8c-4a38-4a11-7f34-2897f7117777.jpg"
                            className="absolute top-0 left-0 w-50 h-50 rounded-md object-cover transition-transform duration-500 ease-in-out transform rotate-[-10deg] z-10 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:scale-110 group-hover:z-20"
                        />

                        {/* Card depan */}
                        <img
                            alt="Front card"
                            src="https://storage.googleapis.com/a1aa/image/405ee2e3-92a0-4c62-563a-c7293cd2229e.jpg"
                            className="absolute top-6 left-8 w-50 h-50  rounded-md object-cover transition-transform duration-500 ease-in-out transform rotate-[3deg] z-20 group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:scale-95 group-hover:z-10"
                        />
                        <div className="invisible w-44 h-44 sm:w-52 sm:h-52"></div>
                    </div>

                    <div className="max-w-xl text-left relative">
                        <span className="block w-28 h-1 bg-blue-700 mb-3"></span>
                        <h2 className="text-[#017BBD] font-bold text-4xl mb-3"
                            style={{ fontFamily: "'Poetsen One', sans-serif" }}>
                            ABOUT US
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed" style={{ width: "80%" }}>
                            Little Alley is refresh kindergarten curriculum framework highlights teaching and learning principles that are relevant for developing competences of young children. Kidsroom where learning meets imagination! We believe that every child is a unique learner with unlimited potential waiting to be unlocked. Kidsroom is designed to provide a nurturing and inspiring environment where children can grow academically and personally.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white py-10 px-4 mt-20 md:px-16 text-center">
                <h2 className="text-[#017BBD] font-extrabold  text-4xl mb-10"
                    style={{ fontFamily: "'Poetsen One', sans-serif" }}>
                    VISION AND MISSION
                </h2>

                <div className="grid grid-cols-3  items-start text-left mx-auto">

                    <div className="space-y-4 text-right -mr-12 w-30">
                        <p>
                            Open the chance to every child can learn & each child learns
                            <br />
                            differently, Develop their sense of confidence
                        </p>
                        <p>
                            Plan to nurture children’s holistic development using integrated
                            <br />
                            approach, Facilitate the learning process to extend children’s thinking and learning
                        </p>
                    </div>


                    <div className="flex items-center justify-center" style={{ marginTop: "-65px" }}>
                        <img
                            src={Ellipse}
                            alt="Little Alley Preschool"
                        />

                    </div>


                    <div className="space-y-4 -ml-12">
                        <p>
                            Our goal is clear. Help and create our children build a good,
                            <br />
                            age-appropriate foundation, Build global perspective in children growth
                        </p>
                        <p>
                            Collaborate with families and the community to enhance
                            <br />
                            children’s learning, Observe and assess children’s learning &
                            <br />
                            development Reflect on and enhance professional practice
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative mt-20 mb-20 ">
                {/* Awan Atas */}
                <img src={Awan2} alt="" className="w-full" />

                {/* Konten OUR CLASS */}
                <div className="bg2-lap px-4 py-7" style={{ marginTop: "-60rem" }}>
                    {/* OUR CLASS Title */}
                    <div className="flex justify-center mb-10 mt-10">
                        <div className="bg-white text-[#017BBD] font-extrabold  text-center w-[200px] py-4 rounded-[30px] shadow-md text-4xl"
                            style={{ fontFamily: "'Poetsen One', sans-serif" }}>
                            OUR <br /> CLASS
                        </div>
                    </div>

                    {/* Grid 2x2 */}
                    <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto mt-10 relative">
                        {/* Card 1 */}
                        <div className="text-center z-10 relative transition-transform duration-300 transform hover:scale-110 hover:z-20">
                            <div className="w-[200px] h-[200px] bg-white border-[6px] border-blue-500 rounded-2xl mx-auto mb-4"></div>
                            <p className="text-blue-800 font-bold text-2xl">Preparatory</p>
                            <p className="text-lg text-gray-700">Age: 1.5 - 2 Years</p>
                        </div>

                        {/* Card 2 */}
                        <div className="text-center z-10 relative transition-transform duration-300 transform hover:scale-110 hover:z-20">
                            <div className="w-[200px] h-[200px] bg-white border-[6px] border-blue-500 rounded-2xl mx-auto mb-4"></div>
                            <p className="text-blue-800 font-bold text-2xl">Toddler</p>
                            <p className="text-lg text-gray-700">Age: 2 - 3 Years</p>
                        </div>

                        {/* Card 3 */}
                        <div className="text-center z-10 relative transition-transform duration-300 transform hover:scale-110 hover:z-20">
                            <div className="w-[200px] h-[200px] bg-white border-[6px] border-blue-500 rounded-2xl mx-auto mb-4"></div>
                            <p className="text-blue-800 font-bold text-2xl">Playgroup</p>
                            <p className="text-lg text-gray-700">Age: 3 - 4 Years</p>
                        </div>

                        {/* Card 4 */}
                        <div className="text-center z-10 relative transition-transform duration-300 transform hover:scale-110 hover:z-20">
                            <div className="w-[200px] h-[200px] bg-white border-[6px] border-blue-500 rounded-2xl mx-auto mb-4"></div>
                            <p className="text-blue-800 font-bold text-2xl">Learners & Achievers</p>
                            <p className="text-lg text-gray-700">Age: 4 Years +</p>
                        </div>
                    </div>

                </div>

                {/* Awan Bawah */}
                <img src={Awan} alt="" className="w-full -mt-[68rem]" />
            </div>



            <div className="max-w-7xl mx-auto px-1 py-12 mt-5">
                <h2 className="text-center text-[#017BBD] title-font font-extrabold text-4xl  leading-tight"
                    style={{ fontFamily: "'Poetsen One', sans-serif" }}>
                    WHY
                    <br />
                    <span className="block mt-1">LITTLE ALLEY PRESCHOOL ?</span>
                </h2>
                <div className="mt-10 flex flex-col md:flex-row md:justify-center md:items-center md:space-x-20 space-y-10 md:space-y-0">
                    <div className="flex flex-col items-center max-w-[180px] md:max-w-none order-1 md:order-none">
                        <img
                            src={Children}
                            alt="Young girl with two buns hairstyle holding a phone, standing in front of a colorful pink and purple abstract shape"
                            className="w-[180px] h-[180px] object-contain"
                            width="180"
                            height="180"
                        />
                    </div>
                    <div className="max-w-xl text-center  text-[#0B6CBF] text-sm sm:text-base leading-relaxed order-2 md:order-none">
                        We teach using various methods, become facilitators for students with diverse characters because they have the same opportunities. We provide our students with a strong foundation for lifelong learning and leading academically.
                    </div>
                </div>
                <div className="mt-10 flex flex-col md:flex-row md:justify-center md:items-center md:space-x-20 space-y-10 md:space-y-0">
                    <p className="max-w-xl text-center  text-[#0B6CBF] text-sm sm:text-base leading-relaxed order-2 md:order-none">
                        Our preschool program is designed to lay a strong foundation for children aged 1 to 6 years old. Through a blend of play-based learning, thematic approaches, and hands-on activities, we nurture early literacy, numeracy, social skills, and creativity. Our curriculum integrates language development, mathematics, science, arts, and physical education to provide a well-rounded educational experience.
                    </p>
                    <div className="flex flex-col items-center max-w-[180px] md:max-w-none order-1 md:order-none">
                        <img
                            src={Children}
                            alt="Young girl with two buns hairstyle holding a phone, standing in front of a colorful pink and purple abstract shape"
                            className="w-[180px] h-[180px] object-contain"
                            width="180"
                            height="180"
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-5 mt-24">
                <h2 className="text-center  title-font text-[#017BBD] font-extrabold text-4xl leading-tight mb-5"
                    style={{ fontFamily: "'Poetsen One', sans-serif" }}>
                    OUR CURRICULUM
                </h2>
                <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-20">
                    <div className="flex-shrink-0 w-72 md:w-[320px]">
                        <img alt="Yellow circular curriculum diagram with text and arrows describing integrated approach to learning, motor skills development, language and literacy, numeracy, authentic learning through quality interactions, children as constructors of knowledge, holistic development, and engaging children in purposeful play" className="w-[800px] h-[300px]" src={Education} />
                    </div>
                    <div className="max-w-xl text-left">
                        <h2 className="text-[#0066b3] font-semibold text-lg md:text-xl mb-3 text-center md:text-left">
                            NURTURING EARLY LEARNERS CURRICULUM
                        </h2>
                        <ul className="list-disc list-outside pl-5 text-[#0066b3] text-sm md:text-base mb-6 space-y-2">
                            <li>
                                Published by the MOE (Ministry of Education) 2012
                            </li>
                            <li>
                                NEL was designing and implementing a quality kindergarten curriculum for
                                children aged four to six with six principles, encapsulated in the
                                acronym “iTeach” as the basis for the best practices
                            </li>
                        </ul>
                        <h3 className="text-[#0066b3] font-bold text-base md:text-lg mb-2">
                            iTeach
                        </h3>
                        <ul className="list-disc list-inside text-[#0066b3] text-sm md:text-base space-y-1">
                            <li>
                                i = integrated approach to learning
                            </li>
                            <li>
                                T = Teachers as facilitators of learning
                            </li>
                            <li>
                                e = engaging children in learning through purposeful play
                            </li>
                            <li>
                                a = authentic learning through quality interactions
                            </li>
                            <li>
                                c = children as constructors of knowledge
                            </li>
                            <li>
                                h = holistic development
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="max-w-3xl mx-auto px-4 py-8 mt-24">
                <h2 className="text-center text-[#017BBD] font-extrabold text-4xl mb-6"
                    style={{ fontFamily: "'Poetsen One', sans-serif" }}>
                    OUR FACILITIES
                </h2>

                <div className="grid grid-cols-2 gap-x-4 gap-y-6 justify-items-center mt-14">
                    <img src={Fasilitas1} alt="Facility 1" className="rounded-lg shadow w-72 transition-transform duration-300 transform hover:scale-110 hover:z-20" />
                    <img src={Fasilitas2} alt="Facility 2" className="rounded-lg shadow w-72 transition-transform duration-300 transform hover:scale-110 hover:z-20" />
                    <img src={Fasilitas3} alt="Facility 3" className="rounded-lg shadow w-72 transition-transform duration-300 transform hover:scale-110 hover:z-20" />
                    <img src={Fasilitas4} alt="Facility 4" className="rounded-lg shadow w-72 transition-transform duration-300 transform hover:scale-110 hover:z-20" />
                    <div className="w-72 text-sm leading-tight mb-6 mt-9 text-[#0066b3] ">
                        <p>
                            Yayasan Tunas Anak Mulia is equipped with facilities and resources to enhance the learning experience:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Spacious and Safe Learning</li>
                            <li>Environment Well-Equipped</li>
                            <li>Classrooms Library and Resource</li>
                            <li>Center Playgrounds</li>
                        </ul>
                    </div>

                    <img src={Fasilitas5} alt="Facility 5" className="rounded-lg shadow w-72 transition-transform duration-300 transform hover:scale-110 hover:z-20" />
                </div>
            </div>

            <img src={Garis} className="mt-10 w-full mt-24" alt="Garis horizontal" />

            <div className="bg-white py-10 px-4 md:px-16 text-center">
                <h2 className="text-[#017BBD] font-extrabold  text-4xl mb-10"
                    style={{ fontFamily: "'Poetsen One', sans-serif" }}>
                    GALLERY
                </h2>
                <div className="overflow-hidden mt-14">
                    <div className="flex gap-4 animate-scroll-images">
                        {galleryImages.concat(galleryImages).map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Facility ${index + 1}`}
                                className="rounded-lg shadow object-cover w-64 h-40 flex-shrink-0"
                            />
                        ))}
                    </div>
                </div>

            </div>

            <div className="bg-[#bde0fe] font-sans mt-10">
                <div className="max-w-5xl mx-auto px-4 py-10">
                    <div className="text-center mb-8">
                        <h2 className="text-[#003049] font-extrabold text-4xl ">TESTIMONIAL</h2>
                        <p className="italic text-[#003049] text-sm md:text-base">Hear From Our Parents</p>
                    </div>
                    <Swiper
                        onSwiper={(swiper) => {
                            setSwiperInstance(swiper);
                            console.log('Swiper instance set:', swiper);
                        }}
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        loop={true}
                        slidesPerView={4}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false
                        }}
                        navigation={false}

                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full max-w-[250px] h-[230px] mx-auto bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col">
                                    <img
                                        src={item.img}
                                        alt="Testimonial"
                                        className="w-full h-40 object-cover rounded-t-3xl"
                                    />
                                    <p className="text-[#003049] text-xs md:text-sm p-4 leading-relaxed flex-1">
                                        {item.text}
                                    </p>
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                    <div className="flex justify-center mt-14 space-x-4 mb-3">
                        <button
                            onClick={() => swiperInstance.slidePrev()}
                            className="w-9 h-9 flex items-center justify-center border-2 border-blue-500 rounded-full text-blue-500"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button
                            onClick={() => swiperInstance.slideNext()}
                            className="w-9 h-9 flex items-center justify-center border-2 border-blue-500 rounded-full text-blue-500"
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

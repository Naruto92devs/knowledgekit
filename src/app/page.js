import CourseCard from "@/components/CourseCard"
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import BannerSlider from "@/components/Banner_slider";
import D_slider from "@/components/d_slider";
import Buttons from "@/components/Buttons";
import Subscription from "@/components/Subscription";


const Home = () => {

  const Banners = [
    {
      title: "Learn something new everyday.",
      description: "Become professionals and ready to join the world.",
      btn: "Explore Photography",
      href: "courses",
      img: "../images/banner_bg.jpg",
    },
    {
      title: "Hello World.",
      description: "Become professionals and ready to join the world.",
      btn: "Explore Photography",
      href: "courses",
      img: "../images/banner_bg.jpg",
    },
    {
      title: "Learn something new everyday.",
      description: "Become professionals and ready to join the world.",
      btn: "Explore Photography",
      href: "courses",
      img: "../images/banner_bg.jpg",
    },
    {
      title: "Hello World.",
      description: "Become professionals and ready to join the world.",
      btn: "Explore Photography",
      href: "courses",
      img: "../images/banner_bg.jpg",
    },
    {
      title: "Learn something new everyday.",
      description: "Become professionals and ready to join the world.",
      btn: "Explore Photography",
      href: "courses",
      img: "../images/banner_bg.jpg",
    },
    {
      title: "Hello World.",
      description: "Become professionals and ready to join the world.",
      btn: "Explore Photography",
      href: "courses",
      img: "../images/banner_bg.jpg",
    },
    {
      title: "Learn something new everyday.",
      description: "Become professionals and ready to join the world.",
      btn: "Explore Photography",
      href: "courses",
      img: "../images/banner_bg.jpg",
    },
    {
      title: "Hello World.",
      description: "Become professionals and ready to join the world.",
      btn: "Explore Photography",
      href: "courses",
      img: "../images/banner_bg.jpg",
    },
  ];
  const courses = [
    {
      title: "VUE JAVASCRIPT COURSE",
      description: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
      price: "$24.92",
      originalPrice: "$32.90",
      rating: 4.5,
      reviews: "1.2K",
      img: "https://i.ytimg.com/vi/cS8lqPqXSlM/maxresdefault.jpg",
    },
    {
      title: "UI DESIGN FOR BEGINNERS",
      description: "Learn how to make web application with Vue.js Framework.",
      price: "$24.92",
      originalPrice: "$32.90",
      rating: 4.5,
      reviews: "1.2K",
      img: "https://i.ytimg.com/vi/cS8lqPqXSlM/maxresdefault.jpg",
    },
    {
      title: "MOBILE DEV REACT NATIVE",
      description: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
      price: "$24.92",
      originalPrice: "$32.90",
      rating: 4.5,
      reviews: "1.2K",
      img: "https://i.ytimg.com/vi/cS8lqPqXSlM/maxresdefault.jpg",
    },
    {
      title: "WEBSITE DEV ZERO TO HERO",
      description: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
      price: "$24.92",
      originalPrice: "$32.90",
      rating: 4.5,
      reviews: "1.2K",
      img: "https://i.ytimg.com/vi/cS8lqPqXSlM/maxresdefault.jpg",
    },
  ];

  return (
    <div className="home flex flex-col justify-between w-full min-h-[100dvh]">
      <Navbar />
      <div className="container mx-auto p-12">
          <BannerSlider Banners={Banners} />
      </div>
      <div className="p-12">
      <Buttons />
      </div>

      <div className="container mx-auto p-12">
        <h1 className="text-2xl font-bold mb-4">More from Kitani Studio</h1>
        <p className="mb-6">We know the best things for You. Top picks for You.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Trending Course</h2>
        <p className="mb-6">We know the best things for You. Top picks for You.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
      <div className="container mx-auto p-12">
        <D_slider />
      </div>
      <div className="p-12">
      <Subscription />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

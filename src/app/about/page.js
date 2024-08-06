import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";


const About = () => {


return (
<div className="home flex flex-col justify-between w-full min-h-[100dvh]">
    <Navbar />

    <div className="p-12">
    <h1>About Page</h1>
    </div>
    <Footer />
</div>
);
};

export default About;

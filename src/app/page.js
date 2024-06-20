import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <h1 className="text-sm hover:underline">
        Home Page
      </h1>
      <Footer/>
    </div>
  );
}

export default Home;

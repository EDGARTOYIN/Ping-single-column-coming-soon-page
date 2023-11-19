import ilustration from "../assets/illustration-dashboard.png";
import Footer from "./Footer";
import Logo from "./Logo";
import Form from "./Form";

function MainContent() {
  return (
    <main>
      <div className="max-w-[37rem] mx-auto font-default-ff">
        <div className="flex flex-col items-center ">
          <Logo />
          <h1 className="mt-12 text-3xl text-center md:text-[2.5rem] font-light text-gray-custom tracking-normal">
            We are lauching
            <span className="font-bold text-very-dark-blue">soon!</span>
          </h1>
          <h2 className="mt-4">Subscribe and get notified</h2>
        </div>
        <Form />
        <div className="mt-20">
          <img src={ilustration} />
        </div>
        <div className="flex flex-col items-center gap-8 mt-[7rem]">
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default MainContent;

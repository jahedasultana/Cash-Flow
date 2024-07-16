import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero bg-[#004385] text-white min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="md:text-3xl text-xl font-bold">
            প্রথমবার রেজিষ্ট্রেশন করলেই পেয়ে যাচ্ছেন ৪০ টাকা।
            এখনি রেজিষ্ট্রেশন করেনিন।
          </h1>

          <div className=" space-x-6 mt-6">
          <Link to='/register'><button className="btn text-white bg-[#2b83db] font-bold border-none">রেজিষ্ট্রেশন করুন</button></Link>
          <Link to='/login'><button className="btn bg-[#2b83db] text-white font-bold border-none">লগ-ইন করুন</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

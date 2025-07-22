import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}// Express server placeholder
export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-800 via-purple-900 to-indigo-800 text-white shadow-lg py-4 flex justify-between items-center px-8">
      <div className="flex items-center gap-3">
        <span className="text-3xl font-bold tracking-tight futuristic-glow">MDM FRAME</span>
      </div>
      <nav>
        <a href="/" className="mx-2 hover:text-indigo-300 transition">الرئيسية</a>
        <a href="/services" className="mx-2 hover:text-indigo-300 transition">الخدمات</a>
        <a href="/login" className="mx-2 hover:text-indigo-300 transition">دخول</a>
      </nav>
    </header>
  );
}export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-br from-black via-indigo-900 to-purple-900 text-white">
      <h1 className="text-5xl mb-6 font-extrabold futuristic-glow">
        أهلاً بك في MDM FRAME
      </h1>
      <p className="text-xl mb-8">
        منصة المستقبل للعثور على أفضل الخدمات الرقمية بسهولة، بسرعة وبأسلوب عصري
      </p>
      <a href="/services" className="px-8 py-4 bg-indigo-600 rounded-full text-lg hover:bg-purple-600 transition shadow-xl">
        اكتشف الخدمات
      </a>
    </section>
  );
}export default function ServiceCard({ title, desc, price, image }) {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-xl p-6 hover:scale-105 transition flex flex-col items-center">
      <img src={image} alt={title} className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-indigo-700" />
      <h2 className="text-xl font-semibold mb-2 futuristic-glow">{title}</h2>
      <p className="text-gray-300 mb-4">{desc}</p>
      <span className="px-4 py-2 bg-indigo-700 rounded-full text-white font-bold">ابتداءً من ${price}</span>
    </div>
  );
}import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
}import Header from "../components/Header";

export default function Login() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-800 via-black to-purple-800 text-white">
        <h2 className="text-3xl mb-6 font-bold futuristic-glow">تسجيل الدخول</h2>
        <form className="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-4">
          <input type="text" placeholder="اسم المستخدم" className="px-4 py-2 rounded-lg bg-gray-800 text-white"/>
          <input type="password" placeholder="كلمة المرور" className="px-4 py-2 rounded-lg bg-gray-800 text-white"/>
          <button className="bg-indigo-700 hover:bg-purple-700 px-6 py-2 rounded-full font-bold text-lg transition">دخول</button>
        </form>
      </div>
    </>
  );
}import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "تصميم شعار",
    desc: "شعار احترافي بأسلوب عصري وفيوتشر.",
    price: 5,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&h=256"
  },
  {
    title: "برمجة موقع",
    desc: "تطوير مواقع ويب متجاوبة بأحدث التقنيات.",
    price: 30,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=256&h=256"
  },
  {
    title: "مونتاج فيديو",
    desc: "مونتاج احترافي لفيديوهاتك مع مؤثرات مستقبلية.",
    price: 15,
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&h=256"
  },
];

export default function Services() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-gray-900 to-indigo-900 min-h-screen py-16 px-8">
        <h1 className="text-4xl text-white mb-10 font-bold futuristic-glow text-center">الخدمات</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </main>
    </>
  );
}

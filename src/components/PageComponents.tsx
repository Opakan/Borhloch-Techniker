import { motion } from 'motion/react';
import { Home, Shield, Truck, Building2, LayoutGrid, Info, MessageSquare, Phone, Clock } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12",
      isScrolled ? "glass-dark border-b border-white/5 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-electric-blue rounded-lg flex items-center justify-center font-bold text-xl">B</div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">BTC <span className="text-silver">LOGISTICS</span></span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-silver">
          {['Home', 'Services', 'Properties', 'About', 'Contact'].map((item, i) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="hover:text-electric-blue transition-colors cursor-pointer"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-electric-blue px-6 py-2 rounded-full font-semibold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-electric-blue/20"
        >
          GET QUOTE
        </motion.button>
      </div>
    </nav>
  );
}

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 max-w-7xl mx-auto pt-20">
      <div className="max-w-3xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-electric-blue font-mono text-sm tracking-widest uppercase mb-4 block">Premium Logistics & Real Estate</span>
          <h1 className="text-5xl md:text-7xl font-bold leading-none mb-6">
            Connecting Real Estate, <br />
            <span className="text-silver">Logistics & Modern</span> <br />
            Business Solutions
          </h1>
          <p className="text-silver/80 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
            Building Smarter Property & Logistics Experiences Across Nigeria. 
            Innovative solutions for the modern enterprise.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-electric-blue text-white px-8 py-4 rounded-lg font-bold tracking-wide shadow-xl shadow-electric-blue/30"
            >
              EXPLORE PROPERTIES
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass border-white/30 px-8 py-4 rounded-lg font-bold tracking-wide hover:bg-white/10 transition-colors"
            >
              CONTACT US
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-silver/40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll to explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-electric-blue/50 to-transparent" />
      </motion.div>
    </section>
  );
}

export function Services() {
  const services = [
    {
      title: "Real Estate Services",
      desc: "Modern buildings and luxury properties in Nigeria's prime locations.",
      icon: <Building2 className="w-8 h-8" />,
      color: "bg-blue-500/20"
    },
    {
      title: "Logistics Solutions",
      desc: "Comprehensive supply chain management and efficient haulage routes.",
      icon: <Truck className="w-8 h-8" />,
      color: "bg-emerald-500/20"
    },
    {
      title: "Property Management",
      desc: "Digital smart-building interfaces for seamless property operations.",
      icon: <Shield className="w-8 h-8" />,
      color: "bg-amber-500/20"
    },
    {
      title: "Business Operations",
      desc: "Modern enterprise dashboard visuals for scaling your business.",
      icon: <LayoutGrid className="w-8 h-8" />,
      color: "bg-purple-500/20"
    }
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Multi-Divisional <br /> <span className="text-silver">Solutions</span></h2>
          <div className="w-20 h-1 bg-electric-blue" />
        </div>
        <p className="text-silver/60 max-w-md text-sm uppercase tracking-widest leading-loose">
          Indigenous Nigerian enterprise providing innovative property and logistics solutions since inception.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="glass p-8 rounded-2xl group hover:border-electric-blue/50 transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/5 blur-3xl -mr-16 -mt-16" />
            <div className={cn("inline-flex p-3 rounded-xl mb-6 group-hover:scale-110 transition-transform relative z-10", s.color)}>
              {s.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 relative z-10">{s.title}</h3>
            <p className="text-silver/70 text-sm leading-relaxed mb-6 relative z-10">
              {s.desc}
            </p>
            <button className="text-xs font-bold tracking-widest text-electric-blue flex items-center gap-2 group-hover:translate-x-2 transition-transform relative z-10">
              EXPLORE MORE <Info className="w-3 h-3" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Properties() {
  const properties = [
    {
      title: "The Silver Residences",
      location: "Ikoyi, Lagos",
      price: "₦ 450,000,000",
      img: "/src/assets/images/luxury_mansion_nigeria_1779204542997.png"
    },
    {
      title: "Azure Business Hub",
      location: "Victoria Island",
      price: "From ₦ 120,000/sqm",
      img: "https://picsum.photos/800/600?seed=biz"
    },
    {
      title: "Empire Logistics Park",
      location: "Lekki Free Zone",
      price: "Inquire for Rates",
      img: "/src/assets/images/logistics_fleet_modern_1779204560509.png"
    }
  ];

  return (
    <section id="properties" className="py-32 bg-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Premium Showcase</h2>
          <p className="text-silver/60 max-w-2xl mx-auto uppercase tracking-widest text-xs">
            A curated selection of luxury homes and commercial spaces across Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {properties.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -20 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={p.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={p.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-2xl border-white/5">
                <span className="text-electric-blue text-[10px] font-bold tracking-widest mb-1 block uppercase">{p.location}</span>
                <h3 className="text-xl font-bold mb-1">{p.title}</h3>
                <p className="text-silver/80 text-sm font-medium">{p.price}</p>
                
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                   <button className="bg-white text-navy px-5 py-2 rounded-lg font-bold text-[10px] uppercase tracking-widest">View Details</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  const stats = [
    { label: "Years of Experience", value: "12+" },
    { label: "Clients Served", value: "500+" },
    { label: "Projects Completed", value: "1.2k+" }
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="flex-1 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-electric-blue/10 blur-[100px] rounded-full" />
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-4 rounded-3xl relative z-10"
          >
            <img 
              src="/src/assets/images/corporate_business_meeting_1779204577681.png" 
              className="rounded-2xl w-full" 
              alt="Corporate team"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Reliability, Innovation & Excellence.</h2>
          <p className="text-silver/80 text-lg mb-10 leading-relaxed">
            Borhloch Techniker Company Ltd. (BTC Logistics) is a leading indigenous Nigerian enterprise dedicated to providing modern property and logistics solutions. We bridge the gap between traditional industry practices and futuristic innovation.
          </p>
          
          <div className="grid grid-cols-3 gap-8 ring-1 ring-white/10 p-8 rounded-2xl glass-dark">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-electric-blue mb-2">{s.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-silver/60 font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Location() {
  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="glass p-12 rounded-3xl flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <Building2 className="w-64 h-64" />
            </div>
          <div className="flex-1 relative z-10">
            <h2 className="text-4xl font-bold mb-8">Visit Our Office</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-electric-blue/10 rounded-lg text-electric-blue">
                   <Home className="w-6 h-6" />
                </div>
                <div>
                   <h3 className="font-bold mb-1">Lagos Headquarters</h3>
                   <p className="text-silver/70 text-sm leading-relaxed">
                     Suite 8, Choice Silver Plaza,<br />
                     19 Ereke Avenue, Berger,<br />
                     Lagos, Nigeria
                   </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-electric-blue/10 rounded-lg text-electric-blue">
                   <Clock className="w-6 h-6" />
                </div>
                <div>
                   <h3 className="font-bold mb-1">Business Hours</h3>
                   <p className="text-silver/70 text-sm flex items-center gap-2 font-mono">
                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                     Open · Closes 5pm
                   </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full h-[400px] rounded-2xl glass relative overflow-hidden group">
             <img 
                src="/src/assets/images/lagos_skyline_dusk_1779204526456.png" 
                className="w-full h-full object-cover opacity-60 transition-transform duration-[10s] group-hover:scale-125" 
                alt="Map area"
                referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                    <div className="absolute inset-0 bg-electric-blue blur-2xl animate-pulse opacity-50" />
                    <div className="w-6 h-6 bg-electric-blue rounded-full ring-4 ring-white/20 animate-bounce relative z-10" />
                </div>
             </div>
             <div className="absolute bottom-4 left-4 glass px-4 py-2 rounded-lg text-[10px] font-bold tracking-widest uppercase">
                Interactive Map Visualization
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl font-bold mb-6">Let's Build the <br /> <span className="text-silver italic">Future Together</span></h2>
          <p className="text-silver/70 mb-12 max-w-md">
            Ready to secure your next property or optimize your logistics? Our team of experts is standing by to assist you.
          </p>
          
          <div className="flex flex-col gap-6">
            <a href="tel:08104718027" className="flex items-center gap-4 group">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-electric-blue transition-colors">
                    <Phone className="w-6 h-6" />
                </div>
                <div>
                    <div className="text-xs text-silver/40 uppercase tracking-widest font-bold">Call Us Directly</div>
                    <div className="text-xl font-bold">0810 471 8027</div>
                </div>
            </a>
            
            <button className="bg-[#25D366] text-white p-4 rounded-2xl flex items-center justify-center gap-3 font-bold shadow-lg shadow-green-500/20 hover:scale-105 transition-transform w-[280px]">
                <MessageSquare className="w-6 h-6" /> CHAT ON WHATSAPP
            </button>
          </div>
        </div>
        
        <div className="glass-dark p-10 rounded-[40px] border border-white/10">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="text-[10px] uppercase tracking-widest text-silver/60 font-bold block mb-2 px-1">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                    <label className="text-[10px] uppercase tracking-widest text-silver/60 font-bold block mb-2 px-1">Phone Number</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none transition-all" placeholder="+234..." />
                </div>
            </div>
            
            <div>
                <label className="text-[10px] uppercase tracking-widest text-silver/60 font-bold block mb-2 px-1">Service Inquiry</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none transition-all appearance-none">
                    <option className="bg-navy">Select a service</option>
                    <option className="bg-navy">Real Estate</option>
                    <option className="bg-navy">Logistics</option>
                    <option className="bg-navy">Property Management</option>
                    <option className="bg-navy">Consultation</option>
                </select>
            </div>
            
            <div>
                <label className="text-[10px] uppercase tracking-widest text-silver/60 font-bold block mb-2 px-1">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none transition-all" placeholder="Tell us about your project..."></textarea>
            </div>
            
            <button className="w-full bg-electric-blue py-5 rounded-2xl font-bold tracking-[0.2em] text-sm uppercase shadow-2xl shadow-electric-blue/30 hover:bg-blue-600 transition-all">
                Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-20 px-6 md:px-12 border-t border-white/5 bg-navy/50 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-electric-blue rounded flex items-center justify-center font-bold">B</div>
                <span className="font-bold text-lg tracking-tight">BTC <span className="text-silver">LOGISTICS</span></span>
            </div>
            <p className="text-silver/60 text-sm max-w-sm leading-loose">
                Borhloch Techniker Company Ltd. is an indigenous Nigerian multi-divisional enterprise providing modern property and logistics solutions across Africa.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-xs text-silver/60 font-medium">
                <li><a href="#" className="hover:text-electric-blue transition-colors uppercase gap-2 flex items-center tracking-widest">Home</a></li>
                <li><a href="#services" className="hover:text-electric-blue transition-colors uppercase gap-2 flex items-center tracking-widest">Services</a></li>
                <li><a href="#properties" className="hover:text-electric-blue transition-colors uppercase gap-2 flex items-center tracking-widest">Properties</a></li>
                <li><a href="#contact" className="hover:text-electric-blue transition-colors uppercase gap-2 flex items-center tracking-widest">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-xs text-silver/60 font-medium font-mono">
                <li>0810 471 8027</li>
                <li>Lagos, Nigeria</li>
                <li>Open 8am - 5pm</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-[10px] text-silver/40 font-bold uppercase tracking-[0.3em]">
           <div>© 2024 Borhloch Techniker Company Ltd. All Rights Reserved.</div>
           <div className="flex gap-8">
              <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
              <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
           </div>
        </div>
      </div>
    </footer>
  );
}

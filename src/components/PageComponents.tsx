import { motion, useScroll, useTransform } from 'motion/react';
import { Shield, Truck, Building2, LayoutGrid, Info, MessageSquare, Phone, Clock, ArrowRight, ExternalLink, Home } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useState, useEffect, useRef } from 'react';

import corporateTeamImg from '../assets/images/corporate_business_meeting_1779204577681.png';
import lagosSkylineImg from '../assets/images/lagos_skyline_dusk_1779204526456.png';
import logisticsFleetImg from '../assets/images/logistics_fleet_modern_1779204560509.png';
import luxuryMansionImg from '../assets/images/luxury_mansion_nigeria_1779204542997.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-700 py-6 px-6 md:px-12",
      isScrolled ? "bg-black/60 backdrop-blur-2xl py-4 border-b border-white/5" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan to-accent-pink rounded-xl flex items-center justify-center font-black text-2xl text-black shadow-[0_0_30px_rgba(0,240,255,0.3)]">B</div>
          <div className="flex flex-col">
            <span className="font-accent font-extrabold text-2xl tracking-tighter leading-none">BTC <span className="text-accent-cyan">LOGISTICS</span></span>
            <span className="text-[8px] uppercase tracking-[0.4em] font-medium text-silver/60">Borhloch Techniker</span>
          </div>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-silver">
          {['Home', 'Services', 'Properties', 'About', 'Contact'].map((item, i) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="hover:text-accent-cyan transition-all cursor-pointer relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-cyan transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative group overflow-hidden px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest"
        >
          <div className="absolute inset-0 bg-white group-hover:bg-accent-cyan transition-colors" />
          <span className="relative z-10 text-black">Get Inquiry</span>
        </motion.button>
      </div>
    </nav>
  );
}

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} id="home" className="relative min-h-[110vh] flex flex-col justify-center items-center px-6 md:px-12 pt-20 overflow-hidden">
      <motion.div style={{ y: y1, opacity }} className="max-w-5xl text-center z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8">
            <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse shadow-[0_0_10px_#00F0FF]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-silver">Precision Logistics & Real Estate</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-accent font-extrabold leading-[0.85] mb-8 select-none">
            BUILDING THE <br />
            <span className="text-gradient">FUTURE</span> OF <br />
            COMMERCE.
          </h1>
          
          <p className="text-silver/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
             Borhloch Techniker Company Ltd. (BTC Logistics) bridges the gap between infrastructure and efficiency across Nigeria.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-black font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:bg-accent-cyan transition-colors"
            >
              Explore Assets
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/10 font-bold text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-white/10 transition-colors"
            >
              Partner with us
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-between px-12 items-end opacity-20 pointer-events-none">
          <div className="font-accent text-8xl leading-none">01</div>
          <div className="flex flex-col items-end gap-2">
              <div className="w-40 h-px bg-white" />
              <div className="text-[10px] uppercase tracking-widest font-black">Scroll Down</div>
          </div>
      </div>
    </section>
  );
}

export function Services() {
  const settings = [
    {
      title: "Real Estate",
      desc: "Ultra-modern properties designed for the digital age.",
      icon: <Building2 className="w-10 h-10" />,
      color: "from-accent-cyan/20 to-transparent"
    },
    {
      title: "Logistics",
      desc: "High-speed supply chain systems built on reliability.",
      icon: <Truck className="w-10 h-10" />,
      color: "from-accent-pink/20 to-transparent"
    },
    {
      title: "Digital Assets",
      desc: "Smart infrastructure and property management interfaces.",
      icon: <Shield className="w-10 h-10" />,
      color: "from-accent-gold/20 to-transparent"
    },
    {
      title: "Operations",
      desc: "Enterprise-grade business solutions for high growth.",
      icon: <LayoutGrid className="w-10 h-10" />,
      color: "from-white/10 to-transparent"
    }
  ];

  return (
    <section id="services" className="py-40 px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/5 blur-[150px] -z-10" />
      
      <div className="flex flex-col mb-24">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-accent-cyan font-bold text-xs uppercase tracking-[0.4em] mb-4"
        >
          Our Operations
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-accent font-extrabold"
        >
          MULTI-DIVISIONAL <br /> <span className="text-silver/30 italic">EXCELLENCE.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {settings.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={cn(
                "group p-10 h-[450px] flex flex-col justify-between border border-white/5 transition-all duration-500",
                "bg-gradient-to-b hover:bg-white/5 hover:border-white/20"
            )}
          >
            <div className="flex flex-col gap-8">
                <div className="text-silver/40 group-hover:text-white transition-colors">
                    {s.icon}
                </div>
                <div>
                    <h3 className="text-3xl font-accent font-bold mb-4">{s.title}</h3>
                    <p className="text-silver/50 leading-relaxed font-light line-clamp-3">
                        {s.desc}
                    </p>
                </div>
            </div>
            
            <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-accent-cyan cursor-pointer"
            >
                Learn More <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Properties() {
  const assets = [
    {
      title: "The Silver Residences",
      tag: "Residential",
      price: "₦ 450M",
      img: luxuryMansionImg
    },
    {
      title: "Azure Business Hub",
      tag: "Commercial",
      price: "Inquire",
      img: "https://picsum.photos/800/1000?seed=biz1"
    },
    {
      title: "Empire Logistics Park",
      tag: "Logistics",
      price: "Premium",
      img: logisticsFleetImg
    }
  ];

  return (
    <section id="properties" className="py-40 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-accent font-extrabold mb-6">PREMIUM <br /> PROPERTIES.</h2>
          </div>
          <p className="text-silver/40 max-w-sm text-xs font-bold uppercase tracking-[0.2em] leading-loose">
            A curated portfolio of ultra-luxury assets and high-efficiency commercial hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {assets.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative h-[600px] overflow-hidden cursor-pointer bg-white/5"
            >
              <img 
                src={p.img} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
                alt={p.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[8px] font-black uppercase tracking-widest text-white">{p.tag}</span>
                    <ExternalLink className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                </div>
                
                <div>
                   <h3 className="text-3xl font-accent font-bold mb-2 group-hover:text-accent-cyan transition-colors">{p.title}</h3>
                   <div className="flex items-center gap-4">
                        <div className="w-12 h-[1px] bg-white/20" />
                        <span className="text-silver/60 text-xs font-bold font-mono tracking-tighter">{p.price}</span>
                   </div>
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
    { label: "Elite Experience", value: "12Y" },
    { label: "Assets Managed", value: "500+" },
    { label: "Network nodes", value: "1.2K" }
  ];

  return (
    <section id="about" className="py-40 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div className="relative">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-accent-pink/5 blur-[150px]" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[40px] grayscale hover:grayscale-0 transition-all duration-1000 border border-white/5">
                <img 
                    src={corporateTeamImg} 
                    className="w-full h-full object-cover" 
                    alt="Corporate intensity"
                    referrerPolicy="no-referrer"
                />
            </div>
            
            <div className="absolute -bottom-10 -right-10 glass p-10 rounded-3xl max-w-xs border-accent-cyan/10">
                <p className="text-xs font-bold leading-relaxed text-silver italic">
                    "Reliability isn't a goal; it's our baseline. We build for the next century of Nigerian commerce."
                </p>
                <div className="mt-4 flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-cyan rounded-full" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">BTC Board</span>
                </div>
            </div>
          </motion.div>
        </div>
        
        <div className="flex flex-col gap-12">
          <div>
              <span className="text-accent-pink font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Legacy & Vision</span>
              <h2 className="text-6xl md:text-8xl font-accent font-extrabold mb-8 italic leading-none">THE BTC <br /><span className="text-gradient">STANDARD.</span></h2>
              <p className="text-silver/50 text-xl font-light leading-relaxed">
                Borhloch Techniker Company Ltd. is more than a logistics firm. We are architects of efficiency, leveraging modern technology to redefine property management and supply chain logistics in Nigeria.
              </p>
          </div>
          
          <div className="grid grid-cols-3 gap-12">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-4xl font-accent font-black mb-2 text-white">{s.value}</span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-accent-cyan font-bold">{s.label}</span>
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
    <section className="py-40 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-8">
                <h2 className="text-5xl md:text-7xl font-accent font-extrabold leading-none">FIND US IN <br /> <span className="text-accent-gold">LAGOS.</span></h2>
                <div className="space-y-12">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 text-silver/40">
                            <Clock className="w-4 h-4" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Business hours</span>
                        </div>
                        <p className="text-2xl font-display font-bold">Open Daily until 5:00 PM</p>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 text-silver/40">
                            <Home className="w-4 h-4" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Headquarters</span>
                        </div>
                        <p className="text-2xl font-display font-medium text-silver leading-relaxed">
                            Suite 8, Choice Silver Plaza,<br />
                            19 Ereke Avenue, Berger, Lagos.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="relative group perspective-1000">
                <motion.div 
                    initial={{ rotateY: 20 }}
                    whileInView={{ rotateY: 0 }}
                    className="aspect-square bg-white/5 rounded-[40px] overflow-hidden border border-white/10 relative"
                >
                    <img 
                        src={lagosSkylineImg} 
                        className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-[20s]" 
                        alt="Lagos location"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 to-accent-pink/20 mix-blend-overlay" />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="w-16 h-16 rounded-full bg-accent-cyan/20 flex items-center justify-center border border-accent-cyan/50 backdrop-blur-xl"
                        >
                            <div className="w-4 h-4 bg-accent-cyan rounded-full shadow-[0_0_20px_#00F0FF]" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-40 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="glass p-12 md:p-24 rounded-[60px] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-accent-cyan/5 to-transparent pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
          <div>
            <h2 className="text-5xl md:text-7xl font-accent font-extrabold mb-8 leading-none">CONNECT <br /> TO THE <br /> <span className="text-gradient">NETWORK.</span></h2>
            <p className="text-silver/60 text-lg mb-12 font-light leading-relaxed">
                Start your journey into premium real estate and logistics. Our specialists yield unparalleled results for our partners.
            </p>
            
            <div className="space-y-10">
                <a href="tel:08104718027" className="flex items-center gap-6 group">
                   <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                       <Phone className="w-8 h-8" />
                   </div>
                   <div className="flex flex-col">
                       <span className="text-[10px] font-black uppercase tracking-widest text-silver/40">Voice Hotline</span>
                       <span className="text-2xl font-accent font-bold">0810 471 8027</span>
                   </div>
                </a>
                
                <button className="h-20 bg-[#25D366] text-black px-10 rounded-3xl flex items-center gap-4 font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform w-auto">
                    <MessageSquare className="w-6 h-6 border-black" /> Encrypted WhatsApp
                </button>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" className="bg-white/5 border-b border-white/10 p-6 focus:border-accent-cyan outline-none transition-all placeholder:text-silver/20 font-medium" placeholder="Identity" />
                <input type="tel" className="bg-white/5 border-b border-white/10 p-6 focus:border-accent-cyan outline-none transition-all placeholder:text-silver/20 font-medium" placeholder="Communication Node (Phone)" />
            </div>
            <select className="bg-white/5 border-b border-white/10 p-6 focus:border-accent-cyan outline-none transition-all text-silver/40">
                <option className="bg-black">Operational Sector</option>
                <option className="bg-black">Premium Real Estate</option>
                <option className="bg-black">Enterprise Logistics</option>
                <option className="bg-black">Digital Asset Management</option>
            </select>
            <textarea rows={4} className="bg-white/5 border-b border-white/10 p-6 focus:border-accent-cyan outline-none transition-all placeholder:text-silver/20 font-medium" placeholder="Detailed Inquiry..."></textarea>
            
            <button className="mt-8 h-20 bg-accent-cyan text-black rounded-3xl font-black uppercase tracking-[0.3em] text-xs shadow-[0_0_50px_rgba(0,240,255,0.2)] hover:bg-white transition-colors">
                Transmit Signal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-24 px-6 md:px-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
            <div className="flex flex-col gap-6 max-w-sm">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-black text-black">B</div>
                    <span className="font-accent font-extrabold text-xl tracking-tighter">BTC <span className="text-silver/40">LOGISTICS</span></span>
                </div>
                <p className="text-silver/40 text-xs font-bold leading-loose uppercase tracking-widest">
                    Pioneering the industrial and residential future of Nigeria through specialized tech-driven solutions.
                </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
                <div className="flex flex-col gap-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Modules</span>
                    <ul className="space-y-4 text-[10px] font-bold text-silver/40 uppercase tracking-widest">
                        <li><a href="#" className="hover:text-accent-cyan transition-colors">Home</a></li>
                        <li><a href="#services" className="hover:text-accent-cyan transition-colors">Services</a></li>
                        <li><a href="#properties" className="hover:text-accent-cyan transition-colors">Portfolio</a></li>
                        <li><a href="#contact" className="hover:text-accent-cyan transition-colors">Terminal</a></li>
                    </ul>
                </div>
                
                <div className="flex flex-col gap-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Contact</span>
                    <ul className="space-y-4 text-[10px] font-bold text-silver/40 uppercase tracking-widest">
                        <li>Lagos, Nigeria</li>
                        <li>0810 471 8027</li>
                        <li>Status: Online</li>
                    </ul>
                </div>
                
                <div className="hidden md:flex flex-col gap-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Social</span>
                    <ul className="space-y-4 text-[10px] font-bold text-silver/40 uppercase tracking-widest">
                        <li className="hover:text-accent-cyan cursor-pointer transition-colors">Instagram</li>
                        <li className="hover:text-accent-cyan cursor-pointer transition-colors">LinkedIn</li>
                        <li className="hover:text-accent-cyan cursor-pointer transition-colors">X / Twitter</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
           <div className="text-[8px] font-black uppercase tracking-[0.4em] text-silver/20">© 2024 Borhloch Techniker Company Ltd. All Rights Reserved.</div>
           <div className="flex gap-10 text-[8px] font-black uppercase tracking-[0.4em] text-silver/20 group">
              <span className="hover:text-white transition-colors cursor-pointer">Security Protocol</span>
              <span className="hover:text-white transition-colors cursor-pointer">Encryption Standards</span>
           </div>
        </div>
      </div>
    </footer>
  );
}

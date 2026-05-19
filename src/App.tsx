import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, Star, Leaf, Droplets, Sparkles, Instagram, Twitter, Facebook } from 'lucide-react';

const FLAVORS = [
  {
    name: "Citrus & Yuzu",
    notes: "Bright, zesty, with a hint of floral sweetness.",
    price: "$32",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Wild Berry & Sage",
    notes: "Deep fruit flavors balanced with earthy botanicals.",
    price: "$34",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Cucumber & Mint",
    notes: "Cool, crisp, and undeniably refreshing.",
    price: "$32",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop"
  }
];

const REVIEWS = [
  {
    text: "The most sophisticated sparkling beverage I've ever tasted. It's my new evening ritual.",
    author: "Sarah L."
  },
  {
    text: "Zero artificial sugars but it still tastes incredibly complex and satisfying. Absolutely brilliant.",
    author: "James M."
  },
  {
    text: "Edriane Allyson has completely elevated how I host dinners. My guests are obsessed.",
    author: "Elena R."
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-gold selection:text-brand-blue overflow-x-hidden">
      
      {/* 1. Sticky Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-brand-cream border-b border-brand-blue/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="hidden md:flex gap-6 text-sm font-bold uppercase tracking-widest opacity-60">
            <a href="#shop" className="hover:text-brand-orange transition-colors hover:opacity-100">Collections</a>
            <a href="#story" className="hover:text-brand-orange transition-colors hover:opacity-100">Process</a>
            <a href="#story" className="hover:text-brand-orange transition-colors hover:opacity-100">Stories</a>
          </div>
          <a href="#" className="font-serif text-2xl font-bold tracking-tight italic absolute left-1/2 -translate-x-1/2">
            Edriane Allyson
          </a>
          <div className="flex gap-6 items-center ml-auto">
            <div className="text-sm font-bold uppercase tracking-tighter cursor-pointer hidden md:block hover:text-brand-orange transition-colors">
              Cart (0)
            </div>
            <button className="md:hidden p-2 hover:bg-brand-blue/5 transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-brand-orange rounded-full"></span>
            </button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex px-6 py-2 bg-[#F27D26] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:shadow-lg transition-all"
            >
              Shop Now
            </motion.button>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-8 text-center lg:text-left z-10"
          >
            <h1 className="font-serif text-5xl md:text-[84px] leading-none font-bold mb-6 tracking-tighter">
              Taste the<br/>
              <span className="italic text-brand-gold">Refined</span><br/>
              Refreshment.
            </h1>
            <p className="max-w-md text-lg opacity-80 mb-8 mx-auto lg:mx-0 leading-relaxed font-medium">
              Zero artificial sugar. Premium botanical ingredients. Crafted specifically for the modern palate.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start pt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-brand-blue text-white font-bold uppercase tracking-widest rounded-sm flex items-center justify-center gap-2"
              >
                Shop the Collection <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <div className="flex flex-col items-center sm:items-start text-sm">
                <div className="flex text-brand-gold mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-[10px] uppercase font-bold opacity-50 tracking-widest">10,000+ Happy Drinkers</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 relative w-full max-w-lg lg:max-w-none"
          >
            <div className="aspect-[4/5] rounded-t-full overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1000&auto=format&fit=crop" 
                alt="Refreshing Edriane Allyson Drink" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent"></div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-gold/20 blur-[100px] -z-10 rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* 3. Social Proof Banner */}
      <section className="h-24 md:h-16 border-y border-brand-blue/10 bg-brand-cream overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center opacity-30 grayscale flex-wrap gap-8">
          <span className="font-serif font-bold text-lg md:text-xl">VOGUE</span>
          <span className="font-bold text-lg md:text-xl tracking-tighter uppercase">Forbes</span>
          <span className="font-serif italic text-lg md:text-xl">GQ</span>
          <span className="font-bold text-lg md:text-xl tracking-widest uppercase">Wallpaper*</span>
          <span className="font-serif font-bold text-lg md:text-xl">ELLE</span>
        </div>
      </section>

      {/* 4. Bento Grid: Why Edriane Allyson */}
      <section id="story" className="py-24 px-6 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
               <div className="flex items-center gap-2 mb-4">
                 <div className="w-10 h-[1px] bg-brand-gold"></div>
                 <span className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em]">Est. 2024</span>
               </div>
               <h2 className="font-serif text-4xl md:text-[64px] leading-none font-bold tracking-tighter">Why Edriane Allyson?</h2>
            </div>
            <p className="max-w-sm text-sm opacity-80 leading-relaxed font-medium">We reimagined what a refreshing beverage should be—leaving behind the artificial for something purely natural and complex.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-brand-blue/10 auto-rows-[300px]">
            {/* Bento item 1 */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 bg-[#E8E8E8] p-10 flex flex-col justify-between border-b md:border-b-0 lg:border-r border-brand-blue/10 group overflow-hidden relative"
            >
              <div className="absolute right-0 top-0 w-[60%] h-full opacity-40 lg:opacity-100 transition-transform duration-700 group-hover:scale-105">
                <img src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover origin-right mix-blend-multiply [mask-image:linear-gradient(to_right,transparent,black)]" alt="Botanicals" />
              </div>
              <div className="relative z-10 max-w-sm flex flex-col h-full justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-40 italic">Ingredients</span>
                </div>
                <div>
                  <h3 className="font-serif text-[40px] leading-[1.1] font-bold mb-4">Premium<br/>Botanicals.</h3>
                  <p className="text-sm font-medium leading-relaxed opacity-80">Sourced from the finest global farmers to ensure an unparalleled depth of flavor.</p>
                </div>
              </div>
            </motion.div>

            {/* Bento item 2 */}
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
              className="bg-brand-blue text-brand-cream p-10 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] opacity-80 italic">Philosophy</span>
              </div>
              <div>
                <h3 className="font-serif text-3xl md:text-[40px] leading-none font-bold mb-4">Zero Sugar,<br/>Pure Soul.</h3>
                <p className="text-sm font-medium leading-relaxed opacity-60">No artificial sweeteners. No stevia aftertaste. Just pure, clean refreshment.</p>
              </div>
            </motion.div>
          </div>
          
          <div className="border border-t-0 border-brand-blue/10 bg-[#FAFAFA] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest opacity-40 italic mb-2 block">The Process</span>
              <h3 className="font-serif text-3xl font-bold mb-2 tracking-tighter">Crafted for the Modern Palate</h3>
              <p className="text-sm opacity-80 font-medium">Whether mixed in a cocktail or enjoyed chilled on its own, our beverages offer a sophisticated profile meant to be savored.</p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-brand-blue/20 text-xs font-bold uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-colors"
            >
              Read Our Story
            </motion.button>
          </div>
        </div>
      </section>

      {/* 5. Flavor Showcase */}
      <section id="shop" className="py-24 bg-white px-6 border-t border-brand-blue/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col justify-between mb-16 gap-6">
             <span className="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">Featured Flavors</span>
             <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
              <div>
                <h2 className="font-serif text-4xl md:text-[56px] leading-[0.9] text-brand-blue font-bold tracking-tighter mb-4">The Collection</h2>
                <p className="text-sm font-medium opacity-80 max-w-md">Discover our core line of masterfully blended sparkling beverages.</p>
              </div>
              <button className="text-xs font-bold uppercase tracking-widest hover:text-brand-orange transition-colors flex items-center gap-2 pb-1 border-b border-brand-blue hover:border-brand-orange">
                View All Flavors <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-0 border border-brand-blue/10">
            {FLAVORS.map((flavor, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`flex-1 group cursor-pointer flex flex-col justify-between p-8 ${idx !== FLAVORS.length - 1 ? 'border-b md:border-b-0 md:border-r border-brand-blue/10' : ''}`}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-full border border-brand-blue/10 flex items-center justify-center font-serif text-lg italic bg-white">0{idx + 1}</div>
                  <div className="text-[10px] uppercase font-bold text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity">+ Add to Cart</div>
                </div>
                <div className="relative aspect-square mb-8 overflow-hidden bg-brand-cream border border-brand-blue/5">
                  <img 
                    src={flavor.image} 
                    alt={flavor.name}
                    className="object-cover w-full h-full mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-end">
                  <div className="pr-4">
                    <h3 className="font-bold text-lg mb-1 tracking-tight">{flavor.name}</h3>
                    <p className="text-xs font-medium opacity-60">{flavor.notes}</p>
                  </div>
                  <span className="font-bold">{flavor.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 px-6 md:py-32 bg-brand-cream border-t border-brand-blue/10">
        <div className="max-w-4xl mx-auto p-10 md:p-16 border border-dashed border-brand-blue/20 rounded-xl relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-cream px-4 text-xs font-bold uppercase tracking-widest opacity-40">
            Praise
          </div>
          <div className="relative overflow-hidden flex items-center justify-center text-center">
             <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <p className="italic font-serif text-xl md:text-3xl leading-relaxed mb-8 font-bold tracking-tighter">
                  "{REVIEWS[0].text}"
                </p>
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">
                  — {REVIEWS[0].author}
                </p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA & Newsletter */}
      <section className="py-24 px-6 bg-brand-blue text-brand-cream border-b border-brand-cream/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-5xl md:text-[84px] leading-none tracking-tighter font-bold mb-6">Elevate Your<br/><span className="italic text-brand-gold text-4xl md:text-[72px]">Drink Game.</span></h2>
            <p className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] mb-2">Join the inner circle</p>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-10">
              Get 15% off your first order, plus early access to limited edition seasonal releases.
            </p>
            
            <form className="flex w-full max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="ENTER EMAIL" 
                className="bg-transparent border-b border-brand-cream/20 px-4 py-3 text-xs w-full focus:outline-none focus:border-brand-gold font-bold uppercase tracking-widest placeholder:opacity-40"
                required
              />
              <button 
                type="submit"
                className="px-8 py-3 border border-brand-cream/20 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-cream hover:text-brand-blue transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-brand-blue pt-16 pb-8 text-brand-cream/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-brand-cream/10 pb-16">
            <div className="md:col-span-2">
              <a href="#" className="font-serif text-2xl font-bold tracking-tighter text-brand-cream mb-6 block">
                Edriane Allyson
              </a>
              <p className="max-w-sm mb-6 text-sm font-medium leading-relaxed opacity-80">Pouring refinement into every glass. Redefining the modern drinking experience without compromise.</p>
              <div className="flex gap-6 opacity-40">
                <a href="#" className="hover:opacity-100 transition-opacity"><Instagram className="w-4 h-4"/></a>
                <a href="#" className="hover:opacity-100 transition-opacity"><Twitter className="w-4 h-4"/></a>
                <a href="#" className="hover:opacity-100 transition-opacity"><Facebook className="w-4 h-4"/></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-6">Shop</h4>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest opacity-60">
                <li><a href="#" className="hover:text-brand-cream transition-colors">All Flavors</a></li>
                <li><a href="#" className="hover:text-brand-cream transition-colors">Variety Pack</a></li>
                <li><a href="#" className="hover:text-brand-cream transition-colors">Subscriptions</a></li>
                <li><a href="#" className="hover:text-brand-cream transition-colors">Gift Cards</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-6">Company</h4>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest opacity-60">
                <li><a href="#" className="hover:text-brand-cream transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-brand-cream transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-brand-cream transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-brand-cream transition-colors">Wholesale</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-widest opacity-40">
            <p>&copy; {new Date().getFullYear()} Edriane Allyson. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

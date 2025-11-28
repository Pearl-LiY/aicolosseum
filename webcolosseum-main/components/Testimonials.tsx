import React from 'react';

const testimonials = [
  { text: "Tested multiple AI coding platforms and I have to say @Colosseum_ai has surpassed them all. Massive applause!", author: "Ast JXS", handle: "@AstJXS" },
  { text: "@Colosseum_ai is the most beautiful code editor I've ever used. And it works as well as it looks.", author: "Miracleio", handle: "@Miracleio" },
  { text: "I am impressed with @Colosseum_ai. Only is it quick, it's stylish! My new daily driver.", author: "0xKerryu", handle: "@0xKerryu" },
  { text: "Colosseum has already reached 2.0, with a brand new look and big splash. Gorgeous design.", author: "Elliot", handle: "@Elliot" },
  { text: "Writing code has never been easier! Colosseum helps me generate efficient code on the fly.", author: "Gary", handle: "@Gary" },
  { text: "Colosseum is so freaking amazing that I'm starting to worry my job's gonna vanish into thin air.", author: "IndieMike", handle: "@IndieMike" },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="text-center mb-16 px-4">
        <h2 className="text-5xl font-bold mb-4">Loved by Quants</h2>
        <p className="text-blue-400">Colosseum is popular among developers worldwide.</p>
      </div>

      <div className="relative w-full">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>

        {/* Marquee Container */}
        <div className="flex w-max animate-marquee gap-6">
          {/* Double the list for seamless loop */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="w-[400px] bg-[#0F0F11] border border-white/10 rounded-xl p-8 flex-shrink-0 hover:border-white/30 transition-colors">
              <p className="text-gray-300 leading-relaxed mb-6 h-24 overflow-hidden text-ellipsis">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10"></div>
                <div>
                  <div className="font-semibold text-white">{t.author}</div>
                  <div className="text-xs text-gray-500">{t.handle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React from 'react';

const team = [
  {
    name: "Pearl Bear",
    role: "Chief Architect",
    desc: "Expert in distributed systems and high-performance computing. Leads the core infrastructure team with a focus on stability and strength.",
    img: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=400&h=400&fit=crop&q=80"
  },
  {
    name: "Pixel the Cat",
    role: "Head of Design",
    desc: "Obsessed with pixel-perfect UI and intuitive user experiences. Ensuring Colosseum looks as good as it codes with laser focus.",
    img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop&q=80"
  },
  {
    name: "Data the Owl",
    role: "AI Research Lead",
    desc: "Stays up all night optimizing neural networks. Specializes in context-aware code generation models and wisdom extraction.",
    img: "https://images.unsplash.com/photo-1516233758813-a38d024919c5?w=400&h=400&fit=crop&q=80"
  },
  {
    name: "Rust the Fox",
    role: "Core Systems Engineer",
    desc: "Advocate for memory safety, speed, and clever algorithms. Rewriting the entire stack in Rust for maximum efficiency.",
    img: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&h=400&fit=crop&q=80"
  }
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4 text-white">Meet the Team</h2>
          <p className="text-blue-400">The minds building the future of AI-native development.</p>
        </div>

        {/* Team List - Single Column */}
        <div className="max-w-3xl mx-auto space-y-8">
            {team.map((member, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center md:items-start gap-8 group bg-[#0F0F11] border border-white/5 hover:border-trae-green/30 p-8 rounded-2xl transition-all duration-300 hover:bg-white/[0.02]">
                    {/* Left Image - Professional Portrait Style */}
                    <div className="w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-lg group-hover:shadow-[0_0_20px_rgba(54,240,151,0.1)] transition-shadow">
                        <img 
                            src={member.img} 
                            alt={member.name} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                        />
                    </div>
                    
                    {/* Right Content */}
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left pt-2">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-trae-green transition-colors">{member.name}</h3>
                        <span className="text-xs font-bold font-mono text-black uppercase tracking-widest mb-4 bg-trae-green px-2 py-1 rounded">{member.role}</span>
                        <p className="text-gray-400 text-base leading-relaxed max-w-lg">
                            {member.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
import React from 'react';
import { Lock, ShieldCheck, History } from 'lucide-react';

const PrivacySection: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Privacy and Security</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            TRAE prioritize protecting users' privacy and data security, adhering to the principle of "local-first" and "minimal data collection".
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#0F0F11] border border-white/10 p-8 rounded-lg flex flex-col justify-between h-80 hover:bg-[#141416] transition-colors">
            <div>
                <h3 className="text-xl font-bold mb-4 text-white">Data Privacy Protection</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                Codebase files are stored locally. For indexing, files may be temporarily uploaded for embedding. After processing, all plaintext is deleted. You can use Privacy Mode.
                </p>
            </div>
            <div className="mt-8">
                <History className="text-trae-green" size={24}/>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0F0F11] border border-white/10 p-8 rounded-lg flex flex-col justify-between h-80 hover:bg-[#141416] transition-colors">
            <div>
                <h3 className="text-xl font-bold mb-4 text-white">Secure Data Access</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                Strict access control and encrypted transmission are enforced to prevent unauthorized access and reduce exposure to security risks.
                </p>
            </div>
            <div className="mt-8">
                <Lock className="text-trae-green" size={24}/>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0F0F11] border border-white/10 p-8 rounded-lg flex flex-col justify-between h-80 hover:bg-[#141416] transition-colors">
             <div>
                <h3 className="text-xl font-bold mb-4 text-white">Regional Deployment</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                User data and infrastructure are deployed based on account location, stored in the United States, Singapore, and Malaysia, with isolation in place.
                </p>
            </div>
            <div className="mt-8">
                <ShieldCheck className="text-trae-green" size={24}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
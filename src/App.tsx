import React from 'react';
import logo from 'figma:asset/19114907a831d93c7621eb538ee3c314967d586b.png';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1 — Hero / Definition */}
      <section className="min-h-screen flex flex-col justify-center items-center px-8 py-20">
        <div className="max-w-6xl mx-auto w-full text-center">
          <img src={logo} alt="Simi Motion" className="h-96 md:h-[450px] lg:h-[550px] mx-auto mb-[-75px] object-cover object-[center_top]" />
          
          <p className="text-3xl text-gray-600 max-w-4xl leading-relaxed mx-auto">
            Real-time motion capture, and expert application integrated into one system
          </p>
        </div>
        
        {/* Visual Placeholder */}
        <div className="max-w-7xl mx-auto mt-32 px-8 w-full">
          <div className="w-full aspect-[16/9] overflow-hidden rounded-3xl">
            <video
              className="h-full w-full object-cover"
              src="/Baseballingame2.mp4"
              style={{ borderRadius: '24px' }}
              loop
              autoPlay
              muted
              controls
              playsInline
            />
          </div>
        </div>
      </section>

      {/* New Section — Who Are We */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mb-20">
            The mind behind Simi Motion brings deep expertise in biomechanics, motion capture technology, 
            and real-time system deployment.
          </p>
          
          {/* Team Member 1 */}
          <div className="flex flex-col md:flex-row gap-8 mb-16 items-start">
            <img src="/TJ.jpg" alt="Team member" className="w-48 h-48 object-cover flex-shrink-0 rounded-lg" />
            <div className="flex-1">
              <h3 className="text-2xl mb-2 text-gray-900">TJ Galenti</h3>
              <p className="text-lg text-gray-600 mb-4">President</p>
              <p className="text-base text-gray-700 leading-relaxed">
                TJ Galenti is the founder of Sequence Biomechanics Performance Lab. He is a data scientist, Certified Strength and Conditioning Specialist, and baseball performance coach, with a background as a former NCAA Division I baseball player. Galenti's work focuses on biomechanics, markerless motion capture, and performance analytics to improve athlete efficiency, durability, and output. He holds a Master's degree in Data Science and is currently pursuing a PhD in Biomedical Engineering, applying engineering and analytical methods to modern athlete development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — The Problem */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl mb-16 tracking-tight text-gray-900">
            The biomechanics workflow is broken
          </h2>
          
          <ul className="space-y-6 text-xl text-gray-700">
            <li className="flex items-start">
              <span className="mr-4 text-gray-400">—</span>
              <span>Motion capture data requires post-processing</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-gray-400">—</span>
              <span>Data is returned late</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-gray-400">—</span>
              <span>Results come through third parties</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-gray-400">—</span>
              <span>Accuracy can't be verified</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-gray-400">—</span>
              <span>Decisions can't be made in real time</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-gray-400">—</span>
              <span>Injury prevention is missed</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-gray-400">—</span>
              <span>Most organizations lack biomechanics and software expertise</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-gray-400">—</span>
              <span>Those with real-time systems lack expert support for live application</span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-gray-400">—</span>
              <span>Building real-time capabilities requires expertise most organizations lack</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 3 — Why It Breaks */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl mb-12 tracking-tight text-gray-900">
            Motion capture requires operational expertise
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mb-16">
            Motion capture is a niche embedded within biomechanics. It's a specialized skill that requires software configuration, domain expertise, and operational infrastructure.
            Most organizations don't have the people or systems to operate it in real time.
          </p>
          
        </div>
      </section>

      {/* Section 4 — The Solution */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl mb-12 tracking-tight text-gray-900">
            Fixing the biomechanics workflow
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mb-24">
            We integrate motion-capture hardware, biomechanics software, and real-time expert application 
            into one operational system.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-2xl mb-4 text-gray-900">
                Integrated motion-capture system
              </h3>
            </div>
            
            <div>
              <h3 className="text-2xl mb-4 text-gray-900">
                Unified software interface
              </h3>
            </div>
            
            <div>
              <h3 className="text-2xl mb-4 text-gray-900">
                Expert application of biomechanics and software
              </h3>
            </div>
          </div>
          
          <div className="mt-24">
            <div className="w-full aspect-video overflow-hidden rounded-3xl">
              <video
                className="h-full w-full object-cover"
                src="/Dashboard.mp4"
                style={{ borderRadius: '24px' }}
                autoPlay
                muted
                loop
                controls
                playsInline
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — How It Works */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl mb-20 tracking-tight text-gray-900">
            Custom workflow
          </h2>
          
          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <span className="text-4xl text-gray-300 font-light">01</span>
              <p className="text-xl text-gray-700 pt-2">
                Motion data is captured during activity
              </p>
            </div>
            
            <div className="flex items-start gap-6">
              <span className="text-4xl text-gray-300 font-light">02</span>
              <p className="text-xl text-gray-700 pt-2">
                Data is processed and visualized live
              </p>
            </div>
            
            <div className="flex items-start gap-6">
              <span className="text-4xl text-gray-300 font-light">03</span>
              <p className="text-xl text-gray-700 pt-2">
                Experts assist interpretation in real time
              </p>
            </div>
            
            <div className="flex items-start gap-6">
              <span className="text-4xl text-gray-300 font-light">04</span>
              <p className="text-xl text-gray-700 pt-2">
                Staff makes decisions in real time
              </p>
            </div>
          </div>
          
          {/* Visual Placeholder */}
          <div className="mt-24">
            <div className="w-full aspect-video overflow-hidden rounded-3xl">
              <video
                key="/socceringame.mp4"
                className="h-full w-full object-cover"
                src="/socceringame.mp4"
                style={{ borderRadius: '24px' }}
                autoPlay
                muted
                loop
                controls
                playsInline
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Differentiators */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl mb-12 tracking-tight text-gray-900">
            What differntiates us?
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mb-16">
            We combine live capture, unified software, and on-site expertise so teams can act the moment motion happens.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-3">
              <h3 className="text-2xl text-gray-900">Live capture pipeline</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Hardware and data flow tuned for real-time sessions without waiting on post-processing.
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-2xl text-gray-900">Unified control</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                One interface to configure, monitor, and visualize across stadiums, training rooms, or labs.
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-2xl text-gray-900">Embedded experts</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Specialists interpret data on-site and translate it into immediate decisions for staff and athletes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Proof of Concept */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch mb-24">
            {/* Left Column — Main Metrics */}
            <div className="flex flex-col h-full space-y-12">
              <h2 className="text-5xl tracking-tight text-gray-900 mb-4">
                Proof of concept
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-end gap-4 text-3xl font-light leading-none">
                  <span className="text-gray-500">0</span>
                  <span className="text-blue-500">→</span>
                  <span className="text-gray-900 font-semibold">20+</span>
                </div>
                <p className="text-3xl text-gray-900 font-light leading-tight">
                  MLB players in the last year
                </p>
                <div className="w-24 h-px bg-gray-200"></div>
                <div className="space-y-3">
                  <p className="text-3xl text-gray-700 font-light leading-tight">
                    Including All Stars, Gold Glovers, and future Hall of Famers.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column — Endorsements */}
            <div className="flex flex-col h-full gap-8">
              <div className="flex items-center gap-3">
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">Seen in</p>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
              
              <div className="space-y-6 text-3xl text-gray-900 font-light leading-snug mt-auto">
                <p>10+ MLB stadiums</p>
                <p>the Olympics</p>
                <p>the Masters</p>
              </div>
            </div>
          </div>
          
          {/* Visual Placeholder */}
          <div className="w-full aspect-video overflow-hidden rounded-3xl">
            <video
              className="h-full w-full object-cover"
              src="/Baseball.mp4"
              style={{ borderRadius: '24px' }}
              autoPlay
              muted
              loop
              controls
              playsInline
            />
          </div>
        </div>
      </section>

      {/* Section 8 — Real-World Deployment */}
      <section className="py-32 px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl mb-20 tracking-tight">
            In stadium system usage
          </h2>
          
          <div className="space-y-12">
            {/* Placeholder 1 */}
            <div>
              <div className="w-full aspect-video overflow-hidden rounded-3xl mb-4">
                <video
                  key="/soccer.mp4"
                  className="h-full w-full object-cover"
                  src="/soccer.mp4"
                  style={{ borderRadius: '24px' }}
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                />
              </div>
            </div>
            
            {/* Placeholder 2 */}
            <div>
              <div className="w-full aspect-video overflow-hidden rounded-3xl mb-4">
                <video
                  className="h-full w-full object-cover"
                  src="/basketballingame.mp4"
                  style={{ borderRadius: '24px' }}
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                />
              </div>
            </div>
            
            {/* Placeholder 3 */}
            <div>
              <div className="w-full aspect-video overflow-hidden rounded-3xl mb-4">
                <img
                  className="h-full w-full object-cover"
                  src="/Ingamehockey.jpg"
                  alt="Real-time processing"
                  style={{ borderRadius: '24px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 — Target Market */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Image placeholders row */}
          <div className="grid grid-cols-6 gap-4 mb-20">
            <div className="h-32 bg-white flex items-center justify-center">
              <img src="/MLB.jpg" alt="MLB" className="h-full w-full object-contain" />
            </div>
            <div className="h-32 bg-white flex items-center justify-center">
              <img src="/NBA.jpg" alt="NBA" className="h-full w-full object-contain" />
            </div>
            <div className="h-32 bg-white flex items-center justify-center">
              <img src="/NFL.jpg" alt="NFL" className="h-full w-full object-contain" />
            </div>
            <div className="h-32 bg-white flex items-center justify-center">
              <img src="/NHL.jpg" alt="NHL" className="h-full w-full object-contain" />
            </div>
            <div className="h-32 bg-white flex items-center justify-center">
              <img src="/PGA.jpg" alt="PGA" className="h-full w-full object-contain" />
            </div>
            <div className="h-32 bg-white flex items-center justify-center">
              <img src="/Fifa2.png" alt="FIFA" className="h-full w-full object-contain" />
            </div>
          </div>
          
          <h2 className="text-5xl mb-16 tracking-tight text-gray-900">
            Market
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-16">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold tracking-wide text-blue-800">TAM</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
              <div className="text-5xl md:text-6xl font-light text-gray-900">$70B</div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Global spend across organized sports on performance tracking technology,
                biomechanics systems, analytics software, video and motion capture
                infrastructure, and applied sports science services across soccer,
                basketball, baseball, football, hockey, and golf.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold tracking-wide text-emerald-800">SAM</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
              <div className="text-5xl md:text-6xl font-light text-gray-900">$20B</div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Professional teams, collegiate programs, and travel or youth organizations
                in the core six sports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-32"></div>
    </div>
  );
}
import React from 'react';
import { subsystemsData } from './data/subsystemsData';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEO from './components/SEO';

const Subsystems = () => {
  return (
    <>
      <SEO 
        title="Subsystems | Aerove" 
        description="Discover the specialized technical subsystems powering Team AeRoVe's autonomous aerial vehicles."
      />
      <Navbar activePage="subsystems" />
      
      <section style={{ padding: '120px 20px 80px', background: '#0b0f1a', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', color: '#f1f5f9', textAlign: 'center', marginBottom: '20px' }}>
            Our Subsystems
          </h1>
          <p style={{ color: 'rgba(241,245,249,0.7)', textAlign: 'center', marginBottom: '60px', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 60px' }}>
            The specialized engineering teams powering our autonomous systems.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {subsystemsData.map((subsystem) => (
              <div key={subsystem.id} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span>{subsystem.icon}</span> {subsystem.name}
                </h3>
                <h4 style={{ color: '#3b82f6', marginBottom: '15px', fontSize: '1.1rem' }}>{subsystem.tagline}</h4>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '20px', lineHeight: '1.6' }}>{subsystem.description}</p>
                
                <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p><strong style={{ color: '#fff' }}>What We Do:</strong> {subsystem.whatWeDo}</p>
                  <p><strong style={{ color: '#fff' }}>Technologies:</strong> {subsystem.technologies}</p>
                  <p><strong style={{ color: '#fff' }}>Highlights:</strong> {subsystem.highlights}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Subsystems;
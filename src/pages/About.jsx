import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  return (
    <main className="container" style={{ padding: '4rem 2rem' }}>
      <h2>About Metabond</h2>
      <div style={{ maxWidth: 900, margin: '1.5rem auto' }}>
        <p>
          With over two decades of excellence in adhesive manufacturing, Metabond has established 
          itself as a trusted partner for industries demanding the highest quality bonding solutions.
        </p>
        <p>
          Our state-of-the-art research facilities and commitment to innovation enable us to 
          develop advanced adhesive technologies that meet the evolving needs of modern industry.
        </p>

        {/* Single button: Back to Home */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <button className="btn btn-primary" onClick={() => navigate('/')}>Back to Home</button>
        </div>
      </div>
    </main>
  );
}

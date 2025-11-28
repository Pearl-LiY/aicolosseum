import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // Configuration
    const spacing = 14; // Tighter spacing for "pixel" look
    let time = 0;

    const draw = () => {
      // Clear with fade for trails? No, crisp clear for this specific tech look.
      // But we need to clear transparently if we want it to overlay. 
      // User said "Particle background + Text layered", so bg color is in CSS.
      ctx.clearRect(0, 0, w, h);

      time += 0.015;

      const cols = Math.ceil(w / spacing);
      const rows = Math.ceil(h / spacing);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;

          // Normalized coordinates (0 to 1)
          const nx = x / w;
          const ny = y / h;

          // Shape Logic: Create a "Cloud/Silhouette" shape.
          // We combine a few radial distance checks to define "density"
          
          // Main Body/Cloud shape (skewed to center-right)
          const dx = nx - 0.55;
          const dy = ny - 0.5;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Add some noise/waviness to the shape boundaries
          const shapeNoise = Math.sin(nx * 4 + time * 0.5) * Math.cos(ny * 4 + time * 0.2) * 0.2;
          
          // Density factor: 1 = core, 0 = edge
          let density = Math.max(0, 1 - (dist * 1.5) + shapeNoise);

          // Second "Head" shape or upper cluster
          const hdx = nx - 0.65;
          const hdy = ny - 0.3;
          const hDist = Math.sqrt(hdx * hdx + hdy * hdy);
          density = Math.max(density, 1 - (hDist * 3));

          // If density is too low, skip drawing pixel
          if (density < 0.1) continue;

          // Wave Animation
          // Vertical offset based on sine waves
          const wave = Math.sin(nx * 10 + time) * Math.cos(ny * 10 + time * 0.5) * 20 * density;
          
          // Active Ripple for Color
          // A moving band of energy
          const ripple = Math.sin(nx * 5 - ny * 5 + time * 2);

          // Size of pixel
          const size = 1.5 + (density * 1.5) + (ripple > 0.8 ? 1 : 0);
          
          // Draw Position
          const drawY = y + wave;

          // Color Logic
          // Base: Dark Grey/White
          // Highlight: Trae Green
          ctx.fillStyle = 'rgba(100, 100, 100, 0.3)'; // Base dull grey

          // Dynamic highlighting
          if (density > 0.3) {
             // Random tech sparkles or wave-based highlights
             if (ripple > 0.9) {
                ctx.fillStyle = '#36F097'; // Trae Green
             } else if (ripple > 0.5) {
                ctx.fillStyle = 'rgba(54, 240, 151, 0.4)'; // Faint Green
             } else {
                // Gradient white based on density
                const alpha = density * 0.5;
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
             }
          }

          ctx.fillRect(x, drawY, size, size);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 mix-blend-screen"
    />
  );
};

export default ParticleBackground;
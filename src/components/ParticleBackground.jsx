import { useEffect, useRef } from "react";
import "./ParticleBackground.css";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let pulse = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    function drawHex(x, y, size, opacity) {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 180) * (60 * i - 30);
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();

      // Glow fill
      ctx.fillStyle = `rgba(0, 212, 255, ${opacity * 0.04})`;
      ctx.fill();

      // Border
      ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
      ctx.lineWidth = 0.6;
      ctx.stroke();
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pulse += 0.015;

      const SIZE = 28;
      const W = SIZE * 2;
      const H = Math.sqrt(3) * SIZE;
      const cols = Math.ceil(canvas.width / (W * 0.75)) + 2;
      const rows = Math.ceil(canvas.height / H) + 2;
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const x = col * W * 0.75;
          const y = row * H + (col % 2 === 0 ? 0 : H / 2);
          const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
          const maxDist = Math.sqrt(cx ** 2 + cy ** 2);

          // Pulse wave from center
          const wave = Math.sin(pulse - dist * 0.012) * 0.5 + 0.5;
          // Distance fade
          const fade = 1 - dist / maxDist;
          const opacity = 0.04 + wave * fade * 0.18;

          // Some hexes get purple tint
          const purpleChance = Math.sin(col * 0.7 + row * 0.5 + pulse * 0.3);
          if (purpleChance > 0.7) {
            ctx.strokeStyle = `rgba(168, 85, 247, ${opacity * 0.8})`;
            ctx.fillStyle = `rgba(168, 85, 247, ${opacity * 0.03})`;
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
              const angle = (Math.PI / 180) * (60 * i - 30);
              const px = x + SIZE * Math.cos(angle);
              const py = y + SIZE * Math.sin(angle);
              i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.fill();
            ctx.lineWidth = 0.6;
            ctx.stroke();
          } else {
            drawHex(x, y, SIZE, opacity);
          }

          // Bright node dots at hex corners (sparse)
          if (Math.random() > 0.998) {
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 255, 136, 0.8)`;
            ctx.fill();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
}

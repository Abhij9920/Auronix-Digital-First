import { useEffect, useRef } from 'react';

export function useCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check for hover state on interactive elements
      const target = e.target as HTMLElement;
      const isHoverable = target.closest('a, button, input, textarea, select, .interactive');
      
      if (isHoverable) {
        ringRef.current?.classList.add('scale-150', 'bg-gold/10', 'border-transparent');
      } else {
        ringRef.current?.classList.remove('scale-150', 'bg-gold/10', 'border-transparent');
      }

      // Check for dark section intersection to flip cursor color
      const isDark = target.closest('.bg-charcoal');
      if (isDark) {
        dotRef.current?.classList.add('bg-white');
        dotRef.current?.classList.remove('bg-charcoal');
        ringRef.current?.classList.add('border-white/30');
        ringRef.current?.classList.remove('border-charcoal/30');
      } else {
        dotRef.current?.classList.add('bg-charcoal');
        dotRef.current?.classList.remove('bg-white');
        ringRef.current?.classList.add('border-charcoal/30');
        ringRef.current?.classList.remove('border-white/30');
      }
    };

    const render = () => {
      // Lerp for smooth trailing ring
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return { dotRef, ringRef };
}

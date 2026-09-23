import { useCursor } from '../../hooks/useCursor';

export function Cursor() {
  const { dotRef, ringRef } = useCursor();

  return (
    <>
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-charcoal pointer-events-none z-[100] transition-colors duration-300"
      />
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 rounded-full border border-charcoal/30 pointer-events-none z-[99] transition-all duration-300 ease-out"
      />
    </>
  );
}

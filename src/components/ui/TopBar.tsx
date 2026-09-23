import { useClock } from '../../hooks/useClock';

export function TopBar() {
  const { dateStr, timeStr } = useClock();

  return (
    <div className="bg-charcoal text-[#999] text-[10px] tracking-[0.14em] uppercase py-2.5 px-6 border-b border-white/5 flex justify-between items-center z-50 relative">
      <div className="flex-1">MELBOURNE, AU</div>
      <div className="flex-1 text-center font-medium text-white/70">
        {dateStr}
      </div>
      <div className="flex-1 text-right tabular-nums">
        {timeStr}
      </div>
    </div>
  );
}

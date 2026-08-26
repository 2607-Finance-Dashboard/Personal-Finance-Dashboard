import React from "react";

export function BudgetPieChart({ budgets = [] }) {
  // for total allocated
  const totalAllocated = budgets.reduce(
    (acc, curr) => acc + (Number(curr.allocated) || 0),
    0,
  );
  // if no budget
  if (budgets.length === 0 || totalAllocated === 0) {
    return (
      <div className="bg-white border border-stone-200 rounded-xl p-6 flex flex-col items-center justify-center text-center h-full min-h-55">
        <div className="w-16 h-16 rounded-full border-4 border-dashed border-stone-200 mb-3 flex items-center justify-center">
          <span className="text-stone-400 text-xs font-semibold">Ksh 0</span>
        </div>
        <p className="text-stone-500 text-sm font-medium">
          No budget allocations yet
        </p>
        <p className="text-stone-400 text-xs mt-1">Create a budget to view</p>
      </div>
    );
  }

  //   for chart fill
  let cumulativePercent = 0;

  const slices = budgets.map((b) => {
    const value = Number(b.allocated) || 0;
    const percent = value / totalAllocated;
    const startAngle = cumulativePercent * 360;
    cumulativePercent += percent;
    const endAngle = cumulativePercent * 360;

    return {
      id: b.id,
      category: b.category,
      allocated: value,
      percent: Math.round(percent * 100),
      color: b.color || "#262626",
      startAngle,
      endAngle,
    };
  });

  const getCoordinatesForPercent = (percent) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  };

  return (
    <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
      {/* chart container  */}
      <div className="relative w-44 h-44 shrink-0 flex items-center justify-center">
        <svg viewBox="-1 -1 2 2" className="w-full h-full transform -rotate-90">
          {slices.map((slice) => {
            const [startX, startY] = getCoordinatesForPercent(
              slice.startAngle / 360,
            );
            const [endX, endY] = getCoordinatesForPercent(slice.endAngle / 360);
            const largeArcFlag = slice.percent > 50 ? 1 : 0;

            // for single category
            if (slice.percent === 100) {
              return (
                <circle key={slice.id} cx="0" cy="0" r="1" fill={slice.color} />
              );
            }
            const pathData = [
              `M ${startX} ${startY}`,
              `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
              "L 0 0",
            ].join(" ");

            return (
              <path
                key={slice.id}
                d={pathData}
                fill={slice.color}
                className="transition-opacity duration-200 hover:opacity-80"
              />
            );
          })}
          {/* donut white hole */}
          <circle cx="0" cy="0" r="0.65" fill="#FFFFFF" />
        </svg>
      </div>

      {/* chart color legend  */}

      <div className="w-full space-y-2.5 flex-1 max-h-48 overflow-y-auto pr-1">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2 border-b border-stone-100 pb-1">
          Allocation Breakdown
        </h4>
        {slices.map((slice) => (
          <div
            key={slice.id}
            className="flex items-center justify-between text-xs"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: slice.color }}
              />
              <span className="font-medium text-stone-700 truncate max-w-35">
                {slice.category}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-stone-400">{slice.percent}%</span>
              <span className="font-semibold text-stone-900">
                Ksh{slice.allocated.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

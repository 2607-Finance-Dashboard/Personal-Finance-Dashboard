import React from "react";

export function BudgetPieCht({budgets = []}) {
    // for total allocated 
    const totalAllocated = budgets.reduce((acc, curr) => acc + (Number(curr.allocated) || 0), 0);
    // if no budget 
    if (budgets.length === 0 || totalAllocated === 0) {
    return (
      <div className="bg-white border border-stone-200 rounded-xl p-6 flex flex-col items-center justify-center text-center h-full min-h-55">
        <div className="w-16 h-16 rounded-full border-4 border-dashed border-stone-200 mb-3 flex items-center justify-center">
          <span className="text-stone-400 text-xs font-semibold">$0</span>
        </div>
        <p className="text-stone-500 text-sm font-medium">No budget allocations yet</p>
        <p className="text-stone-400 text-xs mt-1">Create a budget to view</p>
      </div>
    );
  };
 
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
      color: b.color || '#262626',
      startAngle,
      endAngle,
    };
  });

  const getCoordinatesForPercent = (percent) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  };

};
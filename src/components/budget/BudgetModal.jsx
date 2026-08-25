import { useEffect, useState } from "react";
import React from "react";
import { Check, X } from "lucide-react";


// color palettes to choose for cards

const COLOR_PALETTE = [
  { name: "Charcoal", hex: "#262626" },
  { name: "Emerald", hex: "#059669" },
  { name: "indigo", hex: "#4f46e5" },
  { name: "amber", hex: "#d97709" },
  { name: "rose", hex: "#e11d48" },
  { name: "teal", hex: "#0d9488" },
  { name: "violet", hex: "#7c3aed" },
  { name: "sky", hex: "#0284c7" },
];

export function BudgetModal({
  isOpen,
  onClose,
  onSave,
  initialData,
  existingBudgets = [],
}) {
  const [category, setCategory] = useState("");
  const [allocated, setAllocated] = useState("");
  const [spent, setSpent] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // to get list of used colors

  const usedColors = existingBudgets
    .filter((b) => b.id !== initialData?.id)
    .map((b) => b.color);

  useEffect(() => {
    if (initialData) {
      setCategory(initialData.category || "");
      setAllocated(initialData.allocated || "");
      setSpent(initialData.spent || 0);
      setSelectedColor(initialData.color || "#262626");
    } else {
      setCategory("");
      setAllocated("");
      setSpent(0);

      const firstAvailable = COLOR_PALETTE.find(
        (c) => !usedColors.includes(c.hex),
      );
      setSelectedColor(firstAvailable ? firstAvailable.hex : "#262626");
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: initialData?.id || Date.now().toString(),
      category: category.trim(),
      allocated: Number(allocated),
      spent: Number(spent) || 0,
      isSorted: initialData?.isSorted || false,
      color: selectedColor,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl border border-stone-200 p-6 w-full max-w-md shadow-2xl relative">
        {/* header sec */}
        <div className="flex justify-between items-center pb-4 mb-4 border-b border-stone-100">
          <h2 className="text-xl font-bold text-stone-900">
            {initialData ? "Edit Budget Limit" : "Create New Budget"}
          </h2>
          <button
            onClick={onClose} className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition" >
             <X className="w-5 h-5" />
         </button>
           
        </div>  
         {/* form inputs for adding budget cards*/}

       
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">
              Category Name
            </label>
            <input
              type="text"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g Rent, Groceries"
              className="w-full border border-stone-300 rounded-lg p-2.5 text-sm text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-stone-900 focus:border-stone-900 outline-none transition"
            />
          </div>
          {/* limit  */}
          <div>
            <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">
              Monthly Spending Limit ($)
            </label>
            <input
              type="number"
              required 
              min="1"
              value={allocated}
              onChange={(e) => setAllocated(e.target.value)}
              placeholder="e.g. 500"
              className="w-full border border-stone-300 rounded-lg p-2.5 text-sm text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-stone-900 focus:border-stone-900 outline-none transition"
            />
          </div>
          {/* amount spent  */}

          <div>
            <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">
              Already Spent (Ksh){" "}
              <span className="text-stone-400 font-normal lowercase">(optional)</span>              
            </label>
            <input
              type="number"
              min="0"
              value={spent}
              onChange={(e) => setSpent(e.target.value)}
              placeholder="0"
              className="w-full border border-stone-300 rounded-lg p-2.5 text-sm text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-stone-900 focus:border-stone-900 outline-none transition"
            />
          </div>
          {/*unique color accent */}

          <div>
            <label className="block text-xs font-semibold uppercase text-stone-600 mb-2">
              Category Color
            </label>
            <div className="flex flex-wrap gap-2.5">
              {COLOR_PALETTE.map((colorObj) => {
                const isTaken = usedColors.includes(colorObj.hex);
                const isSelected = selectedColor === colorObj.hex;

                return (
                  <button
                    key={colorObj.hex}
                    type="button"
     
                    disabled={isTaken}
                    onClick={() => setSelectedColor(colorObj.hex)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform relative ${
                      isTaken
                        ? "opacity-25 cursor-not-allowed scale-90"
                        : "hover:scale-110"
                    } ${isSelected ? "ring-2 ring-offset-2 ring-stone-900 scale-105" : ""}`}
                    style={{ backgroundColor: colorObj.hex }}
                    title={
                      isTaken
                        ? `${colorObj.name} (Already used)`
                        : colorObj.name
                    }
                  >
                    {isSelected && (
                      <Check className="w-4 h-4 text-white drop-shadow" />
                    )}
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-stone-400 mt-1.5">
              Color already assigned.
            </p>
          </div>

          {/* mgt act  */}
          <div className="flex justify-end gap-2 pt-4 border-t border-stone-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-stone-300 rounded-lg text-sm font-semibold text-stone-700 hover:bg-stone-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-stone-900 text-white rounded-lg text-sm font-semibold hover:bg-stone-800 transition"
            >
              {initialData ? "Update Budget" : "Create Budget"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

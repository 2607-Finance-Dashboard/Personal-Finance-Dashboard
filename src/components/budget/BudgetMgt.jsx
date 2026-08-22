import { useEffect, useState } from "react";
import React from "react";
import { X, check } from "lucide-react";
import { initial } from "node_modules/@base-ui/react/internals/reason-parts.mjs";

// color palettes to choose for cards

const COLOR_PALETTE = [
    {name: 'Charcoal', hex: '#262626' },
    {name: 'Emerald', hex: '#059669' },
    {name: 'indigo', hex: '#4f46e5' },
    {name: 'amber', hex: '#d97709' },
    {name: 'rose', hex: '#e11d48' },
    {name: 'teal', hex: '#0d9488' },
    {name: 'violet', hex: '#7c3aed' },
    {name: 'sky', hex: '#0284c7' },
];

export function BudgetMgt({ isOpen, onClose, onSave, initialData, existingBudgets = [] }) {
  const [category, setCategory] = useState('');
  const [allocated, setAllocated] = useState('');
  const [spent, setSpent] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

// to get list of used colors

const usedColors = existingBudgets
.filter((b) => b.id !== initialData?.id)
.map((b) => b.color);

useEffect(() => {
    if(initialData){
        setCategory(initialData.category || "");
        setAllocated(initialData.allocated || "");
        setSpent(initialData.spent || 0);
        setSelectedColor(initialData.color || "#262626");
    }else{
        setCategory('');
        setAllocated('');
        setSpent(0);

    const firstAvailable = COLOR_PALETTE.find((c) => !usedColors.includes(c.hex));
             setSelectedColor(firstAvailable ? firstAvailable.hex : '#262626');
    }
}, [initial, isOpen]);

    if (!isOpen) return null;

    

};
import React from "react";
import { AlertTriangle, CheckCircle, CheckCircle2, Pencil, Trash2 } from "lucide-react";

export function BudgetCard ({Budget, onEdit, OnDelete, onToggleSorted}) {
    const {id, category, allocated, spent, isSorted, color} = Budget;
// to calculate 
    const percentUsed = Math.round((spent / allocated) * 100);
    const remaining = allocated - spent;
    const isOverBudget = spent > allocated;

//theme logic 
    const getStatusBadge = () => {
        if(isSorted) {
            return {
                badgeStyle : 'bg-stone-100 text-stone-800 border-stone-300',
                label : 'Sorted',
                icon : <CheckCircle2 className="w-3 h-3 text-stone-700"/>
            };
        }
        if(isOverBudget){
            return{
                badgeStyle: 'bg-stone-900 text-white border-stone-900',
                label: 'Over Limit',
                icon: <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
            }
        };
        if(percentUsed >= 85) {
            return{
                badgeStyle: 'bg-stone-200 text-stone-800 border-stone-300',
                label: 'Near Limit',
                icon: <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            }
        };
        return{
            badgeStyle: 'bg-stone-100 text-stone-600 border-stone-200',
            label: 'On Track',
            icon: <CheckCircle2 className="w-3.5 h-3.5 text-stone-500" />
        };
    };
    
    const status = getStatusBadge();
    
    return(
        <div className={`p-5 rounded-xl border-t-4 transition-all shadow-sm hover:shadow-md relative bg-white ${
                isSorted ? 'opacity-90 border-t-emerald-500 bg-emerald-50/10' : 'border-gray-100'
      }`}
       // Custom card color on top border
       style={{ borderTopColor: color || '#3B82F6' }}>
{/* cardheader */}
        <div className="flex justify-between items-start mb-3">
            <div>
                <h3 className={`font-semibold text-lg ${isSorted ? 'line-through text-gray-500' : 'text-gray-800'}`}>{category}</h3>
                 <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded-full border mt-1 ${status.badgeStyle}`}>
                {status.icon}
                {status.label}
          </span>     
            </div>
            {/* action Buttons */}
        <div className="flex items-center gap-1 text-gray-400">
            <button onClick={() => onEdit(budget)}
            className="p-1 hover:text-blue-200 hover:bg-gray-100 rounded-lg transition"
            title="Edit Budget">
                <pencil className="w-4 h-4"/>
            </button>
            <button onClick={() => onDelete(id)}
            className="p-1 hover:text-blue-200 hover:bg-gray-100 rounded-lg transition"
            title="Delete Budget">
                <Trash2 className="w-4 h-4" />
            </button>
        </div>
        </div>

        {/* progress bar */}
        </div> 
    )

}
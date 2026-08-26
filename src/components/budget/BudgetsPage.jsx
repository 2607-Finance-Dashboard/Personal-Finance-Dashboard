import React, { useState, useEffect } from 'react';
import { Plus, Wallet, Wallet2 } from 'lucide-react';
import { BudgetCard } from './BudgetCard';
import { BudgetPieChart } from './BudgetPieChart';
import { BudgetModal } from './BudgetModal';
import { db } from '../../lib/firebase';
import { 
  collection, 
  query, 
  onSnapshot, 
  doc, 
  updateDoc, 
  addDoc, 
  deleteDoc 
} from 'firebase/firestore';

const initialBudgets = [
  { id: '1', category: 'Groceries & Household', allocated: 600, spent: 420, isSorted: false, color: '#059669' },
  { id: '2', category: 'Rent & Housing', allocated: 1200, spent: 1200, isSorted: true, color: '#262626' },
  { id: '3', category: 'Dining & Entertainment', allocated: 300, spent: 310, isSorted: false, color: '#E11D48' },
  { id: '4', category: 'Utilities & WiFi', allocated: 150, spent: 95, isSorted: false, color: '#0284C7' }
];

export default function BudgetsPage() {
    const [budgets, setBudgets] = useState(initialBudgets);    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingBudget, setEditingBudget] = useState(null);

     // 1. Fetch data in real-time from Firestore
  useEffect(() => {
    const q = query(collection(db, 'budgets'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const budgetData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBudgets(budgetData);
    });
    return () => unsubscribe();
  }, []);

    const handleOpenCreateModal =() => {
        setEditingBudget(null);
        setIsModalOpen(true);
    };
    const handleOpenEditModal = (budget) => {
        setEditingBudget(budget);
        setIsModalOpen(true);

    };
    // 2. Add or Update budget in Firestore
  const handleSaveBudget = async (savedBudget) => {
    try {
      const budgetPayload = {
        category: savedBudget.category,
        allocated: savedBudget.allocated,
        spent: savedBudget.spent,
        isSorted: savedBudget.isSorted,
        color: savedBudget.color,
      
    }; 
    if (editingBudget) {
        // Update existing document
        await updateDoc(doc(db, 'budgets', savedBudget.id), budgetPayload);
      } else {
        // Create new document
        await addDoc(collection(db, 'budgets'), budgetPayload);
      }
    } catch (error) {
      console.error("Error saving budget:", error);
    }
  };


    // 3. Delete from Firestore
  const handleDeleteBudget = async (idToDelete) => {
    if (window.confirm('Are you sure you want to delete this budget?')) {
      try {
        await deleteDoc(doc(db, 'budgets', idToDelete));
      } catch (error) {
        console.error("Error deleting budget:", error);
      }
    }
  };

  // 4. Toggle the "Sorted" status in Firestore
  const handleToggleSorted = async (idToToggle) => {
    const targetBudget = budgets.find((b) => b.id === idToToggle);
    if (targetBudget) {
      try {
        await updateDoc(doc(db, 'budgets', idToToggle), {
          isSorted: !targetBudget.isSorted
        });
      } catch (error) {
        console.error("Error updating sorted status:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 p-6 md:p-10 space-y-8 max-w-7xl mx-auto text-stone-900">
      {/* header bar  */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-stone-900">Budget Tracker</h1>
          <p className="text-sm text-stone-500 mt-1">
            Manage your spending within your limits, and check bills as sorted.</p>
          </div>

        <button onClick={handleOpenCreateModal}          
          className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white font-semibold px-4 py-2.5 rounded-xl text-sm shadow-sm hover:bg-stone-800 transition active:scale-95"
        >
          <Plus className="w-4 h-4" /> Create Budget
        </button>
      </div>

      {/* Donut Chart */}
      <section>
        <BudgetPieChart budgets={budgets} />
      </section>

      {/* Cards Grid  */}
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-stone-900 tracking-tight">Active Categories</h2>
          <span className="text-xs font-semibold text-stone-500 bg-stone-200/60 px-2.5 py-1 rounded-full">
            {budgets.length} Total</span>
         </div>

 {/* for no budget  */}
            {budgets.length === 0 ? (
          <div className="bg-white border border-stone-200 rounded-xl p-12 text-center shadow-sm">
            <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-3 text-stone-400">
              <Wallet2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-stone-800">No active budgets</h3>
            <p className="text-xs text-stone-400 max-w-sm mx-auto mt-1 mb-4">
              You haven't set up any targets. Click to add.
            </p>
            <button
              onClick={handleOpenCreateModal}
              className="inline-flex items-center gap-2 bg-stone-900 text-white font-semibold px-4 py-2 rounded-lg text-xs hover:bg-stone-800 transition"
            >
              <Plus className="w-3.5 h-3.5" /> Create Budget
            </button>
          </div>
        ) : (
        // responsive card grids 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {budgets.map((budget) => (
              <BudgetCard
                key={budget.id}
                budget={budget}
                onEdit={handleOpenEditModal}
                onDelete={handleDeleteBudget}
                onToggleSorted={handleToggleSorted}
              />
            ))}
          </div>
        )}
      </section>

      {/* Create / Edit budget*/}
      <BudgetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveBudget}
        initialData={editingBudget}
        existingBudgets={budgets}/>
         </div>
  )
};
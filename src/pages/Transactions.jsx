import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';
import TransactionFilters from '../components/TransactionFilters';
import TransactionTable from '../components/TransactionTable';
import TransactionModal from '../components/TransactionModal';

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    description: '', amount: '', type: 'expense', category: '', date: ''
  });

  useEffect(() => {
    const q = query(collection(db, 'transactions'), orderBy('date', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const txData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTransactions(txData);
    });
    return () => unsubscribe();
  }, []);

  const handleOpenModal = (transaction = null) => {
    if (transaction) {
      setEditingId(transaction.id);
      setFormData({ ...transaction });
    } else {
      setEditingId(null);
      setFormData({ description: '', amount: '', type: 'expense', category: '', date: '' });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...formData, amount: parseFloat(formData.amount) };
    
    try {
      if (editingId) {
        await updateDoc(doc(db, 'transactions', editingId), payload);
      } else {
        await addDoc(collection(db, 'transactions'), payload);
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving: ", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this transaction?')) {
      await deleteDoc(doc(db, 'transactions', id));
    }
  };

  const filteredTransactions = transactions.filter(tx => {
    const matchesType = filterType === 'all' || tx.type === filterType;
    const matchesSearch = tx.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tx.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto text-gray-800">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Transactions</h1>
          <p className="text-gray-500 text-sm">Manage your income and expenses.</p>
        </div>
        <Button onClick={() => handleOpenModal()} className="bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 shadow-sm">
          <Plus size={18} className="mr-2" /> Add Transaction
        </Button>
      </div>

      <TransactionFilters filterType={filterType} setFilterType={setFilterType} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TransactionTable transactions={filteredTransactions} handleOpenModal={handleOpenModal} handleDelete={handleDelete} />
      <TransactionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleSubmit} formData={formData} setFormData={setFormData} isEditing={!!editingId} />
    </div>
  );
}
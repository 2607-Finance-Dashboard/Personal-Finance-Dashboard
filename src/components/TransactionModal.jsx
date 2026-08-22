import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TransactionModal({ isOpen, onClose, onSubmit, formData, setFormData, isEditing }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white border border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-gray-800">{isEditing ? 'Edit Transaction' : 'Add Transaction'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <Button type="button" variant={formData.type === 'expense' ? 'default' : 'outline'} onClick={() => setFormData({...formData, type: 'expense'})} className={formData.type === 'expense' ? 'bg-gray-800 text-white hover:bg-gray-900' : 'text-gray-600'}>Expense</Button>
            <Button type="button" variant={formData.type === 'income' ? 'default' : 'outline'} onClick={() => setFormData({...formData, type: 'income'})} className={formData.type === 'income' ? 'bg-gray-800 text-white hover:bg-gray-900' : 'text-gray-600'}>Income</Button>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Description</label>
            <Input required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="mt-1 bg-gray-50" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Amount</label>
              <Input required type="number" step="0.01" value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})} className="mt-1 bg-gray-50" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Date</label>
              <Input required type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="mt-1 bg-gray-50" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Category</label>
            <Input required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="mt-1 bg-gray-50" />
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="ghost" onClick={onClose} className="text-gray-600">Cancel</Button>
            <Button type="submit" className="bg-gray-800 hover:bg-gray-900 text-white">{isEditing ? 'Save' : 'Add'}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
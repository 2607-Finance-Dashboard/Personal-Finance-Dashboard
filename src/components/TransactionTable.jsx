import React from 'react';
import { Edit2, Trash2, TrendingUp, TrendingDown } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function TransactionTable({ transactions, handleOpenModal, handleDelete }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <Table>
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.length > 0 ? transactions.map(transaction => ( //here it uses the ternary operator to check if there are any transactions,if yes it is added to the tr,if No it jumps to the bottom where it displays the no transactions
            <TableRow key={transaction.id} className="hover:bg-gray-50"> 
              <TableCell className="font-medium text-gray-800">{transaction.description}</TableCell>
              <TableCell className="text-gray-500">{transaction.category}</TableCell>
              <TableCell className="text-gray-500">{transaction.date}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1.5 font-semibold text-gray-800">
                  {transaction.type === 'income' ? <TrendingUp size={16} className="text-gray-400" /> : <TrendingDown size={16} className="text-gray-400" />}
                  ${Number(transaction.amount).toFixed(2)}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon" onClick={() => handleOpenModal(transaction)}><Edit2 size={16} className="text-gray-500" /></Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(transaction.id)}><Trash2 size={16} className="text-gray-500" /></Button>
              </TableCell>
            </TableRow>
          )) : (
            <TableRow><TableCell colSpan={5} className="text-center h-24 text-gray-500">No transactions found.</TableCell></TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
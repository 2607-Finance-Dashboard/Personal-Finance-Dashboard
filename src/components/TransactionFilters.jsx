import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TransactionFilters({ filterType, setFilterType, searchQuery, setSearchQuery }) {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 mb-6 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex gap-2">
        {['all', 'income', 'expense'].map(type => (
          <Button key={type} variant={filterType === type ? "secondary" : "ghost"} onClick={() => setFilterType(type)} className="capitalize">
            {type}
          </Button>
        ))}
      </div>
      <div className="relative w-full md:w-64">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <Input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10 bg-gray-50 focus:bg-white" />
      </div>
    </div>
  );
}
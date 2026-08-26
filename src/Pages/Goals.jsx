import React, { useState } from 'react';
import { Plus, Target, Pencil, Trash2 } from 'lucide-react';

const initialGoals = [
  {
    id: 1,
    name: 'Emergency Fund',
    target: 50000,
    saved: 30000,
    deadline: 'December 2026',
  },
  {
    id: 2,
    name: 'New Laptop',
    target: 80000,
    saved: 45000,
    deadline: 'March 2027',
  },
  {
    id: 3,
    name: 'Holiday Fund',
    target: 30000,
    saved: 12000,
    deadline: 'December 2026',
  },
];

export default function Goals() {
  const [goals, setGoals] = useState(initialGoals);
  const [showForm, setShowForm] = useState(false);

  const [newGoal, setNewGoal] = useState({
    name: '',
    target: '',
    saved: '',
    deadline: '',
  });

  const handleAddGoal = (e) => {
    e.preventDefault();

    if (!newGoal.name || !newGoal.target) return;

    const goal = {
      id: Date.now(),
      name: newGoal.name,
      target: Number(newGoal.target),
      saved: Number(newGoal.saved) || 0,
      deadline: newGoal.deadline || 'No deadline',
    };

    setGoals([...goals, goal]);

    setNewGoal({
      name: '',
      target: '',
      saved: '',
      deadline: '',
    });

    setShowForm(false);
  };

  const handleDelete = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  const totalTarget = goals.reduce((sum, goal) => sum + goal.target, 0);
  const totalSaved = goals.reduce((sum, goal) => sum + goal.saved, 0);

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Financial Goals
          </h1>
          <p className="text-slate-500 mt-1">
            Track your savings goals and stay on target.
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-700"
        >
          <Plus size={18} />
          Add Goal
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

        <div className="rounded-xl bg-white p-5 shadow-sm border">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-100 p-3">
              <Target className="text-blue-600" size={22} />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Total Goals
              </p>
              <h2 className="text-2xl font-bold">
                {goals.length}
              </h2>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm border">
          <p className="text-sm text-slate-500">
            Total Target
          </p>
          <h2 className="text-2xl font-bold text-slate-800">
            KSh {totalTarget.toLocaleString()}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm border">
          <p className="text-sm text-slate-500">
            Total Saved
          </p>
          <h2 className="text-2xl font-bold text-green-600">
            KSh {totalSaved.toLocaleString()}
          </h2>
        </div>

      </div>

      {/* Add Goal Form */}
      {showForm && (
        <form
          onSubmit={handleAddGoal}
          className="rounded-xl bg-white p-6 shadow-sm border space-y-4"
        >
          <h2 className="text-xl font-bold text-slate-800">
            Create a New Goal
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            <input
              type="text"
              placeholder="Goal name"
              value={newGoal.name}
              onChange={(e) =>
                setNewGoal({ ...newGoal, name: e.target.value })
              }
              className="rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-slate-400"
            />

            <input
              type="number"
              placeholder="Target amount"
              value={newGoal.target}
              onChange={(e) =>
                setNewGoal({ ...newGoal, target: e.target.value })
              }
              className="rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-slate-400"
            />

            <input
              type="number"
              placeholder="Amount already saved"
              value={newGoal.saved}
              onChange={(e) =>
                setNewGoal({ ...newGoal, saved: e.target.value })
              }
              className="rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-slate-400"
            />

            <input
              type="text"
              placeholder="Deadline e.g. December 2026"
              value={newGoal.deadline}
              onChange={(e) =>
                setNewGoal({ ...newGoal, deadline: e.target.value })
              }
              className="rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-slate-400"
            />

          </div>

          <button
            type="submit"
            className="rounded-lg bg-slate-900 px-5 py-2 text-white hover:bg-slate-700"
          >
            Save Goal
          </button>
        </form>
      )}

      {/* Goals */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        {goals.map((goal) => {
          const percentage = Math.min(
            Math.round((goal.saved / goal.target) * 100),
            100
          );

          return (
            <div
              key={goal.id}
              className="rounded-xl bg-white p-6 shadow-sm border"
            >

              <div className="flex items-start justify-between">

                <div>
                  <h2 className="text-xl font-bold text-slate-800">
                    {goal.name}
                  </h2>

                  <p className="text-sm text-slate-500 mt-1">
                    Deadline: {goal.deadline}
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(goal.id)}
                  className="rounded-lg p-2 text-red-500 hover:bg-red-50"
                  title="Delete goal"
                >
                  <Trash2 size={18} />
                </button>

              </div>

              <div className="mt-5">

                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-500">
                    KSh {goal.saved.toLocaleString()} saved
                  </span>

                  <span className="font-semibold">
                    {percentage}%
                  </span>
                </div>

                <div className="h-3 w-full rounded-full bg-slate-200">
                  <div
                    className="h-3 rounded-full bg-slate-900"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>

                <div className="mt-3 flex justify-between text-sm">
                  <span className="text-slate-500">
                    Target
                  </span>

                  <span className="font-semibold">
                    KSh {goal.target.toLocaleString()}
                  </span>
                </div>

              </div>

            </div>
          );
        })}

      </div>

      {goals.length === 0 && (
        <div className="rounded-xl bg-white p-10 text-center border">
          <Target
            size={40}
            className="mx-auto mb-3 text-slate-400"
          />

          <h2 className="text-xl font-bold">
            No goals yet
          </h2>

          <p className="mt-1 text-slate-500">
            Add your first financial goal to start tracking your progress.
          </p>
        </div>
      )}

    </div>
  );
}
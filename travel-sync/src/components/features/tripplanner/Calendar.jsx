/**
 * Minimal two-date picker using native date inputs.
 * Emits { startDate, endDate } via onChange.
 */
const Calendar = ({ onChange }) => {
  const handle = (field) => (e) => {
    const value = e.target.value;
    onChange?.((prev) => ({ ...(typeof prev === 'object' && prev ? prev : {}), [field]: value }));
  };
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-2xl p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="grid gap-1">
          <span className="text-xs text-slate-500">Check In</span>
          <input type="date" className="px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white"
                 onChange={handle('startDate')} />
        </label>
        <label className="grid gap-1">
          <span className="text-xs text-slate-500">Check Out</span>
          <input type="date" className="px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white"
                 onChange={handle('endDate')} />
        </label>
      </div>
    </div>
  );
};

export default Calendar;

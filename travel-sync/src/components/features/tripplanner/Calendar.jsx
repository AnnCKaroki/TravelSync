/**
 * Calendar component placeholder for date range selection.
 * Will be enhanced with a proper date picker library later.
 */
const Calendar = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-2xl p-8 text-center transition-all duration-300 hover:border-purple-300 hover:bg-gradient-to-br hover:from-purple-50/50 hover:to-pink-50/50">
      <div className="space-y-4">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto">
          <span className="text-white text-2xl">📅</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-700 mb-2">Date Range Picker</h3>
          <p className="text-sm text-slate-500">Select your travel dates</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-white/80 p-3 rounded-xl border border-slate-200">
            <p className="text-xs text-slate-400 uppercase tracking-wide">Check In</p>
            <p className="text-slate-600 font-medium">Select date</p>
          </div>
          <div className="bg-white/80 p-3 rounded-xl border border-slate-200">
            <p className="text-xs text-slate-400 uppercase tracking-wide">Check Out</p>
            <p className="text-slate-600 font-medium">Select date</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <header className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white grid place-content-center shadow-lg shadow-blue-300/40">✈️</div>
          <span className="font-semibold text-slate-800">TravelSync</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#how" className="hover:text-slate-900">How it works</a>
          <Link to="/login" className="px-4 py-2 rounded-lg bg-slate-900 text-white">Sign in</Link>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center pt-8 pb-16">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">Plan trips. Get insights. Travel smarter.</h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">Mobile-first, trip-centric dashboard with weather, local news, and activities tailored to your destination and dates.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link to="/login" className="px-5 py-3 rounded-xl bg-blue-600 text-white text-center shadow-lg shadow-blue-300/40">Get started</Link>
            <Link to="/app/add" className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 text-center">Plan a trip</Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-blue-100/60 rounded-3xl blur-2xl"></div>
          <div className="relative rounded-3xl border border-slate-100 bg-white shadow-xl overflow-hidden">
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-blue-50 grid place-items-center text-slate-500">App preview</div>
          </div>
        </div>
      </main>

      <section id="features" className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        {[
          ['Weather Overview', 'Current and 5-day forecast for your trip.'],
          ['Local News', 'Destination-relevant headlines to stay informed.'],
          ['Activities', 'Curate your itinerary with planned activities.'],
        ].map(([title, desc]) => (
          <div key={title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold text-slate-800">{title}</div>
            <p className="text-slate-600 mt-2 text-sm">{desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Landing;



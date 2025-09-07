export default function Navbar(){
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-indigo-600">Salaryfy</div>
          <div className="text-sm text-gray-500">Clarity. Transparency. Money sense.</div>
        </div>
        <div className="space-x-4">
          <a href="#calculator" className="text-sm hover:text-indigo-600">Calculator</a>
          <a href="#tax" className="text-sm hover:text-indigo-600">Tax Info</a>
          <a href="#learn" className="text-sm hover:text-indigo-600">Learn</a>
          <a href="#contact" className="px-4 py-1 bg-indigo-600 text-white rounded-md text-sm">Contact</a>
        </div>
      </div>
    </nav>
  );
}

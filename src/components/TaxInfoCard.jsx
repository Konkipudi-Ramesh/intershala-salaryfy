export default function TaxInfoCard({ title, description, rate }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-indigo-900">Tax Information</h2>
      </div>
      <h3 className="text-lg font-semibold text-indigo-700">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{description}</p>
      {rate && (
        <div className="mt-4 text-sm font-medium text-gray-800">
          Tax Rate: <span className="text-indigo-600">{rate}%</span>
        </div>
      )}
    </div>
  );
}

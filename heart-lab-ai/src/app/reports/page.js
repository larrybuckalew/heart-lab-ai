export default function Reports() {
  return (
    <div className="max-w-7xl mx-auto py-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Reports</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-4">
          {[
            { id: 1, title: 'Monthly Analysis Summary', date: '2024-01-01', type: 'Summary' },
            { id: 2, title: 'Cardiac Health Trends', date: '2024-01-02', type: 'Analysis' },
            { id: 3, title: 'Patient Progress Report', date: '2024-01-03', type: 'Progress' },
          ].map((report) => (
            <div key={report.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div>
                <h3 className="font-medium text-gray-900">{report.title}</h3>
                <p className="text-sm text-gray-600">{report.date}</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {report.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
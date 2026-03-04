import { useState, useEffect } from 'react';
import { CheckCircle, Settings, AlertTriangle, XCircle } from 'lucide-react';

const Status = () => {
  const [services, setServices] = useState([]);
  const [, setMetadata] = useState({});
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStatusData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('https://raw.githubusercontent.com/IZSoftware/product-status/refs/heads/main/zetscore_status.json');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      setServices(data.services || []);
      setMetadata(data.metadata || {});
      setLastUpdated(new Date());
      
    } catch (err) {
      console.error('Error fetching status data:', err);
      setError(err.message || 'Failed to fetch status data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatusData();
    
    // Optional: Set up periodic refresh (every 5 minutes)
    const intervalId = setInterval(fetchStatusData, 5 * 60 * 1000);
    
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Operational':
        return <CheckCircle className="w-8 h-8" style={{ color: '#3d9970' }} strokeWidth={2} />;
      case 'Under Maintenance':
        return <Settings className="w-8 h-8 text-blue-600" strokeWidth={2} />;
      case 'Degraded Performance':
        return <AlertTriangle className="w-8 h-8 text-yellow-600" strokeWidth={2} />;
      case 'Major Outage':
        return <XCircle className="w-8 h-8 text-red-600" strokeWidth={2} />;
      default:
        return null;
    }
  };

  const getOperationalCount = () => {
    return services.filter(service => service.status === 'Operational').length;
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-green-500 border-solid rounded-full animate-spin border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading status data...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="grid items-center grid-cols-12 px-2 mx-auto">
          <div className="col-span-10 col-start-2">
            <div className="py-12">
              <div className="p-6 border border-red-200 rounded-lg bg-red-50">
                <h3 className="mb-2 text-lg font-semibold text-red-800">Error Loading Data</h3>
                <p className="mb-4 text-red-600">{error}</p>
                <button 
                  onClick={fetchStatusData}
                  className="px-4 py-2 text-white transition-colors bg-red-600 rounded hover:bg-red-700"
                >
                  Retry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="grid items-center grid-cols-12 px-2 mx-auto">
        <div className="col-span-10 col-start-2">
          <div className="py-12">

            <div className="py-10 mb-8">
              <div className="flex flex-wrap items-center justify-center gap-10">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-9 h-9" style={{ color: '#3d9970' }} strokeWidth={2} />
                  <span className="text-xl font-semibold text-gray-700">Operational</span>
                </div>
                <div className="flex items-center gap-4">
                  <Settings className="text-blue-600 w-9 h-9" strokeWidth={2} />
                  <span className="text-xl font-semibold text-gray-700">Under Maintenance</span>
                </div>
                <div className="flex items-center gap-4">
                  <AlertTriangle className="text-yellow-600 w-9 h-9" strokeWidth={2} />
                  <span className="text-xl font-semibold text-gray-700">Degraded Performance</span>
                </div>
                <div className="flex items-center gap-4">
                  <XCircle className="text-red-600 w-9 h-9" strokeWidth={2} />
                  <span className="text-xl font-semibold text-gray-700">Major Outage</span>
                </div>
              </div>
            </div>

            {/* Current Status Banner */}
            <div className="p-8 mb-8 bg-white border-l-4 rounded-lg shadow-sm" style={{ borderLeftColor: '#3d9970' }}>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="mb-2 text-3xl font-bold text-gray-900">Current Status</h2>
                  <p className="text-lg text-gray-600">Last updated: {lastUpdated.toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 rounded-full" style={{ backgroundColor: '#e8f5e9' }}>
                  <CheckCircle className="w-6 h-6" style={{ color: '#3d9970' }} strokeWidth={2} />
                  <span className="text-base font-semibold" style={{ color: '#2d7a55' }}>
                    {getOperationalCount()} of {services.length} Operational
                  </span>
                </div>
              </div>
            </div>

            {/* Status Table */}
            <div className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th scope="col" className="px-8 py-6 text-base font-semibold tracking-wide text-left text-gray-700 uppercase">
                      Service
                    </th>
                    <th scope="col" className="px-8 py-6 text-base font-semibold tracking-wide text-center text-gray-700 uppercase">
                      Status
                    </th>
                    <th scope="col" className="px-8 py-6 text-base font-semibold tracking-wide text-left text-gray-700 uppercase">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {services.map((item, index) => (
                    <tr key={index} className="transition-colors duration-150 hover:bg-gray-50">
                      <td className="px-8 py-6 text-xl font-semibold text-gray-900 whitespace-nowrap">
                        {item.service}
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="flex items-center justify-center">
                          {getStatusIcon(item.status)}
                        </div>
                      </td>
                      <td className="px-8 py-6 text-lg font-semibold text-gray-600">
                        {item.reason}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-base text-gray-500">
                For support inquiries, please contact your system administrator
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
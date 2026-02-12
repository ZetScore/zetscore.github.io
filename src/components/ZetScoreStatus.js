import { useState } from 'react';
import { CheckCircle, Settings, AlertTriangle, XCircle } from 'lucide-react';

const Status = () => {
  const [statusData] = useState([
    {
      service: 'Peer Review',
      status: 'Operational',
      reason: 'All systems operational'
    },
    {
      service: 'Assessment',
      status: 'Operational',
      reason: 'All systems operational'
    },
    {
      service: 'Employee Wellbeing',
      status: 'Operational',
      reason: 'All systems operational'
    },
    {
      service: 'Net Promoter System',
      status: 'Operational',
      reason: 'All systems operational'
    },
    {
      service: 'Personal Development',
      status: 'Operational',
      reason: 'All systems operational'
    },
    {
      service: 'Workforce Analytics',
      status: 'Operational',
      reason: 'All systems operational'
    },
    {
      service: 'Onboarding',
      status: 'Under Maintenance',
      reason: 'Scheduled maintenance in progress'
    },
    {
      service: 'Background Checks',
      status: 'Under Maintenance',
      reason: 'Scheduled maintenance in progress'
    },
    {
      service: 'Work Authorization',
      status: 'Under Maintenance',
      reason: 'Scheduled maintenance in progress'
    }
  ]);

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
                  <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 rounded-full" style={{ backgroundColor: '#e8f5e9' }}>
                  <CheckCircle className="w-6 h-6" style={{ color: '#3d9970' }} strokeWidth={2} />
                  <span className="text-base font-semibold" style={{ color: '#2d7a55' }}>6 of 9 Operational</span>
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
                  {statusData.map((item, index) => (
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
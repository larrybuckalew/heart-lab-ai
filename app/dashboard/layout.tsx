import React from 'react';
import Link from 'next/link';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const menuItems = [
    { label: 'Overview', href: '/dashboard', icon: 'grid' },
    { label: 'Voice Analytics', href: '/dashboard/voice', icon: 'mic' },
    { label: 'Automations', href: '/dashboard/automations', icon: 'repeat' },
    { label: 'Reports', href: '/dashboard/reports', icon: 'bar-chart' },
    { label: 'Settings', href: '/dashboard/settings', icon: 'settings' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/dashboard" className="flex items-center">
                <span className="text-xl font-bold text-blue-600">Heart Lab AI</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className="w-64 bg-white border-r min-h-screen">
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center p-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
import { Shield, Lock, Key } from 'lucide-react';

const securityFeatures = [
  {
    title: 'End-to-End Encryption',
    description: 'All your data is encrypted in transit and at rest using industry-standard protocols.',
    icon: Lock,
  },
  {
    title: 'Two-Factor Authentication',
    description: 'Add an extra layer of security to your account with 2FA.',
    icon: Key,
  },
  {
    title: 'Regular Security Audits',
    description: 'We conduct regular security assessments to ensure your data stays protected.',
    icon: Shield,
  },
];

export default function Security() {
  return (
    <div id="security" className="py-24 bg-white dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070"
          alt="Security background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Security First
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Your security is our top priority. We implement industry-leading security measures to protect your data.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((feature) => (
              <div key={feature.title} className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
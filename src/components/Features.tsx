import { Zap, Shield, Users, Smartphone } from 'lucide-react';

const features = [
  {
    name: 'Lightning Fast',
    description: 'Experience blazing-fast performance with our optimized platform.',
    icon: Zap,
  },
  {
    name: 'Enterprise Security',
    description: 'Bank-grade security to keep your data safe and protected.',
    icon: Shield,
  },
  {
    name: 'Team Collaboration',
    description: 'Work together seamlessly with your team in real-time.',
    icon: Users,
  },
  {
    name: 'Mobile Ready',
    description: 'Access your workspace from any device, anywhere.',
    icon: Smartphone,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Our platform provides all the tools you need to streamline your workflow and boost productivity.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{feature.name}</h3>
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
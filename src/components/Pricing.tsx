import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 29,
    features: ['5 Projects', '10GB Storage', 'Basic Analytics', 'Email Support'],
  },
  {
    name: 'Pro',
    price: 79,
    features: ['Unlimited Projects', '100GB Storage', 'Advanced Analytics', 'Priority Support', 'API Access'],
  },
  {
    name: 'Enterprise',
    price: 299,
    features: ['Custom Solutions', 'Unlimited Storage', 'Dedicated Support', 'Custom Integrations', 'SLA Guarantee'],
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="mt-16 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
          {tiers.map((tier) => (
            <div key={tier.name} className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6 bg-white dark:bg-gray-900">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{tier.name}</h3>
              <p className="mt-4">
                <span className="text-4xl font-extrabold text-gray-900 dark:text-white">${tier.price}</span>
                <span className="text-base font-medium text-gray-500 dark:text-gray-400">/mo</span>
              </p>
              <ul className="mt-6 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <Check className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-gray-500 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-8 block w-full bg-indigo-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-indigo-700"
              >
                Get started with {tier.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
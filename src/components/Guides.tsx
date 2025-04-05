export default function Guides() {
  return (
    <div id="guides" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
          alt="Guides background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Guides & Tutorials
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Learn how to make the most of our platform with step-by-step guides and tutorials.
          </p>
        </div>
        <div className="mt-10">
          <div className="prose prose-indigo dark:prose-invert mx-auto">
            <p className="text-gray-500 dark:text-gray-400">
              Our guides cover everything from getting started to advanced features.
              Check back regularly for new content and updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Documentation() {
  return (
    <div id="documentation" className="py-24 bg-white dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=2070"
          alt="Documentation background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Documentation
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Comprehensive guides and documentation to help you get started and make the most of our platform.
          </p>
        </div>
        <div className="mt-10">
          <div className="prose prose-indigo dark:prose-invert mx-auto">
            <p className="text-gray-500 dark:text-gray-400">
              Our documentation is constantly updated with the latest features, best practices, and examples.
              Visit our documentation portal for detailed information about using our platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
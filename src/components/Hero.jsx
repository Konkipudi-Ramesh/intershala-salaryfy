export default function Hero(){
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900">Understand your salary — simply.</h1>
          <p className="mt-4 text-gray-600">Salaryfy helps you break down CTC, taxes and take-home pay in seconds.</p>
          <a href="#calculator" className="inline-block mt-6 px-6 py-2 bg-indigo-600 text-white rounded-md">Try Calculator</a>
        </div>
        <div>
          <img src="/assets/hero-illustration.svg" alt="salary illustration" className="w-full"/>
        </div>
      </div>
    </section>
  );
}

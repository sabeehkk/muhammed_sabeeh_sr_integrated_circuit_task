
function Hero() {
  return (
    <main className="pt-36 bg-[#fcd469] rounded-lg flex items-center">
      <div>
        <h2 className="text-4xl font-bold text-black">
          <span className="block">Lorem ipsum dolor, sit amet</span>
          <span className="block">consec adipiscing elit.</span>
        </h2>
        <p className="mt-4 text-gray-800 text-opacity-50">
          <span className="block">
            Nam euismod orci in felis bibendum, at scelerisque libero pretium
            letter,
          </span>
          <span className="block">vel pretium, est condimentum, Morbi</span>
        </p>
        <div className="mt-20">
          <button className="bg-[#292e34] hover:bg-[#000000] text-white rounded-full px-16 py-5 transition">
            Bestsellers list
          </button>
        </div>
      </div>
      <div className="ml-8">
        {/* <img src="" alt="Product" className="h-40 object-cover"/> */}
      </div>
    </main>
  );
}

export default Hero;

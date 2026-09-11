
import heroImage from "../assets/banner-stack.png";
const Hero = () => {
  return (
    <section
      id="home"
      className="overflow-hidden bg-white"
    >
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">

        {/* Left Content */}
        <div className="text-center lg:text-left">

          {/* Small Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-medium text-pink-600">
            <span className="h-2 w-2 rounded-full bg-pink-500"></span>
            Build Your Perfect Tech Stack
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">

            Build Your
            <br />

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0">
            Discover the best technologies for your next project.
            Choose powerful tools, build your custom development stack,
            and create modern applications with confidence.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

            {/* Explore Button */}
            <a
              href="#technologies"
              className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              Explore Technologies →
            </a>

            {/* Learn More Button */}
            <a
              href="#about"
              className="rounded-full border-2 border-gray-300 px-7 py-3.5 text-sm font-semibold text-gray-700 transition duration-300 hover:border-pink-500 hover:text-pink-500"
            >
              Learn More
            </a>
          </div>

          {/* Small Stats */}
          <div className="mt-10 flex items-center justify-center gap-8 lg:justify-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                15+
              </h3>
              <p className="text-sm text-gray-500">
                Technologies
              </p>
            </div>

            <div className="h-10 w-px bg-gray-200"></div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                7
              </h3>
              <p className="text-sm text-gray-500">
                Categories
              </p>
            </div>

            <div className="h-10 w-px bg-gray-200"></div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                4.9
              </h3>
              <p className="text-sm text-gray-500">
                Avg. Rating
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">

          {/* Background Glow */}
          <div className="absolute -z-10 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl sm:h-96 sm:w-96"></div>

          {/* Hero Image Card */}
          <div className="relative w-full max-w-lg">

            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 shadow-2xl">
              <img
                src={heroImage}
                alt="Developer working with modern technology"
                className="h-[320px] w-full rounded-2xl object-cover sm:h-[400px]"
              />
            </div>

            {/* Floating Card 1 */}
            <div className="absolute -left-4 top-10 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-xl">
                  ⚛️
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Popular
                  </p>
                  <p className="font-semibold text-gray-900">
                    React
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:-right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-xl">
                  ⭐
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Rating
                  </p>
                  <p className="font-semibold text-gray-900">
                    4.9 / 5.0
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
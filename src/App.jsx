import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import YourStack from "./components/YourStack";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      <main>
        <section
          id="technologies"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Explore Technologies
            </h2>

            <p className="mt-2 text-gray-600">
              Choose the technologies you want to add to your stack.
            </p>
          </div>

          {loading ? (
            <div className="py-20 text-center">
              <p className="text-lg font-medium text-gray-600">
                Loading technologies...
              </p>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
              
              {/* Technology Cards */}
              <TechnologyGrid
                technologies={technologies}
                stack={stack}
                onAddToStack={(technology) => {
                  setStack((prev) => [
                    ...prev,
                    technology,
                  ]);
                }}
              />

              {/* Your Stack */}
              <YourStack
                stack={stack}
                onRemove={() => {}}
                onRemoveAll={() => {}}
              />

            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
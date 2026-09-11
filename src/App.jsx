import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load technologies
  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to load technologies.");
        setLoading(false);
      });
  }, []);

  // Add technology
  const handleAddToStack = (technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);

      return;
    }

    setStack((prev) => [...prev, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove technology
  const handleRemove = (id) => {
    const removedTechnology = stack.find((item) => item.id === id);

    setStack((prev) => prev.filter((item) => item.id !== id));

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack.`);
    }
  };

  // Remove all
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Hero />

      <main>
        <section
          id="technologies"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          {/* Section Heading */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Explore Technologies
            </h2>

            <p className="mt-2 text-gray-600">
              Discover the technologies and build your perfect development
              stack.
            </p>
          </div>

          {/* Loading */}
          {loading ? (
            <div className="flex min-h-[300px] items-center justify-center">
              <p className="text-lg font-medium text-gray-600">
                Loading technologies...
              </p>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
              {/* Technology Grid */}
              <TechnologyGrid
                technologies={technologies}
                stack={stack}
                onAddToStack={handleAddToStack}
              />

              {/* Sidebar */}
              <YourStack
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

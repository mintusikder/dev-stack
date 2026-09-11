import TechnologyCard from "./TechnologyCard";

const TechnologyGrid = ({
  technologies,
  stack,
  onAddToStack,
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {technologies.map((technology) => {
        const isAdded = stack.some(
          (item) => item.id === technology.id
        );

        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            onAddToStack={onAddToStack}
            isAdded={isAdded}
          />
        );
      })}
    </div>
  );
};

export default TechnologyGrid;
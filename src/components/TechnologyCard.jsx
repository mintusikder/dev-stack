import { FiStar } from "react-icons/fi";

const TechnologyCard = ({ technology, onAddToStack, isAdded }) => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      {/* Top: Icon + Badge */}
      <div className="mb-5 flex items-start justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-50 p-3">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="rounded-full bg-gradient-to-r from-orange-100 via-pink-100 to-violet-100 px-3 py-1 text-xs font-semibold text-pink-600">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mb-2 text-xl font-bold text-gray-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mb-5 line-clamp-3 flex-1 text-sm leading-6 text-gray-600">
        {technology.description}
      </p>

      {/* Category + Difficulty */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
          {technology.category}
        </span>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
          {technology.difficulty}
        </span>
      </div>

      {/* Rating */}
      <div className="mb-5 flex items-center gap-1 text-sm">
        <FiStar className="fill-yellow-400 text-yellow-400" />

        <span className="font-semibold text-gray-800">
          {technology.rating}
        </span>

        <span className="text-gray-500">/ 5</span>
      </div>

      {/* Add Button */}
      <button
        onClick={() => onAddToStack(technology)}
        disabled={isAdded}
        className={`w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-gray-200 text-gray-500"
            : "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white shadow-md hover:scale-[1.02] hover:shadow-lg"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
import { FiX, FiTrash2 } from "react-icons/fi";

const YourStack = ({
  stack,
  onRemove,
  onRemoveAll,
}) => {
  return (
    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">

      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {stack.length}{" "}
            {stack.length === 1
              ? "Technology"
              : "Technologies"}{" "}
            Selected
          </p>
        </div>

        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="flex items-center gap-1 text-sm font-medium text-red-500 transition hover:text-red-700"
          >
            <FiTrash2 />
            Remove All
          </button>
        )}
      </div>

      {/* Empty State */}
      {stack.length === 0 && (
        <div className="rounded-xl bg-gray-50 px-5 py-10 text-center">
          <p className="text-sm font-medium text-gray-500">
            Your stack is empty
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Add technologies to build your stack.
          </p>
        </div>
      )}

      {/* Selected Items */}
      {stack.length > 0 && (
        <div className="space-y-3">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3"
            >
              {/* Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-2">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Information */}
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-semibold text-gray-900">
                  {technology.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {technology.category}
                </p>
              </div>

              {/* Remove */}
              <button
                onClick={() => onRemove(technology.id)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                aria-label={`Remove ${technology.name}`}
              >
                <FiX />
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};

export default YourStack;
import { FaTrash, FaRedo } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export default function QueryHistory({ history, onRerun, onRemove }) {
  if (history.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Query History</h2>
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          <p>No queries yet. Start by asking a question!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 h-[calc(100vh-2rem)] overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 sticky top-0 bg-white dark:bg-gray-800 py-2">
        Query History
      </h2>
      <div className="space-y-3">
        {history.map((item) => (
          <div
            key={item.id}
            className="group relative bg-gray-50 dark:bg-gray-700 rounded-xl p-4 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <p className="text-gray-800 dark:text-gray-200 font-medium line-clamp-2">
                  {item.query}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {new Date(item.timestamp).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRerun(item.query);
                  }}
                  className="p-2 text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
                  title="Rerun query"
                >
                  <FaRedo className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemove(item.id);
                  }}
                  className="p-2 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
                  title="Remove from history"
                >
                  <FaTrash className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
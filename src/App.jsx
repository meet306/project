import { useSelector, useDispatch } from 'react-redux';
import { FaMoon, FaSun } from 'react-icons/fa';
import QueryInput from './components/QueryInput';
import QueryHistory from './components/QueryHistory';
import ResultsVisualizer from './components/ResultsVisualizer';
import { 
  toggleDarkMode, 
  setLoading, 
  setError, 
  setResults, 
  addToHistory, 
  removeFromHistory 
} from './store/slices/querySlice';

// Mock data generator
const generateMockData = (query) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  return months.map(month => ({
    name: month,
    value: Math.floor(Math.random() * 1000)
  }));
};

function App() {
  const dispatch = useDispatch();
  const { isDark, isLoading, error, results, history } = useSelector((state) => state.query);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
    document.documentElement.classList.toggle('dark');
  };

  const handleQuerySubmit = async (query) => {
    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockData = generateMockData(query);
      dispatch(setResults(mockData));
      
      dispatch(addToHistory({
        id: Date.now(),
        query,
        timestamp: new Date().toISOString(),
        results: mockData
      }));
    } catch (err) {
      dispatch(setError('Failed to process query. Please try again.'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleRerun = (query) => {
    handleQuerySubmit(query);
  };

  const handleRemoveFromHistory = (id) => {
    dispatch(removeFromHistory(id));
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Gen AI Analytics
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleToggleDarkMode}
              className="p-3 rounded-xl bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-800 dark:text-gray-200 hover:scale-105"
            >
              {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-[2fr,1fr] gap-8">
          <div className="flex flex-col gap-8">
            <QueryInput onSubmit={handleQuerySubmit} isLoading={isLoading} />
            
            <ResultsVisualizer
              data={results}
              isLoading={isLoading}
              error={error}
            />
          </div>
          
          <QueryHistory
            history={history}
            onRerun={handleRerun}
            onRemove={handleRemoveFromHistory}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
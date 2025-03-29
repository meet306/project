# Gen AI Analytics Dashboard

A modern, responsive React dashboard for visualizing business analytics data through natural language queries. This project demonstrates the integration of various modern web technologies to create an intuitive and powerful analytics interface.

## link of project

  https://aesthetic-gnome-8864d8.netlify.app/

##  Features

- **Natural Language Queries**: Input business questions in plain English
- **Interactive Data Visualization**: Dynamic charts powered by Recharts
- **Query History Management**: Track and rerun previous queries
- **Dark Mode Support**: Toggle between light and dark themes
- **Responsive Design**: Optimized for all screen sizes
- **CSV Export**: Download query results for further analysis

##  Technologies Used

- **React 18**: Modern UI development
- **Redux Toolkit**: State management
- **Tailwind CSS**: Utility-first styling
- **Recharts**: Data visualization
- **React Icons**: Beautiful icon components
- **Vite**: Next-generation frontend tooling

##  Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gen-ai-analytics.git
```

2. Navigate to the project directory:
```bash
cd gen-ai-analytics
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

##  Project Structure

```
src/
├── components/           # React components
│   ├── QueryInput.jsx   # Search input with suggestions
│   ├── QueryHistory.jsx # History management
│   └── ResultsVisualizer.jsx # Data visualization
├── store/               # Redux store configuration
│   ├── store.js        # Redux store setup
│   └── slices/         # Redux slices
│       └── querySlice.js # Query-related state management
├── App.jsx             # Main application component
└── main.jsx           # Application entry point
```

##  How It Works

1. **Query Input**:
   - Users enter business questions in natural language
   - Auto-suggestions provide query examples
   - Input is processed and validated

2. **Data Processing**:
   - Queries are processed through a mock API
   - Results are generated based on query patterns
   - Loading states and error handling are managed

3. **Visualization**:
   - Data is displayed using various chart types
   - Users can switch between line, bar, and pie charts
   - Charts are responsive and interactive

4. **State Management**:
   - Redux Toolkit manages application state
   - Actions handle query processing and results
   - State includes dark mode, loading, errors, and history

5. **History Management**:
   - Previous queries are stored in Redux
   - Users can rerun or remove historical queries
   - History persists during the session

##  Styling

The project uses Tailwind CSS for styling with:
- Custom color schemes
- Responsive design patterns
- Dark mode support
- Smooth transitions
- Modern UI components

##  Configuration

Key configuration files:
- `vite.config.js`: Vite configuration
- `tailwind.config.js`: Tailwind CSS settings
- `eslint.config.js`: ESLint rules
- `package.json`: Project dependencies

##  Future Enhancements

- Real API integration
- Authentication system
- More visualization options
- Data export formats
- Query suggestions based on history
- Persistent storage
- Custom chart theming

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

##  Authors

- Your Name - meet patel

##  Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Recharts for the powerful charting library
- Redux team for state management solutions
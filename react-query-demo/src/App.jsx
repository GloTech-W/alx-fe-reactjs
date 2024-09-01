import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent'; // Adjust path if needed
import './App.css';

// Create a client instance for React Query
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;

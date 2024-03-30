import { createContext, useState } from 'react';

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const loadingIndicator = loading ? (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 -mt-20 border-gray-900"></div>
    </div>
  ) : null;

  return (
    <LoadingContext.Provider value={{ loading, setLoading, loadingIndicator }}>
      {children}
    </LoadingContext.Provider>
  );
};


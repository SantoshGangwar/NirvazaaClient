import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white text-gray-800 p-8 rounded-lg text-center shadow-lg">
        <p className="text-5xl font-bold mb-6 text-red-600">Oops! Something Went Wrong</p>
        <p className="text-xl mb-6">
          We encountered an unexpected error while trying to process your request.
        </p>
        <p className="text-lg mb-6">
          Please try again later or contact support if the problem persists.
        </p>
        {error && (
          <div className="text-left">
            <p className="text-lg mb-2">
              <strong>Error Status:</strong> {error.status || 'Unknown'}
            </p>
            {error.statusText && (
              <p className="text-lg mb-2">
                <strong>Error Message:</strong> {error.statusText}
              </p>
            )}
            {error.message && (
              <p className="text-lg mb-2">
                <strong>Details:</strong> {error.message}
              </p>
            )}
            {/* Add more error-related information here */}
          </div>
        )}
        {/* Add additional content or links here */}
      </div>
    </div>
  );
};

export default ErrorPage;

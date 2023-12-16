import React, { useState } from 'react';
import Header from '../components/Header';

const Home = () => {
  const [requirements, setRequirements] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');

  const handleGenerateCode = async () => {
    // Call OpenAI GPT-4 API to generate code
    // This is a placeholder, replace with actual API call
    const response = await fetch('/api/generateCode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ requirements }),
    });

    const data = await response.json();
    setGeneratedCode(data.code);
  };

  return (
    <div className="p-5">
      <Header />
      <div className="mt-5">
        <textarea
          className="w-full h-64 p-2 border-2 border-gray-300 rounded-md"
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          placeholder="Enter your requirements here..."
        />
        <button
          className="mt-5 bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleGenerateCode}
        >
          Generate Code
        </button>
      </div>
      {generatedCode && (
        <div className="mt-5">
          <h2 className="text-2xl mb-2">Generated Code:</h2>
          <pre className="p-2 bg-gray-100 rounded-md">{generatedCode}</pre>
        </div>
      )}
    </div>
  );
};

export default Home;
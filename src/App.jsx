import React from 'react';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Acksh</h1>
      
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="React Developer"
          className="border p-2 w-1/4"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Client</button>
      </div>
      
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="p-2 border-b">#</th>
            <th className="p-2 border-b text-left">Client</th>
            <th className="p-2 border-b text-left">Email ID</th>
            <th className="p-2 border-b text-left">Website</th>
            <th className="p-2 border-b text-left">Location</th>
            <th className="p-2 border-b text-left">Industry</th>
            <th className="p-2 border-b text-left">Federal ID</th>
            <th className="p-2 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(14)].map((_, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="p-2 border-b">{index + 1}</td>
              <td className="p-2 border-b">clientname</td>
              <td className="p-2 border-b">clientname@gmail.com</td>
              <td className="p-2 border-b">clientwebsite.com</td>
              <td className="p-2 border-b">Location, State, IN</td>
              <td className="p-2 border-b">Software</td>
              <td className="p-2 border-b">5463721</td>
              <td className="p-2 border-b text-center">
                <button className="text-blue-500">📧</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <p>Showing 1 to 14 of 1000 results</p>
        <div className="flex items-center space-x-2">
          <p>Go to page</p>
          <input
            type="text"
            className="border p-1 w-12"
            defaultValue="23"
          />
          <button className="bg-blue-500 text-white px-2 py-1 rounded">Go</button>
        </div>
      </div>
    </div>
  );
}

export default App;
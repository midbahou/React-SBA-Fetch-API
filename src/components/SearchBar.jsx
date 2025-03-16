import { useState } from "react"


function SearchBar({ onSearch }) {
    const [search, setSearch] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearch(value) // update the search state as the user types
    };
    
    const handleSearchClick = () => {
        onSearch(search); // trigger the search with the current search
    }


  return (
    <div className="mb-6 flex">
      <input 
      type="text"
      placeholder="Search for a game..."
      value={search}
      onChange={handleInputChange}
      className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
      />

      <button
      onClick={handleSearchClick}
      className="px-4 py-2 bg-blue-500 text-white font-medium rounded-r-md hover:bg-blue-600 transition-colors cursor-pointer"
      >Search</button>
    </div>
  )
}

export default SearchBar

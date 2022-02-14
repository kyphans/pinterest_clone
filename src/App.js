import './App.css';
import Header from './components/Header';
import unsplash from './api/unsplash';
import { useState } from 'react';

function App() {

  const [pins, setPins] = useState([])

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      }
    })
  }

  const handleFilterChange = (value) => {
    console.log('Search: ', value.searchTerm);
    if (value.searchTerm) {
      getImages(value.searchTerm).then(res => {
        let results = res.data.results

        let newPins = [
          ...results,
          ...pins,
        ]

        newPins.sort((a, b) => {
          return 0.5 - Math.random()
        })

        setPins(newPins)

      })
    }
  }

  // handleFilterChange("bali")
  console.log(pins);

  return (
    <div className="App">
      <Header
        onSubmit={handleFilterChange}
      />
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import unsplash from './api/unsplash';
import { useEffect, useState } from 'react';
import Mainboard from './components/Mainboard';

function App() {

  const [pins, setPins] = useState([])

  const getNewPins = () => {
    let promise = []
    let pinData = []

    let pins = ['cat', 'dog', 'ocen', 'cute', 'animal']

    pins.forEach((pinTerm) => {
      promise.push(
        getImages(pinTerm).then(res => {
          let results = res.data.results

          pinData = pinData.concat(results)

          pinData.sort((a, b) => {
            return 0.5 - Math.random
          })
        })
      )
    })

    Promise.all(promise).then(res => {
      setPins(pinData)
    })
  }
  useEffect(() => {
    getNewPins()
  }, [])

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      }
    })
  }

  const handleSearchChange = (value) => {
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

  // handleSearchChange("bali")

  return (
    <div className="App">
      <Header
        onSubmit={handleSearchChange}
      />
      <Mainboard
        pins={pins}
      />
    </div>
  );
}

export default App;

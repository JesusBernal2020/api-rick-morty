import { useEffect, useState } from 'react';
import './App.css'
import LocationInput from './components/LocationInput';
import Resident from './components/Resident';
import axios from 'axios';
import ResidentList from './components/ResidentList';
import { getRandomDimencion } from './utils/random';

function App() {
  const [locattion, setLocattion] = useState(null)

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimencion()}`;

    axios.get(URL)
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err))

  }, [])


  return (
    <main className="text-[#8EFF8B] font-['Fira_Code']">
      <header className="bg-[url(/images/bgHeader.png)] w-[100%] min-h-[200px] bg-cover bg-center">
        <div className="bg-[url(/images/logoRickAndMorty.png)] h-[250px] min-[700px]:h-[350px] bg-cover bg-center min-[1000px]:h-[400px] min-[1400px]:h-[600px]"></div>
        <section>
          <LocationInput locattion={locattion} setLocattion ={setLocattion} />
        </section>
      </header>
      <section className="bg-[url(/images/bgPage.png)] min-h-[500px] bg-cover bg-center">
        <ResidentList locattion={locattion} residents={locattion?.residents} />
      </section>
    </main>
  );
}

export default App

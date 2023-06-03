import './App.css'
import LocationInput from './components/LocationInput';
import Resident from './components/Resident';

function App() {


  return (
    <main className="text-[#8EFF8B] font-['Fira_Code']">
      <header className="bg-[url(/images/bgHeader.png)] w-[100%] min-h-[200px] bg-cover bg-center">
        <div className="bg-[url(/images/logoRickAndMorty.png)] h-[250px] min-[700px]:h-[350px] bg-cover bg-center min-[1000px]:h-[400px] min-[1400px]:h-[600px]"></div>
        <section>
          <LocationInput />
        </section>
      </header>
      <section className="bg-[url(/images/bgPage.png)] min-h-[200px] bg-cover bg-center">
        <Resident />
      </section>
    </main>
  );
}

export default App

import CardsContainer from './components/CardsContainer';
import Hero from './components/Hero';
import Section from './components/Section';

function App() {
  return (
    <div className="bg-neutral-950 h-screen overflow-hidden text-neutral-200 flex flex-col">
      <Hero />
      <Section>
        <CardsContainer />
      </Section>
    </div>
  );
}

export default App;

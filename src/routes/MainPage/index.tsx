import Header from "../../components/Header";
import CarCard from "../../components/CarCard";

export default function App() {

  return (
    <>
      <Header />
      <main className="dsct-page-main">
        <section id="car-card-section" className="dsct-container">
          <CarCard /> 
          
        </section>
      </main>
    </>
  );
}

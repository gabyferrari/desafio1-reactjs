import Header from "../../components/Header";
import CarCard from "../../components/CarCard";
import Comments from "../../components/Comments";

export default function App() {

  return (
    <>
      <Header />
      <main className="dsct-page-main">
        <section id="car-card-section" className="dsct-container">
          <CarCard /> 
        </section>
        <section id="comments-section">
          <Comments />
        </section>
      </main>
    </>
  );
}

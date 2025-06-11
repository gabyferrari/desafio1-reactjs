import './styles.css'
import Header from "../../components/Header";
import CarCard from "../../components/CarCard";
import Comments from "../../components/Comments";
import Footer from "../../components/Footer";

export default function MainPage() {

  return (
    <>
      <Header />
      <main>
        <section id="car-card-section">
          <CarCard /> 
        </section>
        <section id="comments-section">
          <Comments />
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

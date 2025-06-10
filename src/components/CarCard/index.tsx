import "./styles.css";
import carImg from '../../assets/car.png'

export default function App() {

  return (
    <div className="dsct-card-container">
      <h2>Venha nos visitar</h2>
      <div className="dsct-car-card">
        <img src={carImg} alt="Carro" />
        <h3>Lorem ipsum dolor</h3>
      </div>

      <div className="dsct-car-card">
        <img src={carImg} alt="Carro" />
        <h3>Lorem ipsum dolor</h3>
      </div>
    </div>
  );
}

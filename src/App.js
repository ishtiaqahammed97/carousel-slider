import './App.css';
import ResponsiveCarousel from './components/ResponsiveSlider';

function App() {
  return (
    <div className="App">
      <h4 className='slider'>
      As we smaller the device, responsiveness work smoothly.
      But, after making the screen small if we stretch the screen it dosen't work the way we expect to be.
      A gentle refresh can help.
      </h4>
      <ResponsiveCarousel />
    </div>
  );
}

export default App;

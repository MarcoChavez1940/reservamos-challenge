import './App.css';
import Layout from './components/Layout';
import SearchCityWeather from './components/SearchCityWeather/SearchCityWeather';

function App() {
  return (
    <div className="App">
      <Layout>
        <SearchCityWeather />
      </Layout>
    </div>
  );
}

export default App;

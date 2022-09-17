import './App.css';
import Header from './Header';
import PageContent from './PageContent';
import Welcome from './Welcome';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <PageContent/>
      <Footer/>
    </div>
  );
}

export default App;

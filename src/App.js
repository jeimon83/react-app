import Navbar from "./components/navbar/Navbar.js";
import ItemListContainer from './containers/ItemListContainer';

const App = () => {
  return (
    <>
      <div className="header-grid">
        <Navbar />
      </div>
      <div>
        <ItemListContainer minStock={1} />
      </div>
    </>
  );
}

export default App;

import StickyFooter from "./components/footer/footer.js";
import Navbar from "./components/navbar/navbar.js";
import TestBar from "./components/testbar/testbar.js";
import ItemListContainer from './containers/ItemListContainer.jsx';

const App = () => {
  return (
    <>
    <header></header>
    <div className="header-grid">
      <Navbar />
    </div>
    <div>
      <ItemListContainer minStock={1} />
    </div>
    
    {/* <TestBar /> */}
    </>
  );
}

export default App;

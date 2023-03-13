import NavBar from './components/NavBar/index';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App(){
    return(
        <div>
            <NavBar />
            <ItemListContainer />
            <ItemCount />
        </div>
    )
}

export default App;
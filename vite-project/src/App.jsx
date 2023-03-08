import NavBar from './components/NavBar/index';
import ItemListContainer from './components/ItemListContainer';

function App(){
    const [greeting, setGreeting] = useState('Hola mundo');

    return(
        <div>
            <NavBar />
            <ItemListContainer greeting={greeting}/>
        </div>
    )
}

export default App;
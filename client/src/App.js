import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux'; //binds together redux with react.
import store from './store';

// wrap everything in Provider and use store as prop for provider so we can share state between components
function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<AppNavbar />
				<Container>
					<ItemModal />
					<ShoppingList />
				</Container>
			</div>
		</Provider>
	);
}

export default App;

import './App.css';
import Products from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';
import WithHeader from './WithHeader';
import UserForm from './UserForm';

function App() {
  // por que essa funcao deve estar aqui dentro? é mais lógico?

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  const user = {
    firstName: 'Luiz',
    lastName: 'Herbet',
    imageUrl: 'https://picsum.photos/200/300',
  };

  const isValid = true;

  return (
    <div className="App">
      <h1>React App, {formatName(user)}</h1>
      {/* <img src={user.imageUrl} /> */}
      <WithHeader>
        <p>Teste de texto como children</p>
      </WithHeader>
      <Products />
      {/* <Button variant="danger" disabled={!isValid}>
        Comprar
      </Button>
      <Rating rating="1" numOfReviews></Rating> */}
      <UserForm />
    </div>
  );
}

export default App;

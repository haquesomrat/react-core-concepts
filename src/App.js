import logo from './logo.svg';
import './App.css';

function App() {
  const names = ['Injamul', 'haque', 'somrat', 'anika', 'akter', 'asha'];
  const cinemas = [
    { nayok: 'kobber', nayika: 'kopila' },
    { nayok: 'rubel', nayika: 'moushumi' },
    { nayok: 'razzak', nayika: 'shabana' },
    { nayok: 'jashim', nayika: 'Champa' }
  ]
  return (
    <div className="App">
      <ul>

        {
          names.map(name => <li>{name}</li>)
        }
        {/* <Cinema nayok='J bond' nayika='Catwomen'></Cinema> */}
        {
          cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
        }
      </ul>
      <Person name={names[0]} wife="Anika"></Person>
      <Person name={names[1]} wife="Asha"></Person>
      <Person></Person>
      <Person name={names[2]} wife="Asha"></Person>
      <Person></Person>

    </div>
  );
}

/* 
  <Person name="Somrat" wife="Anika"></Person>
  <Person wife="Asha"></Person>
  <Person></Person>
  
 */
function Person(props) {
  console.log(props);
  const person = {
    backgroundColor: 'yellow',
    border: '10px solid lightsalmon',
    margin: '20px',
    borderRadius: '10px'
  }
  return (
    <div style={person}>
      <h1>Name: {props.name}</h1>
      <h4>Wife: {props.wife}</h4>
    </div>
  );
}
/* 
<Friend phone="01754020022" address="IUT Road"></Friend>
      <Friend phone="01973745665" address="kalemeshor bazar"></Friend>
      <Friend phone="01782862341" address="Duniar bahire"></Friend>
*/
function Cinema(props) {
  return (
    <div className="person">
      <h2>Nayok: {props.nayok}</h2>
      <h4>Nayika:{props.nayika}</h4>
    </div>
  )
}

function Friend(props) {
  console.log(props)
  return (
    <div className="person">
      <h3>Phone: {props.phone} </h3>
      <h5>Address: {props.address}</h5>
    </div>
  );
}

export default App;

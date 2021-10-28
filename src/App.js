import logo from './logo.svg';
import './App.css';

import PersonCard from "./Components/PersonCard"

var people =[
  {"firstName": "Jane", "lastName": "Doe", "age": 45, "hair": "brown"}, 
  {"firstName": "John", "lastName": "Smith", "age": 88, "hair": "brown"},
  {"firstName": "Millard", "lastName": "Fillmore", "age": 50, "hair": "brown"},
  {"firstName": "Maria", "lastName": "Smith", "age": 62, "hair": "brown"}
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {people.map((persons)=>{
          return <PersonCard firstName={persons.firstName} lastName={persons.lastName} age={persons.age} hair={persons.hair}>
        </PersonCard>
        })}
      </header>
    </div>
  );
}

export default App;

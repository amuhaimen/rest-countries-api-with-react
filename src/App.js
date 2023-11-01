import "./App.css";
import Countries from "./components/countries/Countries";
import Posts from "./components/posts/Posts";

function App() {
  return (
    <div className="App">
      {/* <Mobile /> */}
      <Countries />
      {/* <Posts /> */}
      {/* <Todo /> */}
    </div>
  );
}

export default App;

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => setCountries(data));
//   }, []);

//   return (
//     <div>
//       <h1>Visiting every countries of the world</h1>
//       <h2>Available Countries:{countries.length}</h2>
//       {countries.map((country) => (
//         <Country
//           name={country.name.common}
//           src={country.flags.png}
//           population={country.population}
//           capital={country.capital}
//         />
//       ))}
//     </div>
//   );
// }

// function Country(props) {
//   return (
//     <div className="country">
//       <h1> Name: {props.name}</h1>
//       <h2>Capital: {props.capital}</h2>
//       <h4>Population: {props.population}</h4>
//       <img src={props.src} />
//     </div>
//   );
// }

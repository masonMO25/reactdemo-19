import CatCard from "./components/CatCard";
import GroceryCard from "./components/groceryCard";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import UserCard from "./components/UserCard";
import catsData from "./data/cats";
import groceriesData from "./data/groceries";
import userData from "./data/users";

function App() {
  return (
    <>
      <NavBar />
      <Header text="Hello 🐱" />

      {catsData.map((cat) => {
        return <CatCard cat={cat} key={cat.id} />;
      })}

      <ul>
        {groceriesData.map((grocery) => {
          return <GroceryCard grocery={grocery} key={grocery.id} />;
        })}
      </ul>

      {userData.map((user) => {
        return <UserCard user={user} key={user.id.value} />;
      })}
    </>
  );
}

export default App;

//* <CatCard cat={catsData[0]} />

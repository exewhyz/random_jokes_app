import Jokes from "./components/Jokes";

const App = () => {
  return (
    <main className="container px-10 py-4 h-full w-full">
      <h1 className="text-4xl font-bold">All Jokes</h1>
      <Jokes />
    </main>
  );
};

export default App;

// https://github.com/exewhyz/random_jokes_app.git

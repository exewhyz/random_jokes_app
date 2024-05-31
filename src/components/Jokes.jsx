import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

const Jokes = () => {
  const [jokes, setJokes] = useState([]);
  const [category, setCategory] = useState("all");
  const [count, setCount] = useState("ten");
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce(search, 500);

  useEffect(() => {
    async function randomJokes() {
      try {
        const apiLink =
          category === "all"
            ? `https://official-joke-api.appspot.com/jokes/ten`
            : `https://official-joke-api.appspot.com/jokes/${category}/${count}`;

        const response = await fetch(apiLink);

        const data = await response.json();

        setJokes(data);

        // console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    randomJokes();
  }, [category, count]);

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleCount = (event) => {
    setCount(event.target.value);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  console.log(debouncedValue);

  return (
    <>
      <section className="gap-y-4">
        <div className="flex justify-end gap-x-5">
          <div className="border flex items-center justify-center px-2 py-1 rounded-xl gap-4">
            <span className="font-medium text-sm text-gray-600">Search</span>
            <input
              type="text"
              className="outline-none text-sm text-gray-600"
              placeholder="Search Joke"
              value={search}
              onChange={handleSearch}
            />
          </div>
          <select className="p-2 rounded-lg border-2" onChange={handleCategory}>
            <option value="all" className="bg-gray-200">
              All
            </option>
            <option value="general" className="bg-gray-200">
              General
            </option>
            <option value="programming" className="bg-gray-200">
              Programming
            </option>
            <option value="knock-knock" className="bg-gray-200">
              Knock Knock
            </option>
          </select>
          <select className="p-2 rounded-lg border-2" onChange={handleCount}>
            <option value="two">2</option>
            <option value="five">5</option>
            <option value="ten" selected>
              10
            </option>
            <option value="fifteen">15</option>
            <option value="twenty">20</option>
          </select>
        </div>
        <div className="my-5 gap-y-3 gap-x-5 flex flex-wrap justify-center">
          {jokes.length > 0 ? (
            jokes.map((joke) => {
              return (
                <div
                  className="h-fit w-60 flex items-center p-4 border shadow-sm"
                  key={joke.id}
                >
                  <dl>
                    <dt className="bg-yellow-200 inline-flex items-center justify-center rounded-full text-sm text-gray-800 px-2 py-1 capitalize mb-2">
                      {joke.type}
                    </dt>
                    <dd className="gap-y-2">
                      <p>{joke.setup}</p>
                      <p>{joke.punchline}</p>
                    </dd>
                  </dl>
                </div>
              );
            })
          ) : (
            <div className="font-semibold text-2xl flex items-center justify-center h-full p-4">
              No Jokes Available Right Now...Please Come after Sometime
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Jokes;

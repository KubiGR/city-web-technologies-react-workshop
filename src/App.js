const App = () => {
  const site = {
    homepage: "www.google.com",
  };

  const user = {
    name: "Dobby",
  };

  function formatName(user) {
    return `Banana ${user.name}`;
  }

  return (
    <div className="app">
      <h1>React is {5 + 5} times better with JSX</h1>
      <a href={site.homepage}>
        <h1>Homepage</h1>
      </a>
      <h1>Hello, {formatName(user)}!</h1>
    </div>
  );
};

export default App;

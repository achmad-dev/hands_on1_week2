const umu = <p>Hello</p>;

const label = <label htmlFor="search">Search: </label>;
const search_input = <input id="search" type="text" />;
const image = <img src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif" alt="media"/>;
const button = <button id="find">Search</button>;

const ExpressionInsideJSX = () => (
  <div>
    {umu}
    <p>{label}</p>
    <p>{search_input}{button}</p>
    <p>{image}</p>
  </div>
);

const SomeThing = () => <ExpressionInsideJSX />;

export default SomeThing;

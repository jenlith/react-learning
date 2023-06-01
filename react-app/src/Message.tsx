// component creation method 1: JS classes
// component creation method 2: function-based (more popular - concise, easier to write). recommended

// rule for function components: PascalCasing
function Message() {
  // JSX: JavaScript XML
  let name = getName(); //TODO: double-check best practices
  if (name) {
    return <h1>Hello {name}</h1>;
  }
  return <h1>Hello World</h1>;
}

function getName() {
  return '';
}

export default Message;
// TODO: research what import/export means with JS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

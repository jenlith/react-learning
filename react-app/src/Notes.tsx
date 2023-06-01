function Notes() {
  return (
    <div>
      <OverviewNote /> <ReactFunctionalityNote /> <PropsVsStateTable />
    </div>
  );
}

function OverviewNote() {
  return (
    <ul hidden>
      <li>
        node_modules: 3rd party libraries (e.g. React) are installed here. Never
        have to touch it.
      </li>
      <li>public: public assets of website (e.g. images, videos) kept here.</li>
      <li>src: source code of app.</li>
      <li>index.html: basic html template.</li>
      <li>package.json: info about project.</li>
      <li>
        tsconfig.json: typescript config file. Usually don't have to touch.
      </li>
      <li>vite.config.ts: vite config file. Usually don't have to touch.</li>
      <li>
        ext of typescript files: .tsx (usually for react components), .ts
        (usually for plain)
      </li>
    </ul>
  );
}

function ReactFunctionalityNote() {
  return (
    <ul hidden>
      <li>
        <b>
          React is a UI library that allows a webpage to be responsive and
          reactive.
        </b>
      </li>
      <li>
        React doesn't care about what other tools we use, so we're free to make
        what choices we want about it.
      </li>
      <li>
        React is not used for:
        <ul>
          <li>Routing (going between pages)</li>
          <li>HTTP (making calls)</li>
          <li>Managing app state</li>
          <li>Internationalization</li>
          <li>Form validation</li>
          <li>etc.</li>
        </ul>
      </li>
    </ul>
  );
}

function PropsVsStateTable() {
  return (
    <table className="table" hidden>
      <thead>
        <tr>
          <th scope="col" className="table-primary">
            Props
          </th>
          <th scope="col" className="table-secondary">
            State
          </th>
        </tr>
      </thead>
      <tbody>
        {/* <tr className="table-secondary"> */}
        <tr>
          {/* <th scope="row">1</th> */}
          <td>Input passed into a component</td>
          <td>Data managed by a component</td>
        </tr>
        <tr>
          <td>Similar to function args</td>
          <td>Similar to local vars</td>
        </tr>
        <tr>
          <td>Immutable (unchangeable/read-only)</td>
          <td>Mutable (changeable/read & write)</td>
        </tr>
        <tr>
          <td colSpan={2} >Cause a re-render</td>
          {/* FIXME: center td between columns it spans */}
        </tr>
      </tbody>
    </table>
  );
}


export default Notes;

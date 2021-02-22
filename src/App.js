import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// components
import BookList from "./components/BookList";

// apollo client setup

const client = new ApolloClient({
  uri: "http://localhost:7000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Hello World</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;

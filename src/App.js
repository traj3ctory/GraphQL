import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import "bootstrap/dist/css/bootstrap.min.css";

// apollo client setup

const client = new ApolloClient({
  uri: "http://localhost:4040/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-8">
            <BookList />
          </div>
          <div className="col-md-4">
            <AddBook />
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;

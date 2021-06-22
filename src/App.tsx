import { Route, BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

export const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthProvider>
    </Router>
  );
};

export default App;

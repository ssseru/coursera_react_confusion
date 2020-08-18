// Sai Sagar Seru
import React from "react";
import Main from "./components/MainComponent";
import "./App.css";
import { BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux"
import {ConfigureStore} from "./redux/configureStore"
const store = ConfigureStore()
// Provider: React Store becomes available to all the components within my React application. So, that's the change that I need to make to the app.js file. Now, the last step is to make use of the connect from react-redux to connect my React application to the Redux Store
class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter >
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

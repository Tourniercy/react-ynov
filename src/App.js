import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {MainRouter,AuthRouter} from "../../react-ynov/src/routes";
import NotFound from "../../react-ynov/src/pages/NotFound";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/404" component={NotFound}/>
                    <Route path="/auth" component={AuthRouter}/>
                    <Route path="/" component={MainRouter}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;





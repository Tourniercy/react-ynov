import {BrowserRouter, Route, Switch} from "react-router-dom";
import {MainRouter,AuthRouter} from "../../routes";
import NotFound from "../../pages/NotFound";

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

import React from 'react';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import App from '../App';
import ApiCallTest from '../component/ApiCallTest';

const Routing = () => {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/apiCallTest">ApiCallTest</Link>
                    </li>

                    <li>
                        <a href={'/test.html'}>test</a>
                    </li>

                </ul>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/apiCallTest" component={ApiCallTest} />
                </Switch>

            </div>
        </BrowserRouter>
    );
}

export default Routing;
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
import Events from './events/Events';
import NotFound from './not-found/NotFound';

const App = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <NavLink exact activeStyle={{ fontWeight: 'bold' }} to="/">Strona Domowa</NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={{ fontWeight: 'bold' }} to="/about">O stronie</NavLink>
                    </li>
                </ul>
                <Switch>
             
                    <Route path="/about" render={(props) => <p>To jest super strona o mnie</p>} />
                    <Route path="/" component={Events} />
                    <Route component={NotFound} />
                </Switch>

            </div>
        </Router>
    )
};

export default App;
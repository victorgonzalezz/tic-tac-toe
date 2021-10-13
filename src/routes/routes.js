import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GameBoard from '../containers/GameBoard';
import Scoreboard from '../containers/Scoreboard';
import Layout from '../components/Layout';

const Routes = () => {
    return (
        <Fragment>
            <Layout>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Scoreboard} />
                        <Route path="/board" component={GameBoard} />
                    </Switch>
                </BrowserRouter>
            </Layout>
        </Fragment>
    )
}

export default Routes;
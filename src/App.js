import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={"/"}>홈</Link>
                </li>
                <li>
                    <Link to={"/about"}>소개</Link>
                </li>
                {/*<li>
                    <Link to={"/profile/velopert"}>velopert 프로필</Link>
                </li>
                <li>
                    <Link to={"/profile/gildong"}>gildong 프로필</Link>
                </li>*/}
                <li>
                    <Link to={"/profiles"}>프로필</Link>
                </li>
                <li>
                    <Link to={"/history"}>History 예제</Link>
                </li>
            </ul>
            <hr/>
            <Switch>
                <Route path={"/"} component={Home} exact={true}/>
                <Route path={['/about', '/info']} component={About}/>
                {/*
            <Route path={"/profile/:username"} component={Profiles}/>
            */}
                <Route path={"/profiles"} component={Profiles}/>
                <Route path={"/history"} component={HistorySample}/>
                <Route
                    render={({location}) => (
                        <div>
                            <h2>이 페이지는 존재 X</h2>
                            <p>{location.pathname}</p>
                        </div>
                    )}
                />
            </Switch>
        </div>
    );
}

export default App;

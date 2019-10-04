import React from 'react';
import {Route, Link} from 'react-router-dom';
import Profile from './Profile';

/*

const data = {
    velopert: {
        name: '김민준',
        description: '리액트를 좋아'
    },
    gildong: {
        name: '홍길동',
        description: '고전소설 주인공'
    }
}
*/


const Profiles = () => {
    /*
    const {username} = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는...</div>;
    }
*/

    return (
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <Link to={"/profiles/velopert"}>velopert</Link>
                </li>
                <li>
                    <Link to={"/profiles/gildong"}>gildong</Link>
                </li>
            </ul>

            <Route
                path={"/profiles"}
                exact
                render={() => <div>사용자를 선택해 주세요</div>}
            />
            <Route path={"/profiles/:username"} component={Profile}/>
        </div>
    );
};

export default Profiles;

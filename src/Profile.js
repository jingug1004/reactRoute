import React from 'react';
import {withRouter} from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

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

const Profile = ({match}) => {
    const {username} = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는...</div>;
    }


    return (
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.description}</p>
            <WithRouterSample/>
        </div>
    );
};

export default withRouter(Profile);

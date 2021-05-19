import React from 'react';
import Customer from './components/Customer';
import './App.css';

const App = () => {
    const customers = [
        {
            id: 1,
            image: 'https://placeimg.com/64/64/any',
            name: '홍길동',
            birthday: '961222',
            gender: '남자',
            job: '대학생',
        },
        {
            id: 2,
            image: 'https://placeimg.com/64/64/any',
            name: '배진성',
            birthday: '950915',
            gender: '남자',
            job: '직장인',
        },
        {
            id: 3,
            image: 'https://placeimg.com/64/64/any',
            name: '김길동',
            birthday: '981231',
            gender: '여자',
            job: '프로그래머',
        },
    ];

    return (
        <div>
            {customers.map((c) => {
                return (
                    <Customer
                        key={c.id}
                        id={c.id}
                        image={c.image}
                        name={c.name}
                        birthday={c.birthday}
                        gender={c.gender}
                        job={c.job}
                    />
                );
            })}
            
        </div>
    );
};

export default App;

import React from 'react';
import Profile from './profile.js';
require('./products.less');
export default React.createClass({

    displayName: 'products',

    render(){
        const members = [
            {
                firstName: 'Alan',
                lastName: 'Johnson',
                ability: 'I have the ability to disappear after 5 o’clock.',
                aboutMe: 'I like challenges – once I was dared to create a bathing-suit. So I went out and I bought a sewing machine, fabric and some elastic.  By the end of the weekend I constructed a speedo, which I wore that summer.',
                background: 'I started in the 80’s with Commodore 64 and Basic, then Turbo Pascal -- I taught myself these languages and created a few programs -- this was how we refer to the apps then.',
                likes: 'I like to build things either within the virtual world or the real world. So when I am not building/fixing at work, I am renovating or gardening at home. I also enjoy food and good times with my family and friends.'
            },
            {
                firstName: 'Miguel',
                lastName: 'Julio',
                ability: 'I can see straigh people all the time.',
                aboutMe: 'I like challenges – once I was dared to create a bathing-suit. So I went out and I bought a sewing machine, fabric and some elastic.  By the end of the weekend I constructed a speedo, which I wore that summer.',
                background: 'I started in the 80’s with Commodore 64 and Basic, then Turbo Pascal -- I taught myself these languages and created a few programs -- this was how we refer to the apps then.',
                likes: 'I like to build things either within the virtual world or the real world. So when I am not building/fixing at work, I am renovating or gardening at home. I also enjoy food and good times with my family and friends.'
            },
            {
                firstName: 'alwin',
                lastName: 'Kuruvilla',
                ability: 'Space/Time manipulation.',
                aboutMe: 'I like challenges – once I was dared to create a bathing-suit. So I went out and I bought a sewing machine, fabric and some elastic.  By the end of the weekend I constructed a speedo, which I wore that summer.',
                background: 'I started in the 80’s with Commodore 64 and Basic, then Turbo Pascal -- I taught myself these languages and created a few programs -- this was how we refer to the apps then.',
                likes: 'I like to build things either within the virtual world or the real world. So when I am not building/fixing at work, I am renovating or gardening at home. I also enjoy food and good times with my family and friends.'
            },
            {
                firstName: 'Anoo',
                lastName: 'Muthuswaami',
                ability: 'Fear of heights 😁 . Of late, I consider myself a superhero if I can put my baby to sleep fast :).',
                aboutMe: 'I like challenges – once I was dared to create a bathing-suit. So I went out and I bought a sewing machine, fabric and some elastic.  By the end of the weekend I constructed a speedo, which I wore that summer.',
                background: 'I started in the 80’s with Commodore 64 and Basic, then Turbo Pascal -- I taught myself these languages and created a few programs -- this was how we refer to the apps then.',
                likes: 'I like to build things either within the virtual world or the real world. So when I am not building/fixing at work, I am renovating or gardening at home. I also enjoy food and good times with my family and friends.'
            },
            {
                firstName: 'Ana',
                lastName: 'Lyn Bacay',
                ability: 'Superwoman (I guess :p).',
                aboutMe: 'I like challenges – once I was dared to create a bathing-suit. So I went out and I bought a sewing machine, fabric and some elastic.  By the end of the weekend I constructed a speedo, which I wore that summer.',
                background: 'I started in the 80’s with Commodore 64 and Basic, then Turbo Pascal -- I taught myself these languages and created a few programs -- this was how we refer to the apps then.',
                likes: 'I like to build things either within the virtual world or the real world. So when I am not building/fixing at work, I am renovating or gardening at home. I also enjoy food and good times with my family and friends.'
            }
        ];
        return (
            <div className="members-container">
                {members.map(profile => {
                    return <Profile key={profile.lastName} {...profile} />
                })}
            </div>
        );
    }
});

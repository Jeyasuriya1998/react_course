import React from 'react';
import PersonName from './PersonName';

function NameListRender() {
    const namelist = ['Suriya', 'Iraianbu', "Saravana", "Suresh"]
    const namedetails = [
        {
            Name: "Suriya",
            age: 24,
            skill: 'Python',
        },
        {
            Name: "Iraianbu",
            age: 23,
            skill: "Sleep",
        },
        {
            Name: "Saravana",
            age: 29,
            skill: "Mech"
        },
        {
            Name:"Suresh",
            age: 24,
            skill: "Caroom",
        }
    ]
    const NameList = namedetails.map(name => <h1><PersonName person ={name}/></h1>)
  return (
    <div>
        {NameList}
    </div>
    );
}

export default NameListRender;

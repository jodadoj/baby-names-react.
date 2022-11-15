import { notDeepStrictEqual } from "assert";
import React, { useState, useEffect } from "react";
import babyNameData from './babyNamesData.json'

/*

export interface NameData{

}

interface BabyNameProps {
  nameData: NameData;
}

function BabyName(props: BabyNameProps): JSX.Element {
  const { name, id, sex } = props.nameDara;
  return <div className={"babyName "  +getClassForSex(sex)}>{name}, {id}
}

function getClassForSex(sex: sex): 

to do:

Import objects for each entry 
Key value pairs for each object
  What does this mean?
    Like, take the gender then say m/f for every one
      Where does this go?
retrieve gender key
apply formatting based on gender
*/

/*thought process was just make a type to import 
type baby= {
};


    function isGirl(gender:string) : boolean{
      if (gender==='f'){
        return true;
      }
      else{
        return false;
      }
    }
      return (
        <>
        {babyNameData.map((name) => {      
          return <div key={name.id}>
        </div>})
        }
        </>
*/

//const babyNames: string[] = []; //creates an empty string array
//but like of what?
//I don't think this actually does anything useful
//I think we already need to understand the objects
//Object.keys(babyNameData).map( (key:string) => babyNames.push(babyNameData[key] );

//call displayNames
//Take out gender check to CheckGender.tsx
function BabyNames(): JSX.Element {

return(
  <div>
    {babyNameData.map(namedata => namedata.name.join(', '))}
  </div>
  );
}

export default BabyNames;

/*
            <ul>
              <li>{value.name}</li>
              <li>{value.title}</li>
            </ul>
*/
import React from "react";
import "./App.css"; //these are fucking case sensitive!!! ARGHHHHH
import BabyNameData from "./babyNamesData.json";
//import { allBabyNames, }

/*
console.log("App re-rendered")
const[currentFrameText, setNextFrameText] = React.useState("Name")

function doStuff(){

}

const matchingBabyNames = findMatchingBabyNames( searchTerm, allBabyNames);

function handleSearchTermChange(event: ChangeEvent<HTMLInputElement>): void{
  setSearchTerm(e.target.value)
}


return (
    <div classname="App">
      {/* <SearchBar > *}
`     {/* Favourites *}
      {/* MainList *}

      {/* search term *}
      <input value={"search term"}
        onChange={e => { console.log(e.target.value) }} //could be onChange={handleSearchTermChange}
      />

      <div className ="babyNameList">
        {babyNames.map(oneNameData => BabyName nameData={oneNameData})}
      </div>

      <div className ="babyNameList">
        {matchingbabyNameList.map(oneNameData => BabyName nameData={oneNameData})}
      </div>

      );
*/

function App(): JSX.Element {
  //define what a baby is to the program. Exports so the interface can be used in more files.

  //export type Sex = "m" | "f"; //defines sex

  interface BabyData {
    id: number;
    name: string;
    sex: string; //sex: "m"|"f"; <-need to add gender function still I think?
    //coming back to say yes unfortunately so
  }

  interface BabyNameProps {
    baby: BabyData;
  }

  const FavyNameData: BabyData[] = [];
  /*
  const matchingBabyNames = findMatchingBabyNames( searchTerm, allBabyNames);

  function handleSearchTermChange(event: ChangeEvent<HTMLInputElement>): void{
    setSearchTerm(e.target.value)
  }

  <input value={"search term"}
        onChange={e => { console.log(e.target.value) }} //could be onChange={handleSearchTermChange}
      />
  */

  //return statement
  //this one

  const [currentSearch, setSearch] = React.useState("");

  const matchingBabyNames = findMatchingBabyNames(
    currentSearch.toLowerCase(),
    BabyNameData.filter((oneNameData) => !FavyNameData.includes(oneNameData))
  );

  // const matchingBabyNames = findMatchingBabyNames( currentSearch.toLowerCase(), BabyNameData); no filter for FavyNames
  // BabyNameData.filter(BabyNameData => !FavyNameData.includes(oneNameData))); hope this works>

  //get errors attempting to destructure and define type as ChangeEvent? Again weird setup
  return (
    //NOTHING ABOVE MASTER DIV
    <div>
      <div>
        <p className="babyName">Favy Names</p>
        {FavyNameData.map((singleBabyData) => (
          <ThisBaby baby={singleBabyData} key={singleBabyData.id} />
        ))}
      </div>

      <input
        value={currentSearch}
        onChange={(event) => {
          setSearch(event.target.value);
        }} //could be onChange={handleSearchTermChange}
      />

      <div className="babyName">
        {searchingOrNot(currentSearch)} {currentSearch}
      </div>

      <div className="babyNameBox">
        {matchingBabyNames.map((singleBabyData) => (
          <ThisBaby baby={singleBabyData} key={singleBabyData.id} />
        ))}
      </div>
    </div>
    //NOTHING BELOW MASTER DIV
  );

  /*
          to show full list: replace matchingBabyNames with BabyNameData
  <div className="babyNameBox"> 
        {BabyNameData.map((singleBabyData) => (
          <ThisBaby baby={singleBabyData} key={singleBabyData.id} />
        ))}
      </div>
*/

  function searchingOrNot(term: string): string {
    return term ? "Seaching for: " : "Baby names";
  }

  function findMatchingBabyNames(term: string, list: BabyData[]): BabyData[] {
    return list.filter((oneNameData) =>
      oneNameData.name.toLowerCase().includes(term)
    );
  }
  //{BabyNameData.map(singleBabyData => singleBabyData.name).join(', ')};

  //I actually don't know what this does fully
  //It's an interface to make sure babyNameProps

  //okay figured it out:  so the above is telling this there's a type we call baby
  //This then defines that as a type of object defined above in babyData

  //function ThisBaby({props: BabyNameProps}: {babyData: babyData}):JSX.Element {
  function ThisBaby(props: BabyNameProps): JSX.Element {
    const { name, id, sex } = props.baby; //I don't think I get this line
    //I get the above is putting the propeties passed into the function into the keys but how? A mystery.

    return (
      <div className={"babyName " + getClassForSex(sex)}>
        <button onClick={() => console.log("hi")}> {name} </button>
      </div>
    );
  }

  /*function adjaustFaves(props: BabyNameProps): JSX.Element{
    const { name, id, sex } = props.baby;
    if the id is in FavyNamesData.id
      Remove name, id and sex from FavyNames
    else
      append name, id and sex to FavyNames
  }
  */
  //this just returns the sex for use in the CSS
  //can define a type Sex{sex:'m'|'f'} but breaks the JSON config
  function getClassForSex(sex: string): string {
    return sex === "m" ? "male" : "female";
  }
}

export default App;

//return <div> {name}, {id}, {sex} </div>

/*  

  if ({sex}==='m'){
    return<div className={"baby"}>{babyIs.name}</div>;
  }
    return<div className={"baby"}>{babyIs.name}</div>;

prints the whole file by taking each value in the name key seperated by ", "
return(
  <div>
    {babyNameData.map(namedata => namedata.name).join(', ')};
  </div>
  );
*/

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

/*
            <ul>
              <li>{value.name}</li>
              <li>{value.title}</li>
            </ul>
*/

/*
    <>
      <BabyNames />
    </>

function findMatchingBabyNames(term: string, list: NameData[]): NameData[] {
  const resultNames:NameData[] = [];
    for (const nameData of list) {
        if (nameData.name.includes(term)) {
            resultNames.push(nameData);
        }
    }
    return resultNames;
}

OR

function findMatchingBabyNames(term: string, list: NameData[]): NameData[] {
    return list.filter(oneNameData => oneNameData.name.includes(term));
}

OR

function findMatchingBabyNames(term: string, list: NameData[]): NameData[] {
    const isAMatch (oneNameData: nameData): boolean {
      return oneNamedata.name.includes(term);
    }
    return oneNameData.filter(isAMatch);
}

NOTE -local storage
*/

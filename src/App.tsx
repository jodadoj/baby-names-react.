import React from "react";
import BabyNames from "./components/BabyNames";
import './App.CSS';
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
  
  return (
    <>
      <BabyNames />
    </>
  );
}
export default App;

/*
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
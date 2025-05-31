import RCard from './RCard.tsx'
import InputBox from './InputBox.tsx'
import { createRoot } from 'react-dom/client';
import Data from '../recipe.json'
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {
  

  /*Gets the column with the lowest number of children by
  getting the amount of children the 4 columns have, puts them in a table with an identifier (the second value) in the table. then sorts by the first value, numerically. 
  then it checks the identifier of the  first entry (lowest  number of children) in the table. */
  function CreateRCard(NameB: string, DescB: string, InsB: string) {

    const column1Amount = document.getElementById("column1")!.childElementCount
    const column2Amount = document.getElementById("column2")!.childElementCount
    const column3Amount = document.getElementById("column3")!.childElementCount
    const column4Amount = document.getElementById("column4")!.childElementCount

    let UsingRoot = "column1"

    const TestList: [number, string][] = [
        [column1Amount, "column1"],
        [column2Amount, "column2"],
        [column3Amount, "column3"],
        [column4Amount, "column4"],
    ];

    function compareNumbers(a: [number, string], b: [number, string]) {
        return a[0] - b[0];
    }

    TestList.sort(compareNumbers);

    if (TestList[0][1] == "column1") {
        UsingRoot = "column1";
    }
    else if (TestList[0][1] == "column2") {
        UsingRoot = "column2"
    }
    else if (TestList[0][1] == "column3") {
        UsingRoot = "column3"
    }
    else if (TestList[0][1] == "column4") {
        UsingRoot = "column4"
    }

    /*Creates a new div to store the created React Component RCard. Creates a new root inside that div, roots are required to display React Components inside of HTML.
    It's necessary to create a new div because .render "will clear all the existing HTML content inside the domNode before rendering the React component into it." (https://18.react.dev/reference/react-dom/render) */
    let NewDiv = document.createElement('div');

    document.getElementById(UsingRoot)!.appendChild(NewDiv);

    let NewRoot = createRoot(NewDiv)

    NewRoot.render(<RCard Name={NameB} Desc={DescB} Ins={InsB} />);
  }

  function handleClick() {
    const NameBox = document.getElementById("NameBox") as HTMLInputElement
    const DescriptionBox = document.getElementById('DescriptionBox') as HTMLInputElement
    const IngredientBox = document.getElementById('IngredientBox') as HTMLInputElement
    CreateRCard(NameBox!.value!, DescriptionBox!.value!, IngredientBox!.value!)
  }

  /*creates a promise function that delays the loading of the testdata as RCards, this is necessary because the columns that RCards appear within don't exist until the html is created below.
   Because promises are asynchronous the code below is executed while the function is waiting for the delay.*/
  function resolveAfterSeconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("resolved");
      }, 100);
    });
  }
//This is explained in the above comment
  async function asyncCall() {
    await resolveAfterSeconds();
    Data.recipes.forEach((DataEntry) => {
    CreateRCard(DataEntry.name, DataEntry.description, DataEntry.ingredients) 
    });
  }

  asyncCall();

  //This returns a page worth of HTML code and displays it on the webpage.
  return (
    <>
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css" />
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
    <div>
      <h1>Recipe Manager</h1>
      <h2>Week 14-16</h2>
    </div>
    <div className="container text-center">
      <div className="row row-cols-2">
        <div className="col" id="column1"></div>
        <div className="col" id="column2"></div>
        <div className="col" id="column3"></div>
        <div className="col" id="column4"></div>
      </div>
    </div>
    <ul style={{ listStyleType: "none" }}>
      <li>
        {/* This passes the prop's PH and ID */}
        <InputBox PH="Name" ID="NameBox"/>
      </li>
      <li>
        <InputBox PH="Description" ID="DescriptionBox"/>
      </li>
      <li>
        <InputBox PH="Ingredients" ID="IngredientBox"/>
      </li>
    </ul>
    <ul style={{ listStyleType: "none", display: "inline-block" }}>
      <li>
        <div>
          <button onClick={handleClick}>
            Click me
          </button>
        </div>
      </li>
    </ul>
  </>

  )
}

export default App



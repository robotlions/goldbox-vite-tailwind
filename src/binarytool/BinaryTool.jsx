

import { useState } from "react";

export default function BinaryTool() {
  const [dataArray1, setDataArray1] = useState(null);
  const [dataArray2, setDataArray2] = useState(null);
  const [compareArray, setCompareArray] = useState([]);
  const [searchArray, setSearchArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchHeadline, setSearchHeadline] = useState("")
  const [compareHeadline, setCompareHeadline] = useState("")

  function loadFile1(file) {
    // if (document.querySelector("#fileSelect").value === "") {
    //   alert("No file selected");
    //   return;
    // }

    var reader = new FileReader();
    reader.onload = function (e) {
      let data = e.target.result;

      let dataArray = new Uint8Array(data);
      setDataArray1(dataArray);
      console.log(dataArray);
    };
    reader.onerror = function (e) {
      console.log("Error : " + e.type);
    };
    reader.readAsArrayBuffer(file);
  }

  function loadFile2(file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      let data = e.target.result;
      if (parseInt(data.byteLength) !== dataArray1.length) {
        return alert("These don't seem to be the same type of files.");
      }
      let dataArray = new Uint8Array(data);
      setDataArray2(dataArray);
    };
    reader.onerror = function (e) {
      console.log("Error : " + e.type);
    };
    reader.readAsArrayBuffer(file);
  }

  function doCompare() {
    setCompareHeadline("");
    setCompareArray([]);
    let resultsArray = [];

    let array1 = Array.from(dataArray1);
    let array2 = Array.from(dataArray2);

    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        resultsArray.push({ index: [i], a1Val: array1[i], a2Val: array2[i] });
      }
    }
    if(resultsArray.length==0){
      setCompareHeadline("No results found")
    }
    else{
      setCompareHeadline("Comparison Results")
    setCompareArray(resultsArray);
    }
  }

  function doSearch() {
    setSearchArray([]);
    setSearchHeadline("");
    let resultsArray = [];

    let array1 = Array.from(dataArray1);

    for (let i = 0; i < array1.length; i++) {
      if (parseInt(array1[i]) === parseInt(searchTerm)) {
        resultsArray.push({ index: [i], a1Val: array1[i] });
      }
    }
    if(resultsArray.length==0){
      setSearchHeadline("No results found")
    }
    else{
      setSearchHeadline("Search Results"),
    setSearchArray(resultsArray);
    }
  }

  function SearchDisplay() {
    let componentDisplay = searchArray.map((item, index) => (
      <div
        className="grid grid-cols-2 md:grid-cols-2"
        style={{ backgroundColor: index % 2 === 0 && "lightBlue" }}
        key={index}
      >
        <div>{item.index}</div> <div>{item.a1Val}</div>{" "}
      </div>
    ));

    return searchArray.length === 0 ? null : (
      <>
        <div
          className="grid grid-cols-2 md:grid-cols-2"
          style={{ fontWeight: "bold" }}
        >
          <div className="grid col-span-1">Index</div>
          <div className="grid col-span-1">File 1</div>
        </div>
        {componentDisplay}
      </>
    );
  }

  function CompareDisplay() {
    // let mainDisplay = finalArray.map((item, index) => <div key={index}>{Object.keys(item)}</div>)
    let componentDisplay = compareArray.map((item, index) => (
      <div
        className="grid grid-cols-3 md:grid-cols-3"
        style={{ backgroundColor: index % 2 === 0 && "lightGray" }}
        key={index}
      >
        <div>{item.index}</div> <div>{item.a1Val}</div> <div>{item.a2Val} </div>
      </div>
    ));

    return compareArray.length === 0 ? null : (
      <>
        <div>No. of non-matching values: {compareArray.length}</div>
        <div
          className="grid grid-cols-3 md:grid-cols-3"
          style={{ fontWeight: "bold" }}
        >
          <div>Index</div>
          <div>File 1</div>
          <div>File 2</div>
        </div>
        {componentDisplay}
      </>
    );
  }

  return (
    <div className="w-full bg-slate-100">
      <div className="text-center">
       
        <h2 className="pt-10 mt-10 mb-10">Binary File Tool</h2>
        <em className="text-center">
          To use: load a save or inventory file. Then search that file for
          values, or load a second file to compare the two side-by-side.
        </em>
      </div>
      <br />
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 justify-items-center">
        <div className="w-10/12">
          <h5>File 1</h5>
          <input
            className="w-full file:border-solid file:border-2 file:rounded file:hover:text-white file:border-green-500 file:hover:border-solid file:py-2 file:px-2 file:hover:bg-green-500 file:bg-white  file:text-green-500 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
            type="file"
            id="fileSelect1"
            onChange={(e) => {
              loadFile1(e.target.files[0]);
            }}
          />
          <br />

          <br />
          {dataArray1 ? (
            <div className="input-group">
              <button
                className="bg-white hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() => doSearch()}
              >
                Search for value
              </button>
              <input
                className="file:border-solid file:border-2 file:rounded file:hover:text-white file:border-green-500 file:hover:border-solid file:py-2 file:px-2 file:hover:bg-green-500 file:bg-white  file:text-green-500 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                type="text"
                id="searchTermInput"
                placeholder="input value"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
            </div>
          ) : null}
        </div>

        <div className="w-10/12">
          {dataArray1 ? (
            <>
              <h5>File2</h5>
              <input
                className="bg-white w-full file:border-solid file:border-2 file:rounded file:hover:text-white file:border-green-500 file:hover:border-solid file:py-2 file:px-2 file:hover:bg-green-500 file:bg-white  file:text-green-500 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="file"
                id="fileSelect2"
                onChange={(e) => {
                  loadFile2(e.target.files[0]);
                }}
              />
            </>
          ) : null}
          <br />
          <br />
          {dataArray1 && dataArray2 ? (
            <div className="w-10/12">
              <button
                className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() => doCompare()}
              >
                Compare files
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 justify-items-center mt-20 mb-20">
        <div className="w-10/12">
         
          <h3>{searchHeadline}</h3>
          <SearchDisplay />
        </div>
        <div className="w-10/12">
          <h3>{compareHeadline}</h3>
          <CompareDisplay />
        </div>
      </div>
    </div>
  );
}

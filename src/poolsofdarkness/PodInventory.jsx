import { useState } from "react";
import { podItemValues } from "./PodData";
import * as InvFunctions from "../InventoryFunctions";

export default function PodInventory(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dataArray, setDataArray] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  function loadFile(file) {
    if (document.querySelector("#inventoryFileSelect").value === "") {
      alert("No file selected");
      return;
    }

    var reader = new FileReader();
    reader.onload = function (e) {
      let data = e.target.result;
    //   if(data.byteLength %67 !== 0){
    //     return alert("This does not appear to be an inventory file from Secret of the Silver Blades")
    //   }
    console.log(data.byteLength)
      let dataArray = new Uint8Array(data);
      console.log(dataArray);
      setDataArray(dataArray);
      props.setInventoryLoaded(true);
    };
    reader.onerror = function (e) {
      console.log("Error : " + e.type);
    };
    reader.readAsArrayBuffer(file);
  }

  function ListDisplay() {
    return (
      <>
          <InvFunctions.ItemListModule
            dataArray={dataArray}
            setDataArray={setDataArray}
            dataList={podItemValues}
            nameIndex={47}
            typeIndex={46}
            bonusIndex={50}
            chargeIndex={60}
            effect2Index={61}
            effect3Index={62}
            ammoIndex={57}
            weightIndex={55}
            arrayLength={63}
            editingIndex={editingIndex}
            setEditingIndex={setEditingIndex}
          />
      </>
    );
  }

  function exportSaveFile() {
    const blob = new Blob([dataArray], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = selectedFile.name;
    link.href = url;
    link.click();
  }

  return (
    <>
      <div className="row" style={{ minHeight: 40 }}>
        
          <div className="mb-3">
            <input
              className="bg-white w-full file:border-solid file:border-2 file:rounded file:hover:text-white file:border-green-600 file:hover:border-solid file:py-2 file:px-2 file:hover:bg-green-600 file:bg-white  file:text-green-600 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

              type="file"
              id="inventoryFileSelect"
              accept=".thg"
              onChange={(e) => {
                setSelectedFile(e.target.files[0]);
                loadFile(e.target.files[0]);
              }}
            />
          </div>

          {dataArray ? (
            <div className="text-right">
            <button
            className="hover:text-white hover:bg-blue-600 hover:border-blue-500"

              onClick={() => exportSaveFile()}
            >
              Download Inventory File
            </button></div>
          ) : null}
        
      </div>
      <br />
        {dataArray ? <ListDisplay /> : null}
      {dataArray ? <InvFunctions.InventoryTypeDisplay gameName={"Pools of Darkness"} gameItemValues={podItemValues} /> : null}

    </>
  );
}

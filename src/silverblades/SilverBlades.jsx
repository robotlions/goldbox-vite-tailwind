

import { useState } from "react";
import {
  silverBladesStatusCodes,
  silverBladesRaces,
  silverBladesSpellList,
  silverBladesClassList,
} from "./SilverBladesData";

import SilverBladesInventory from "./SilverBladesInventory";
import * as CharComponents from "../CharComponents";
import * as CharFunctions from "../CharFunctions";
import silverBladesBanner from "../assets/images/silverBladesBannerCropped.png";
import podCoverImage from "../assets/images/pod800.jpg";
import azureCoverImage from "../assets/images/azure800.jpg";
import silverBladesCoverImage from "../assets/images/silverBlades800.jpg";
import poolRadCoverImage from "../assets/images/poolRadCover800.jpg";
import { AccordionCustom } from "../CharFunctions";

export default function SilverBlades() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dataArray, setDataArray] = useState(null);
  const [inventoryLoaded, setInventoryLoaded] = useState(false);

  function exportSaveFile() {
    if (!selectedFile) {
      return alert("Please load a character file");
    } else {
      const blob = new Blob([dataArray], { type: "application/octet-stream" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = selectedFile.name;
      link.href = url;
      link.click();
    }
  }

  function loadFile(file) {
    if (document.querySelector("#fileSelect").value === "") {
      alert("No file selected");
      return;
    }

    var reader = new FileReader();
    reader.onload = function (e) {
      let data = e.target.result;
      if (data.byteLength !== 439) {
        return alert(
          "This doesn't appear to be a save file from Secret of the Silver Blades"
        );
      } else {
        let dataArray = new Uint8Array(data);
        console.log(dataArray);
        setDataArray(dataArray);
      }
    };
    reader.onerror = function (e) {
      console.log("Error : " + e.type);
    };
    reader.readAsArrayBuffer(file);
  }

  // function createInventoryFile(e) {
  //   let loadedFileName = e.target.files[0].name;
  //   let inventoryFile =
  //     loadedFileName.substr(0, loadedFileName.lastIndexOf(".")) + ".STF";
  //   setInventoryFileName(inventoryFile);
  // }

  function MagicDisplay(props) {
    let spellArray = [0, 1, 2, 3];

    if (props.magicFilter === "Mage") {
      spellArray = [0, 1, 2, 3, 4, 5, 6];
    }
    if (props.magicFilter === "Cleric") {
      spellArray = [0, 1, 2, 3, 4, 5];
    }

    let spellSlots = spellArray.map((item, index) => (
      <div key={index} className="mt-5">
        {item + 1}:{" "}
        <CharFunctions.LevelModule
          dataArray={dataArray}
          setDataArray={setDataArray}
          dataArrayIndex={props.startingIndex + item}
        />
      </div>
    ));

    return (
      <>
        <div className="flex flex-wrap gap-3">{spellSlots}</div>
        <br />
        <h5>{props.magicFilter} Spells:</h5>{" "}
        <div>
          <CharFunctions.SpellModule
            dataArray={dataArray}
            setDataArray={setDataArray}
            dataArrayMin={112}
            dataArrayMax={230}
            dataList={silverBladesSpellList}
            filter={props.magicFilter}
          />
        </div>
      </>
    );
  }

  function CharInfoDisplay() {
    return (
      <CharComponents.CharInfoDisplay
        dataArray={dataArray}
        setDataArray={setDataArray}
        maxHPIndex={112}
        currentHPIndex={437}
        experienceIndex={300}
        statusIndex={422}
        statusCodes={silverBladesStatusCodes}
        racesList={silverBladesRaces}
        raceIndex={107}
        genderIndex={287}
        alignmentIndex={288}
        classIndex={108}
        classList={silverBladesClassList}
      />
    );
  }

  function CharAbilityDisplay() {
    return (
      <CharComponents.CharAbilityDisplay
        dataArray={dataArray}
        setDataArray={setDataArray}
        strIndex={16}
        strIndexCurrent={17}
        extStrIndex={28}
        extStrIndexCurrent={29}
        intIndex={18}
        intIndexCurrent={19}
        wisIndex={20}
        wisIndexCurrent={21}
        dexIndex={22}
        dexIndexCurrent={23}
        conIndex={24}
        conIndexCurrent={25}
        chaIndex={26}
        chaIndexCurrent={27}
        clericIndex={273}
        fighterIndex={275}
        paladinIndex={276}
        rangerIndex={277}
        magicUserIndex={278}
        thiefIndex={279}
      />
    );
  }

  function CharSavesDisplay() {
    return (
      <CharComponents.CharSavesDisplay
        dataArray={dataArray}
        setDataArray={setDataArray}
        deathSaveIndex={232}
        petriPolySaveIndex={233}
        rodStaffWandSaveIndex={234}
        breathWeaponSaveIndex={235}
        spellSaveIndex={236}
      />
    );
  }

  function MoneyDisplay() {
    return (
      <CharComponents.CharMoneyComponent
        dataArray={dataArray}
        setDataArray={setDataArray}
        copperIndex={259}
        silverIndex={261}
        electrumIndex={263}
        goldIndex={265}
        platinumIndex={267}
        gemsIndex={269}
        jewelryIndex={271}
      />
    );
  }

  function ThiefSkillsDisplay() {
    return (
      <CharComponents.ThiefSkillsDisplay
        dataArray={dataArray}
        setDataArray={setDataArray}
        pickPocketsIndex={243}
        openLocksIndex={244}
        findTrapsIndex={245}
        moveSilentlyIndex={246}
        hideInShadowsIndex={247}
        hearNoiseIndex={248}
        climbWallsIndex={249}
        readLanguagesIndex={250}
      />
    );
  }

  let splashImage =
    dataArray || inventoryLoaded === true ? null : (
      <>
        <h5 className="text-center" style={{ marginBottom: 20 }}>
          To begin, upload a character file (.SAV) or an inventory file (.STF)
          from <em>Secret of the Silver Blades</em>.
        </h5>

        <h5 className="text-center">
          Need somewhere to start? Try the <em>Secret of the Silver Blades</em>{" "}
          <a href={"/files/silverBladesDefaultCharacters.zip"}>
            default characters
          </a>
          .
        </h5>

        <br />
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center md:mx-10">
          <a href="/poolofradiance">
          <img
            className="opacity-50 hover:scale-110"
            src={poolRadCoverImage}
            alt="pool of radiance"
            style={{height:400}}
            
          />
          </a>
          <a href="/azurebonds">
            <img
              src={azureCoverImage}
              className="opacity-50 hover:scale-110"
              alt="curse of the azure bonds"
              style={{height:400}}
              
            />
          </a>
          
            <img
              src={silverBladesCoverImage}
              alt="secret of the silver blades"
              style={{height:400}}
              
            />
          
          <a href="/poolsofdarkness">
            <img
              src={podCoverImage}
              className="opacity-50 hover:scale-110"
              alt="pools of darkness"
              style={{height:400}}
              
            />
          </a>
        </div>
      </>
    );

  const characterAccordionItems = [
    { title: "Character Info", content: <CharInfoDisplay /> },
    { title: "Ability Scores and Levels", content: <CharAbilityDisplay /> },
    { title: "Saving Throws", content: <CharSavesDisplay /> },
    { title: "Thief Skills", content: <ThiefSkillsDisplay /> },
    { title: "Money", content: <MoneyDisplay /> },
    {
      title: "Magic User Spells",
      content: <MagicDisplay startingIndex={327} magicFilter="Mage" />,
    },
    {
      title: "Cleric Spells",
      content: <MagicDisplay startingIndex={306} magicFilter="Cleric" />,
    },
  ];

  return (
    <div className="mb-60">
      <div className="mb-20">
        <div className="flex justify-center mt-10">
        <img
          className="w-10/12"
          src={silverBladesBanner}
          alt="silver blades title screen"
        /></div>
        <h3
          className="text-center text-3xl mt-10"
          style={{ fontFamily: "IM-Fell" }}
        >
          Advanced Dungeons and Dragons: Secret of the Silver Blades
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 justify-items-center">
        <div className="w-10/12">
          <h3 className="text-center">Character Editor</h3>
          <div className="mb-3">
            <input
              className="bg-white file:border-solid file:border-2 file:rounded file:hover:text-white file:border-green-600 file:hover:border-solid file:py-2 file:px-2 file:hover:bg-green-600 file:bg-white  file:text-green-600 shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              id="fileSelect"
              accept=".sav"
              onChange={(e) => {
                // createInventoryFile(e);
                setSelectedFile(e.target.files[0]);
                loadFile(e.target.files[0]);
              }}
            />
          </div>
          {dataArray ? (
            <div className="text-right">
            <button
            className="bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-600 hover:border-transparent rounded"

              onClick={() => exportSaveFile()}
            >
              Download Character File
            </button></div>
          ) : null}
          <br />
          <p></p>
          {dataArray ? (
            <>
              <AccordionCustom accordionItems={characterAccordionItems} />
            </>
          ) : null}
        </div>
        <div className="w-10/12">
          <h3 style={{ textAlign: "center" }}>Inventory Editor</h3>

          <SilverBladesInventory
            inventoryLoaded={inventoryLoaded}
            setInventoryLoaded={setInventoryLoaded}
          />
        </div>
      </div>
      <div style={{ marginTop: "5vh", textAlign: "center" }}>
        <div>{splashImage}</div>
      </div>
    </div>
  );
}



import { useState } from "react";
import {
  podRaces,
  podStatusCodes,
  podSpellList,
  podClassList,
} from "./PodData";

import * as CharComponents from "../CharComponents";
import * as CharFunctions from "../CharFunctions";
import PodInventory from "./PodInventory";
import podBanner from "../assets/images/podBannerCropped.png";
import podCoverImage from "../assets/images/pod800.jpg";
import azureCoverImage from "../assets/images/azure800.jpg";
import silverBladesCoverImage from "../assets/images/silverBlades800.jpg";
import poolRadCoverImage from "../assets/images/poolRadCover800.jpg";
import { AccordionCustom } from "../CharFunctions";

export default function PoolsOfDarkness() {
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
      if (data.byteLength !== 510) {
        return alert(
          "This doesn't appear to be a save file from Pools of Darkness"
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

  function CharInfoDisplay() {
    return (
      <CharComponents.CharInfoDisplay
        dataArray={dataArray}
        setDataArray={setDataArray}
        maxHPIndex={178} //done
        currentHPIndex={508} //done
        experienceIndex={370} //done
        statusIndex={493} //done
        statusCodes={podStatusCodes}
        racesList={podRaces}
        raceIndex={173} // done
        genderIndex={358} //done
        alignmentIndex={359}
        classList={podClassList}
        classIndex={174}
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
        clericIndex={337}
        fighterIndex={339}
        paladinIndex={340}
        rangerIndex={341}
        magicUserIndex={342}
        thiefIndex={343}
      />
    );
  }

  function CharSavesDisplay() {
    return (
      <CharComponents.CharSavesDisplay
        dataArray={dataArray}
        setDataArray={setDataArray}
        deathSaveIndex={306}
        petriPolySaveIndex={307}
        rodStaffWandSaveIndex={308}
        breathWeaponSaveIndex={309}
        spellSaveIndex={310}
      />
    );
  }

  function MoneyDisplay() {
    return (
      <CharComponents.CharMoneyComponent
        dataArray={dataArray}
        setDataArray={setDataArray}
        copperIndex={323}
        silverIndex={325}
        electrumIndex={327}
        goldIndex={329}
        platinumIndex={331}
        gemsIndex={333}
        jewelryIndex={335}
      />
    );
  }

  function ThiefSkillsDisplay() {
    return (
      <CharComponents.ThiefSkillsDisplay
        dataArray={dataArray}
        setDataArray={setDataArray}
        pickPocketsIndex={315}
        openLocksIndex={316}
        findTrapsIndex={317}
        moveSilentlyIndex={318}
        hideInShadowsIndex={319}
        hearNoiseIndex={320}
        climbWallsIndex={321}
        readLanguagesIndex={322}
      />
    );
  }

  function MagicDisplay(props) {
    let spellArray = [0, 1, 2];

    if (props.magicFilter === "Mage") {
      spellArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    }
    if (props.magicFilter === "Cleric") {
      spellArray = [0, 1, 2, 3, 4, 5, 6];
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
      <div className="flex flex-wrap gap-3">
        {spellSlots}</div>
        <br/>
        <h4>{props.magicFilter} Spells:</h4>{" "}
        <div>
          <CharFunctions.SpellModule
            dataArray={dataArray}
            setDataArray={setDataArray}
            dataArrayMin={178}
            dataArrayMax={305}
            dataList={podSpellList}
            filter={props.magicFilter}
          />
        </div>
      </>
    );
  }

  let splashImage =
    dataArray || inventoryLoaded === true ? null : (
      <>
        <h5 style={{ marginBottom: 20 }}>
          To begin, upload a character file (.SAV) or an inventory file (.THG)
          from <em>Pools of Darkness</em>.
        </h5>

        <h5>
          Need somewhere to start? Try the <em>Pools of Darkness</em>{" "}
          <a href={"/files/podDefaultCharacters.zip"} className="text-blue-600">default characters</a>.
        </h5>

        <br />
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center md:mx-10">
          <a href="/poolofradiance">
          <img
            src={poolRadCoverImage}
            className="opacity-50 hover:scale-110"
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
          <a href="/silverblades">
            <img
              src={silverBladesCoverImage}
              className="opacity-50 hover:scale-110"
              alt="secret of the silver blades"
              style={{height:400}}
              
            />
          </a>
          
            <img
              src={podCoverImage}
              alt="pools of darkness"
              style={{height:400}}
              
            />
          
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
      content: <MagicDisplay magicFilter="Mage" startingIndex={399} />,
    },
    {
      title: "Cleric Spells",
      content: <MagicDisplay magicFilter="Cleric" startingIndex={381} />,
    },
  ];

  return (
    <div className="mb-60">
      <div className="mb-20">
        <div className="flex justify-center mt-10">
          <img
            className="w-10/12"
            src={podBanner}
            alt="pools of darkness action"
          />
        </div>
        <h3
          className="text-center text-3xl mt-10"
          style={{ fontFamily: "IM-Fell" }}
        >
          Advanced Dungeons and Dragons: Pools of Darkness
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 justify-items-center">
      <div className="w-10/12">
          <h3 className="text-center">Character Editor</h3>
          <div className="mb-3">
            <input
            className="bg-white w-full file:border-solid file:border-2 file:rounded file:hover:text-white file:border-green-600 file:hover:border-solid file:py-2 file:px-2 file:hover:bg-green-600 file:bg-white  file:text-green-600 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

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
            <AccordionCustom accordionItems={characterAccordionItems} />
          ) : null}
        </div>
        <div className="w-10/12">
          <h3 style={{ textAlign: "center" }}>Inventory Editor</h3>

          <PodInventory
            inventoryLoaded={inventoryLoaded}
            setInventoryLoaded={setInventoryLoaded}
          />
        </div>
      </div>
      <div
        className="row g-1 d-flex justify-content-center"
        style={{ marginTop: "5vh", textAlign: "center" }}
      >
        <div className="col-md-auto">{splashImage}</div>
      </div>
    </div>
  );
}

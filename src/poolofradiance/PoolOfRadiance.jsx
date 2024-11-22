
import { useState } from "react";
import {
  poolRadStatusCodes,
  poolRadRaces,
  poolRadSpells,
  poolRadClassList,
} from "./PoolRadData";
import PoolRadInventory from "./PoolRadInventory";
import * as CharFunctions from "../CharFunctions";
import * as CharComponents from "../CharComponents";
import { AccordionCustom } from "../CharFunctions";
import poolRadBanner from "../assets/images/poolRad1Crop.png";
import podCoverImage from "../assets/images/pod800.jpg";
import azureCoverImage from "../assets/images/azure800.jpg";
import silverBladesCoverImage from "../assets/images/silverBlades800.jpg";
import poolRadCoverImage from "../assets/images/poolRadCover800.jpg";

export default function PoolOfRadiance() {
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
      if (data.byteLength !== 285) {
        return alert(
          "This doesn't appear to be a save file from Pool of Radiance"
        );
      } else {
        let dataArray = new Uint8Array(data);
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

  function CharAbilityDisplay() {
    return (
      <CharComponents.CharAbilityDisplay
        dataArray={dataArray}
        setDataArray={setDataArray}
        strIndex={16}
        extStrIndex={22}
        intIndex={17}
        wisIndex={18}
        dexIndex={19}
        conIndex={20}
        chaIndex={21}
        clericIndex={150}
        fighterIndex={152}
        magicUserIndex={155}
        thiefIndex={156}
      />
    );
  }

  function CharInfoDisplay() {
    return (
      <CharComponents.CharInfoDisplay
        dataArray={dataArray}
        setDataArray={setDataArray}
        maxHPIndex={50}
        currentHPIndex={283}
        experienceIndex={172}
        statusIndex={268}
        statusCodes={poolRadStatusCodes}
        racesList={poolRadRaces}
        raceIndex={46}
        genderIndex={158}
        alignmentIndex={160}
        classList={poolRadClassList}
        classIndex={47}
      />
    );
  }

  function CharSavesDisplay() {
    return (
      <CharComponents.CharSavesDisplay
        dataArray={dataArray}
        setDataArray={setDataArray}
        deathSaveIndex={109}
        petriPolySaveIndex={110}
        rodStaffWandSaveIndex={111}
        breathWeaponSaveIndex={112}
        spellSaveIndex={113}
      />
    );
  }

  function ThiefSkillsDisplay() {
    return (
      <CharComponents.ThiefSkillsDisplay
        dataArray={dataArray}
        setDataArray={setDataArray}
        pickPocketsIndex={119}
        openLocksIndex={120}
        findTrapsIndex={121}
        moveSilentlyIndex={122}
        hideInShadowsIndex={123}
        hearNoiseIndex={124}
        climbWallsIndex={125}
        readLanguagesIndex={126}
      />
    );
  }

  function MagicDisplay(props) {
    let spellArray = [0, 1, 2];

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
        <div className="flex gap-3">{spellSlots}</div>
        <br />
        <h5>{props.magicFilter} Spells:</h5>{" "}
        <div>
          <CharFunctions.SpellModule
            dataArray={dataArray}
            setDataArray={setDataArray}
            dataArrayMin={50}
            dataArrayMax={107}
            dataList={poolRadSpells}
            filter={props.magicFilter}
          />
        </div>
      </>
    );
  }

  function MoneyDisplay() {
    return (
      <CharComponents.CharMoneyComponent
        dataArray={dataArray}
        setDataArray={setDataArray}
        copperIndex={136}
        silverIndex={138}
        electrumIndex={140}
        goldIndex={142}
        platinumIndex={144}
        gemsIndex={146}
        jewelryIndex={148}
      />
    );
  }

  let splashImage =
    dataArray || inventoryLoaded === true ? null : (
      <>
        <h5 style={{ marginBottom: 20 }}>
          To begin, upload a character file (.SAV) or an
          inventory file (.ITM) from <em>Pool of Radiance</em>.
        </h5>

        <h5>
          Need somewhere to start? Download the <em>Pool of Radiance</em>{" "}
          <a
            href={"/files/poolRadDefaultCharacters.zip"}
            className="text-blue-700"
          >
            default characters
          </a>
          .
        </h5>
        <br />
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center md:mx-10">
          <img
            src={poolRadCoverImage}
            alt="pool of radiance"
            style={{height:400}}
            
          />
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
      content: <MagicDisplay magicFilter="Mage" startingIndex={181} />,
    },
    {
      title: "Cleric Spells",
      content: <MagicDisplay magicFilter="Cleric" startingIndex={178} />,
    },
  ];

  return (
    <div className="mb-60">
      <div className="mb-20">
        <div className="flex justify-center pt-10">
        <img
          className="w-10/12"
          src={poolRadBanner}
          alt="pool of radiance orignal title screen"
        /></div>
        <h3
          className="text-center text-3xl mt-10"
          style={{ fontFamily: "IM-Fell" }}
        >
          Advanced Dungeons and Dragons: Pool of Radiance
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 justify-items-center">
        <div className="w-10/12">
          <h3 className="text-center">Character Editor</h3>
          <div className="mb-3">
            <input
              className="bg-white w-full file:border-solid file:border-2 file:rounded file:hover:text-white file:border-green-500 file:hover:border-solid file:py-2 file:px-2 file:hover:bg-green-500 file:bg-white  file:text-green-500 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() => exportSaveFile()}
              >
                Download Character File
              </button>
            </div>
          ) : null}
         <br/>
          {dataArray ? (
            <AccordionCustom accordionItems={characterAccordionItems} />
          ) : null}
        </div>

        <div className="w-10/12">
          <h3 style={{ textAlign: "center" }}>Inventory Editor</h3>

          <PoolRadInventory
            inventoryLoaded={inventoryLoaded}
            setInventoryLoaded={setInventoryLoaded}
            
          />
        </div>
      </div>
      <div
        className="row g-1 d-flex justify-content-center"
        style={{ marginTop: "5vh", textAlign: "center" }}
      >
        <div>{splashImage}</div>
      </div>
    </div>
  );
}

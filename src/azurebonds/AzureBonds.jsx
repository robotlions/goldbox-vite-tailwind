
import { useState } from "react";
import * as CharComponents from "../CharComponents";
import {
  azureRaces,
  azureSpellList,
  azureStatusCodes,
  azureClassList,
} from "./AzureData";
import * as CharFunctions from "../CharFunctions";
import AzureInventory from "./AzureInventory";
import azureBanner from "../assets/images/azureBannerCropped.png";
import podCoverImage from "../assets/images/pod800.jpg";
import azureCoverImage from "../assets/images/azure800.jpg";
import silverBladesCoverImage from "../assets/images/silverBlades800.jpg";
import poolRadCoverImage from "../assets/images/poolRadCover800.jpg";
import { AccordionCustom } from "../CharFunctions";

export default function AzureBonds(props) {
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
      if (data.byteLength !== 422) {
        return alert(
          "This doesn't appear to be a save file from Curse of the Azure Bonds"
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

  function MagicDisplay(props) {
    let spellArray = [0];

    if (props.magicFilter === "Mage") {
      spellArray = [0, 1, 2, 3, 4];
    }
    if (props.magicFilter === "Cleric") {
      spellArray = [0, 1, 2, 3];
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
            dataArrayMin={121}
            dataArrayMax={220}
            dataList={azureSpellList}
            filter={props.magicFilter}
          />
        </div>
      </>
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
        clericIndex={265}
        fighterIndex={267}
        paladinIndex={268}
        rangerIndex={269}
        magicUserIndex={270}
        thiefIndex={271}
      />
    );
  }

  function CharInfoDisplay() {
    return (
      <CharComponents.CharInfoDisplay
        dataArray={dataArray}
        setDataArray={setDataArray}
        maxHPIndex={120}
        currentHPIndex={420}
        experienceIndex={295}
        statusIndex={405}
        statusCodes={azureStatusCodes}
        racesList={azureRaces}
        raceIndex={116}
        genderIndex={281}
        alignmentIndex={283}
        classIndex={117}
        classList={azureClassList}
      />
    );
  }

  function CharSavesDisplay() {
    return (
      <CharComponents.CharSavesDisplay
        dataArray={dataArray}
        setDataArray={setDataArray}
        deathSaveIndex={223}
        petriPolySaveIndex={224}
        rodStaffWandSaveIndex={225}
        breathWeaponSaveIndex={226}
        spellSaveIndex={227}
      />
    );
  }

  function MoneyDisplay() {
    return (
      <CharComponents.CharMoneyComponent
        dataArray={dataArray}
        setDataArray={setDataArray}
        copperIndex={251}
        silverIndex={253}
        electrumIndex={255}
        goldIndex={257}
        platinumIndex={259}
        gemsIndex={261}
        jewelryIndex={263}
      />
    );
  }

  function ThiefSkillsDisplay() {
    return (
      <CharComponents.ThiefSkillsDisplay
        dataArray={dataArray}
        setDataArray={setDataArray}
        pickPocketsIndex={234}
        openLocksIndex={235}
        findTrapsIndex={236}
        moveSilentlyIndex={237}
        hideInShadowsIndex={238}
        hearNoiseIndex={239}
        climbWallsIndex={240}
        readLanguagesIndex={241}
      />
    );
  }

  let splashImage =
    dataArray || inventoryLoaded === true ? null : (
      <>
        <h5 style={{ marginBottom: 20 }}>
          To begin, upload a character file (.SAV) or an inventory file (.SWG)
          from <em>Curse of the Azure Bonds</em>.
        </h5>

        <h5>
          Need somewhere to start? Try the <em>Curse of the Azure Bonds</em>{" "}
          <a
            href={"/files/azureDefaultCharacters.zip"}
            className="text-blue-600"
          >
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
          
            <img
              src={azureCoverImage}
              alt="curse of the azure bonds"
              style={{height:400}}
              
            />
         
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
      content: <MagicDisplay magicFilter="Mage" startingIndex={311} />,
    },
    {
      title: "Cleric Spells",
      content: <MagicDisplay magicFilter="Cleric" startingIndex={301} />,
    },
  ];

  return (
    <div className="mb-60">
      <div className="mb-20">
        <div className="flex justify-center mt-10">
        <img
          className="w-10/12"
          src={azureBanner}
          alt="azure bonds title screen"
        /></div>
        <h3
          className="text-center text-3xl mt-10"
          style={{ fontFamily: "IM-Fell" }}
        >
          Advanced Dungeons and Dragons: Curse of the Azure Bonds
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
              </button>
            </div>
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
          <h3 className="text-center">Inventory Editor</h3>
          <AzureInventory
            inventoryLoaded={inventoryLoaded}
            setInventoryLoaded={setInventoryLoaded}
          />
        </div>
      </div>
      <div style={{ marginTop: "5vh", textAlign: "center" }}>
      <div id="splashImageRow">{splashImage}</div>

      </div>
    </div>
  );
}

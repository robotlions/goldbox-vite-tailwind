import { useState } from "react";



export function ExperienceModule(props) {
  let tempArray = props.dataArray;

  const [editing, setEditing] = useState(false);
  const [inputText, setInputText] = useState(
    parseInt(
      (0 + props.dataArray[props.dataArrayIndex + 3].toString(16)).slice(-2) +
        (0 + props.dataArray[props.dataArrayIndex + 2].toString(16)).slice(-2) +
        (0 + props.dataArray[props.dataArrayIndex + 1].toString(16)).slice(-2) +
        (0 + props.dataArray[props.dataArrayIndex].toString(16)).slice(-2),
      16
    )
  );

  const editDisplay = (
    <input
      className="form-control"
      type="text"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      onBlur={() => {
        setEditing(!editing);
        convertDecimaltoBinary();
      }}
    />
  );

  function convertDecimaltoBinary() {
    let eightBit = (
      "00000000" + parseInt(inputText).toString(16).toUpperCase()
    ).slice(-8);
    let eightBitSplit = eightBit.match(/.{1,2}/g) ?? [];
    for (let i = 0; i < 3; i++) {
      if (eightBitSplit[i] === "00") {
        eightBitSplit[i] = "0";
      } else if (eightBitSplit[i].charAt(0) === "0") {
        eightBitSplit[i] = eightBitSplit[i].charAt(1);
      }
    }

    tempArray[props.dataArrayIndex+3] = parseInt(eightBitSplit[0], 16);
    tempArray[props.dataArrayIndex+2] = parseInt(eightBitSplit[1], 16);
    tempArray[props.dataArrayIndex+1] = parseInt(eightBitSplit[2], 16);
    tempArray[props.dataArrayIndex] = parseInt(eightBitSplit[3], 16);
    props.setDataArray(tempArray);
  }

  return editDisplay;
}

export function HitPointModule(props) {
  let tempArray = props.dataArray;

  const [editing, setEditing] = useState(false);
  const [inputText, setInputText] = useState(
    props.dataArray[props.dataArrayIndex]
  );

  function submitChange() {
    tempArray[props.dataArrayIndex] = inputText;

    props.setDataArray(tempArray);
  }

  const editDisplay = (
    <input
      
      type="number"
      max="255"
      min="0"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      onBlur={() => {
        setEditing(!editing);
        submitChange();
      }}
    />
  );

  return editDisplay;
}

export function LevelModule(props) {
  let tempArray = props.dataArray;

  const [inputText, setInputText] = useState(
    props.dataArray[props.dataArrayIndex]
  );

  function submitChange() {
    tempArray[props.dataArrayIndex] = inputText;
    props.setDataArray(tempArray);
  }

  const editDisplay = (
    <input
      className="w-20"
      type="number"
      max="99"
      min="0"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      onBlur={() => submitChange()}
    />
  );

  return editDisplay;
}

export function NameModule(props) {
  let tempArray = props.dataArray;

  let defaultName = assembleName();

  const [inputText, setInputText] = useState(defaultName);
  const editDisplay = (
    <input
      className="w-full"
      value={inputText}
      maxLength={15}
      onChange={(e) => setInputText(e.target.value)}
      onBlurCapture={() => saveName()}
      type="text"
    />
  );

  function assembleName() {
    let assembledName = "";
    for (let i = 1; i <= props.dataArray[0]; i++) {
      assembledName = assembledName + String.fromCharCode(props.dataArray[i]);
    }
    return assembledName;
  }

  function saveName() {
    tempArray[0] = inputText.length;
    for (let i = 0; i <= inputText.length; i++) {
      tempArray[i + 1] = inputText.toUpperCase().charCodeAt(i);
    }
    props.setDataArray(tempArray);
  }

  return editDisplay;
}

export function ScoreModule(props) {
  let tempArray = props.dataArray;

  const [inputText, setInputText] = useState(
    props.dataArray[props.dataArrayIndex]
  );

  function submitChange() {
    tempArray[props.dataArrayIndex] = inputText;
    tempArray[props.dataArrayIndexCurrent] = inputText;
    props.setDataArray(tempArray);
  }

  const editDisplay = (
    <input
      id={props.idText}
      type="number"
      max="99"
      min="0"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      onBlur={() => submitChange()}
      className="w-20"
    />
  );

  return editDisplay;
}

export function SelectModule(props) {
  let tempArray = props.dataArray;

  let dropList = Object.entries(props.dataList).map((item, index) => (
    <option key={index} value={item[0]}>
      {item[1]}
    </option>
  ));

  let defaultDisplay = tempArray[props.index];

  return (
    
      <select
        className="w-auto"
        defaultValue={defaultDisplay}
        aria-label="Item value dropdown"
        onChange={(e) => {
          tempArray[props.index] = e.target.value;
          props.setDataArray(tempArray);
        }}
      >
        <option disabled value={-1}>
          Options
        </option>
        {dropList}
      </select>
    
  );
}

export function SpellModule(props) {
  let tempArray = Array.from(props.dataArray);
  let spellDisplay = tempArray.map((item, index) =>
    index > props.dataArrayMin &&
    index < props.dataArrayMax &&
    props.dataList[index].class === props.filter ? (
      <SpellCheckBox
        dataArray={props.dataArray}
        setDataArray={props.setDataArray}
        dataList={props.dataList}
        item={item}
        index={index}
        key={index}
      />
    ) : null
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-1">
      {spellDisplay}
    </div>
  );
}

export function SpellCheckBox(props) {
  let tempArray = props.dataArray;

  const [checked, setChecked] = useState(props.item === 1 ? true : false);

  function updateChecked() {
    let checkValue = checked === true ? 0 : 1;
    tempArray[props.index] = parseInt(checkValue, 16);
    props.setDataArray(tempArray);
  }

  return (
    <div className="flex">
      <input
        
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          updateChecked();
        }}
      />
      {props.dataList[props.index].spellName}
    </div>
  );
}

export function StrengthModule(props) {
  let tempArray = props.dataArray;

  const [inputText, setInputText] = useState(
    props.dataArray[props.dataArrayIndex]
  );
  const [extInput, setExtInput] = useState(props.dataArray[props.extStrIndex]);

  function submitChange() {
    tempArray[props.dataArrayIndex] = inputText;
    tempArray[props.dataArrayIndexCurrent] = inputText;
    props.setDataArray(tempArray);
  }

  function submitExtChange() {
    tempArray[props.extStrIndex] = extInput;
    tempArray[props.extStrIndexCurrent] = extInput;
    props.setDataArray(tempArray);
  }

  const editDisplay = (
    <div className="flex">
      <div>
        <input
        className="w-20"
          type="number"
          max="99"
          min="0"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onBlur={() => submitChange()}
          
        />
      </div>
      <div className="w-20">
        {parseInt(inputText) === 18 ? (
          <input
          className="w-20"
            type="number"
            max="100"
            min="0"
            value={extInput}
            onChange={(e) => setExtInput(e.target.value)}
            onBlur={() => submitExtChange()}
            
          />
        ) : null}
      </div>
    </div>
  );

  return editDisplay;
}

export function ValueModule(props) {
  let tempArray = props.dataArray;

  const [inputText, setInputText] = useState(
    props.dataArray[props.dataArrayIndex]
  );

  function submitChange() {
    tempArray[props.dataArrayIndex] = inputText;
    props.setDataArray(tempArray);
  }

  const editDisplay = (
    <input
    className="w-20"
      type="number"
      max="255"
      min="0"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      onBlur={() => submitChange()}
    />
  );

  return editDisplay;
}

export function AccordionCustom(props) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  

  return (
    <div className="w-full">
      {props.accordionItems.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full py-4 px-6 text-left text-gray-600 hover:bg-gray-200 focus:outline-none text-lg"
          >
            <span>{item.title}</span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="px-6 py-4 text-gray-600 text-base">{item.content}</div>
          </div>
          <br/>
        </div>
      ))}
    </div>
  );
}

import { Route, Routes } from "react-router-dom";


import poolRadCoverImage from "../src/assets/images/poolRadCover800.jpg";
import azureCoverImage from "../src/assets/images/azure800.jpg";
import silverBladesCoverImage from "../src/assets/images/silverBlades800.jpg";
import podCoverImage from "../src/assets/images/pod800.jpg";

export default function App() {
  const boxImages = [
    { name: "Pool of Radiance", image: poolRadCoverImage, alt:"pool of radiance game box", href:"/poolofradiance" },
    { name: "Curse of the Azure Bonds", image: azureCoverImage, alt: "curse of the azure bonds game box", href:"/azurebonds" },
    { name: "Secret of the Silver Blades", image: silverBladesCoverImage, alt: "secret of the silver blades game box", href:"/silverblades" },
    { name: "Pools of Darkness", image: podCoverImage, alt: "pools of darkness game box", href:"/poolsofdarkness" },
  ];

  function BoxImagesList(){

    return(
      boxImages.map((boxImage)=>{
        return(
          <div className="text-center hover:scale-110" key={boxImage.name}>
            <a href={boxImage.href}>
            <img style={{height:400}} src={boxImage.image} alt={boxImage.alt} />
            <h6 className="text-lg">{boxImage.name}</h6>
            </a>
          </div>
        )
      })
    )
  }

  return (
    <div className="mt-20 mb-20">
      <h2 className="text-center mb-10 font-bold text-3xl">
        Online editor for the Advanced Dungeons and Dragons gold box games.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center md:mx-10">
        <BoxImagesList />
      </div> 
      
    </div>
  );
}


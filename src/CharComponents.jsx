import * as CharFunctions from "./CharFunctions";
import * as InvFunctions from "./InventoryFunctions";
import { genders, alignments } from "./poolofradiance/PoolRadData";

export const CharAbilityDisplay = (props) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mt-5">
          <h4>Ability Scores</h4>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <div className="font-semibold">Strength:</div>
            <div>
              <CharFunctions.StrengthModule
                idText="strengthScore"
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                extStrIndex={props.extStrIndex}
                extStrIndexCurrent={props.extStrIndexCurrent}
                dataArrayIndex={props.strIndex}
                dataArrayIndexCurrent={props.strIndexCurrent}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <div className="font-semibold">Intelligence:</div>
            <div>
              <CharFunctions.ScoreModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.intIndex}
                dataArrayIndexCurrent={props.intIndexCurrent}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <div className="font-semibold">Wisdom:</div>
            <div>
              <CharFunctions.ScoreModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.wisIndex}
                dataArrayIndexCurrent={props.wisIndexCurrent}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <div className="font-semibold">Dexterity:</div>
            <div>
              <CharFunctions.ScoreModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.dexIndex}
                dataArrayIndexCurrent={props.dexIndexCurrent}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <div className="font-semibold">Constitution:</div>
            <div>
              <CharFunctions.ScoreModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.conIndex}
                dataArrayIndexCurrent={props.conIndexCurrent}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <div className="font-semibold">Charisma:</div>
            <div>
              <CharFunctions.ScoreModule
                dataArray={props.dataArray}
                setDataArray={props.setDataArray}
                dataArrayIndex={props.chaIndex}
                dataArrayIndexCurrent={props.chaIndexCurrent}
              />
            </div>
          </div>
        </div>

        <div className="mt-5 md:ml-8">
          <h4>Levels</h4>
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <div>
              <div className="font-semibold">Cleric: </div>
              <div>
                <CharFunctions.LevelModule
                  dataArray={props.dataArray}
                  setDataArray={props.setDataArray}
                  dataArrayIndex={props.clericIndex}
                />
              </div>
            </div>
            <div>
              <div className="font-semibold">Fighter: </div>
              <div>
                <CharFunctions.LevelModule
                  dataArray={props.dataArray}
                  setDataArray={props.setDataArray}
                  dataArrayIndex={props.fighterIndex}
                />
              </div>
            </div>
            {props.paladinIndex && (
              <div>
                <div className="font-semibold">Paladin: </div>
                <div>
                  <CharFunctions.LevelModule
                    dataArray={props.dataArray}
                    setDataArray={props.setDataArray}
                    dataArrayIndex={props.paladinIndex}
                  />
                </div>
              </div>
            )}
            {props.rangerIndex && (
              <div>
                <div className="font-semibold">Ranger: </div>
                <div>
                  <CharFunctions.LevelModule
                    dataArray={props.dataArray}
                    setDataArray={props.setDataArray}
                    dataArrayIndex={props.rangerIndex}
                  />
                </div>
              </div>
            )}
            <div>
              <div className="font-semibold">Magic-User: </div>
              <div>
                <CharFunctions.LevelModule
                  dataArray={props.dataArray}
                  setDataArray={props.setDataArray}
                  dataArrayIndex={props.magicUserIndex}
                />
              </div>
            </div>
            <div>
              <div className="font-semibold">Thief: </div>
              <div>
                <CharFunctions.LevelModule
                  dataArray={props.dataArray}
                  setDataArray={props.setDataArray}
                  dataArrayIndex={props.thiefIndex}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const CharInfoDisplay = (props) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-5">
        <div className="grid grid-cols-12">
          <div className="font-semibold col-span-4">Character Name</div>
          <div className="col-span-8">
          <CharFunctions.NameModule
        
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
          />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="font-semibold">Max HP:</div>
          <CharFunctions.HitPointModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            dataArrayIndex={props.maxHPIndex}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="font-semibold">Current HP:</div>
          <CharFunctions.HitPointModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            dataArrayIndex={props.currentHPIndex}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="font-semibold">Experience:</div>
          <CharFunctions.ExperienceModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            dataArrayIndex={props.experienceIndex}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="font-semibold">Class:</div>
          <CharFunctions.SelectModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            index={props.classIndex}
            dataList={props.classList}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="font-semibold">Alignment:</div>
          <CharFunctions.SelectModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            index={props.alignmentIndex}
            dataList={alignments}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="font-semibold">Status:</div>
          <CharFunctions.SelectModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            index={props.statusIndex}
            dataList={props.statusCodes}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="font-semibold">Race:</div>
          <CharFunctions.SelectModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            index={props.raceIndex}
            dataList={props.racesList}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="font-semibold">Gender:</div>
          <CharFunctions.SelectModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            index={props.genderIndex}
            dataList={genders}
          />
        </div>
      </div>
    </>
  );
};

export const CharMoneyComponent = (props) => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-5">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="font-semibold">Copper:</div>
          <InvFunctions.ItemWeightModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            value={props.copperIndex}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="font-semibold">Silver:</div>
          <InvFunctions.ItemWeightModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            value={props.silverIndex}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="font-semibold">Electrum:</div>
          <InvFunctions.ItemWeightModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            value={props.electrumIndex}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="font-semibold">Gold:</div>
          <InvFunctions.ItemWeightModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            value={props.goldIndex}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="font-semibold">Platinum:</div>
          <InvFunctions.ItemWeightModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            value={props.platinumIndex}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="font-semibold">Gems:</div>
          <InvFunctions.ItemWeightModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            value={props.gemsIndex}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="font-semibold">Jewelry:</div>
          <InvFunctions.ItemWeightModule
            dataArray={props.dataArray}
            setDataArray={props.setDataArray}
            value={props.jewelryIndex}
          />
        </div>
      </div>
    </>
  );
};

export const CharSavesDisplay = (props) => {
  return (
    <>
      <div className="text-center mb-5 mt-5">
        <em>
          These values are auto-generated by the gold box engine based on the
          original AD&D tables. Although you can edit these, the game will
          automatically reset them on load.
        </em>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
            <div className="font-semibold">Paralyzation, Poison, Death Magic</div>

            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.deathSaveIndex}
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
            <div className="font-semibold">Petrification and Polymorph</div>

            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.petriPolySaveIndex}
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
            <div className="font-semibold">Rod, Staff, Wand</div>

            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.rodStaffWandSaveIndex}
            />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
            <div className="font-semibold">Breath Weapon</div>

            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.breathWeaponSaveIndex}
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
            <div className="font-semibold">Spell</div>

            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.spellSaveIndex}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const ThiefSkillsDisplay = (props) => {
  return (
    <>
      <div className="text-center mt-5 mb-5">
        <em>
          These values are auto-generated by the gold box engine based on the
          original AD&D tables. Although you can edit these, the game will
          automatically reset them on load.
        </em>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
          <div className="font-semibold">Pick Pockets</div>
          <div>
            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.pickPocketsIndex}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
          <div className="font-semibold">Open Locks</div>
          <div >
            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.openLocksIndex}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
          <div className="font-semibold">Find/Remove Traps</div>
          <div >
            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.findTrapsIndex}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
          <div className="font-semibold">Move Silently</div>
          <div >
            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.moveSilentlyIndex}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
          <div className="font-semibold">Hide in Shadows</div>
          <div >
            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.hideInShadowsIndex}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
          <div className="font-semibold">Hear Noise</div>
          <div >
            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.hearNoiseIndex}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
          <div className="font-semibold">Climb Walls</div>
          <div >
            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.climbWallsIndex}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 ">
          <div className="font-semibold">Read Languages</div>
          <div >
            <CharFunctions.ValueModule
              dataArray={props.dataArray}
              setDataArray={props.setDataArray}
              dataArrayIndex={props.readLanguagesIndex}
            />
          </div>
        </div>
      </div>
    </>
  );
};

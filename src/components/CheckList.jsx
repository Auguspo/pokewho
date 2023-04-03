import React, { useState, useEffect } from "react";
import PokemonSelection from "./PokemonSelection";
const CheckList = () => {
  const [generations, setGenerations] = useState([
    { id: 1, name: "Generation I", isChecked: false, range: [0, 150] },
    { id: 2, name: "Generation II", isChecked: false, range: [151, 251] },
    { id: 3, name: "Generation III", isChecked: false, range: [252, 386] },
    { id: 4, name: "Generation IV", isChecked: false, range: [387, 493] },
    { id: 5, name: "Generation V", isChecked: false, range: [494, 649] },
    { id: 6, name: "Generation VI", isChecked: false, range: [650, 721] },
    { id: 7, name: "Generation VII", isChecked: false, range: [722, 809] },
    { id: 8, name: "Generation VIII", isChecked: false, range: [810, 905] },
    { id: 9, name: "Select All", isChecked: false },
  ]);

  const [range, setRange] = useState();

  useEffect(() => {
    const FormSubmit = () => {
      let selectedGenerations = [];
      generations.forEach((generation) => {
        if (generation.isChecked) {
          selectedGenerations.push(generation.range);
        }
      });
      setRange(selectedGenerations);
      
    };

    FormSubmit();
  }, [generations]);

  const handleCheck = (event, id) => {
    const newGenerations = generations.map((generation) => {
      if (generation.id === id) {
        return {
          ...generation,
          isChecked: !generation.isChecked,
        };
      }
      return generation;
    });

    if (
      newGenerations.filter((generation) => generation.isChecked).length === 8
    ) {
      newGenerations.filter((generation) => generation.isChecked === true)
        .length === generations.length;
    }

    setGenerations(newGenerations);
  };

  const handleSelectAll = (event) => {
    const newGenerations = generations.map((generation) => {
      return {
        ...generation,
        isChecked: event.target.checked,
      };
    });
    setGenerations(newGenerations);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let selectedGenerations = [];
    generations.forEach((generation) => {

      if (generation.isChecked && generation.name !== "Select All") {
        selectedGenerations.push(generation.range);
      }
    
    });
    console.log("?");
  
    setRange(selectedGenerations);
   
  };

  const noSelection = !generations.some((generation) => generation.isChecked);

  return (
    <div >
      <h1 className="text-5xl my-6">Selecciona La Generación Pokémon:</h1>
      <form className="checkboxForm m-8  content-center inline-block" onSubmit={handleFormSubmit}>
        {generations.map((generation) => {
          return (
            <div className="flex" key={generation.id}>
              {generation.id !== 9 ? (
                <label className=" flex ">
                  {" "}
                  <input className="mr-10 leading-tight "
                    type="checkbox"
                    checked={generation.isChecked}
                    onChange={(event) => handleCheck(event, generation.id)}
                  />
                  {generation.name}
                </label>
              ) : (
                <label className="flex">
                  {" "}
                  <input className="mr-10 leading-tight"
                    type="checkbox"
                    checked={
                      generations.filter(
                        (generation) => generation.isChecked === true
                      ).length === generations.length
                    }
                    onChange={handleSelectAll}
                  />{" "}
                  Select All
                </label>
              )}
            </div>
          );
        })}
        <div></div>

        {noSelection ? (
        <a className="bg-blue-500 flex justify-center hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded my-4 ">Please select<br />at least one</a>
      ) : (
        <PokemonSelection type="submit" gens={range}></PokemonSelection>
      )}
      </form>
    </div>
  );
};

export default CheckList;

import React from "react";

function Info({ data }) {
  console.log(data);
  return (
    <>
      <div className=" flex justify-between p-4">
        <div>
          <img src={data.Poster} alt="Poster" width={190} />
        </div>
        <div className=" text-center flex-1">
          <p className=" text-2xl font-bold">{data.Title}</p>
          <div className=" flex justify-center m-4 items-center">
            <p className="material-symbols-outlined mx-1 text-yellow-500">
              star
            </p>
            <p className=" font-bold mx-1">{data.imdbRating}</p>
          </div>
          <div className=" flex justify-evenly text-slate-400">
            <p>{data.Rated}</p>
            <p>{data.Year}</p>
            <p>{data.Runtime}</p>
          </div>
          <div className=" flex justify-evenly m-4">
            {data.Genre.split(",").map((element) => {
                console.log(element);
                return (
                  <p className=" border border-slate-300 p-1 px-5 rounded text-slate-300">
                    {element}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
      <div className=" my-4">
        <p className=" text-xl">Plot:</p>
        <p className=" text-slate-400">{data.Plot}</p>
      </div>
      <div className=" my-4">
        <p className=" text-xl">Director:</p>
        <p className=" text-slate-400">{data.Director}</p>
      </div>
      <div className=" my-4">
        <p className=" text-xl">Cast:</p>
        <p className=" text-slate-400">{data.Actors}</p>
      </div>
    </>
  );
}

export default Info;

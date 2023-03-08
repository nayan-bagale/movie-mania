import React, { useState, useRef, useEffect} from 'react'
import Info from './info'

function Layout() {
    let URL_BASE = "https://www.omdbapi.com/";
    const API_KEY = "&apikey=9b910094";

    const [urlval, setURLval] = useState('');
    const [data, setData] = useState({});
    const inputValue = useRef();

    function searchData() {
      const dt = inputValue.current.value.replaceAll(" ", "+");
      if(dt === '') {
        setData({})
        return
      }
      const URL = URL_BASE + `?t=${dt}` + API_KEY;
      setURLval(URL);
    }

    useEffect(() => {
      fetch(urlval)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((e) => setData(e));
      console.log("inside effect");
    }, [urlval]);

    const style = {
      minWidth: '60vh',
      maxWidth: '80vh'
    }

    let conData;
    if (Object.keys(data).length !== 0) {
      conData = data.Response === 'True' ? <Info data={data} /> : <h1>{data.Error}</h1>;
    }else{
      conData = <h1></h1>
    }

  return (
    <div className=" bg-slate-800 p-10 rounded-lg flex flex-col text-white h-auto" style={style}>
      <div className=" flex m-1 mt-8 mb-4 justify-between ">
        <input
          type="text"
          ref={inputValue}
          id="search"
          className=" flex-1 p-2 px-2 rounded mx-1 bg-transparent border-white border outline-0 outline-white"
        />
        <button
          onClick={searchData}
          className=" bg-yellow-500 p-1 px-10 rounded mx-4 text-black"
        >
          Search
        </button>
      </div>
      {conData}
    </div>
  );
}

export default Layout
import React, { use, useEffect, useState } from "react";

const Api = () => {
  const [countrys, setCountrys] = useState([]);
  const [filteredCountrys, setFilteredCountrys] = useState([]);
  const [search, setSearch] = useState("");

  const [loader, setLoader] = useState(true);

  function delay(delay = 5) {
    return new Promise(function (res, rej) {
      setTimeout(function () {
        console.log(2);
        res("vijay");
      }, 1000 * delay);
    });
  }

  useEffect(() => {
    async function fetchData() {
      //   fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      //     .then((res) => res.json())
      //     .then((countryDatas) => {
      //       console.log("response", countryDatas);
      //     });
      setLoader(true);
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags"
      );
      const countryDatas = await response.json();
      await delay(5);
      console.log("response", countryDatas);
      setCountrys(countryDatas);
      setLoader(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filteredCountry = countrys.filter((country) => {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredCountrys(filteredCountry);
  }, [search, countrys]);

  if (loader) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredCountrys.map((country) => {
          return (
            <div
              className="countryCard"
              style={{
                padding: "10px",
              }}
            >
              <img src={country.flags.png} alt="" width={150} height={100} />
              <h3>{country.name.common}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Api;

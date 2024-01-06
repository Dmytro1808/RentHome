import React, { useState, useEffect, createContext } from "react";
import { housesData } from "../data";

export const HouseContext = createContext();
const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [properties, setProperties] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);
  //country
  useEffect(() => {
    const AllCountries = houses.map((houses) => {
      return houses.country;
    });
    const uniqueCountries = ["Location (any)", ...new Set(AllCountries)];

    setCountries(uniqueCountries);
  }, []);
  //houses.type
  useEffect(() => {
    const AllProperties = houses.map((houses) => {
      return houses.type;
    });
    const uniqueProperties = ["Location (any)", ...new Set(AllProperties)];

    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    setLoading(true);
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };
    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);

    let newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      if (
        (isDefault(country) || house.country === country) &&
        (isDefault(property) || house.type === property) &&
        (isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice))
      ) {
        return true;
      }
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return true;
      }
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      if (!isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }

      return false;
    });
    if (!isDefault(country) && !isDefault(property) && !isDefault(price)) {
      newHouses = newHouses.filter((house) => house.country === country);
    }
    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        countries,
        country,
        setCountry,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;

import countries from "@/public/countries";

const useCountries = () => {
  const getAll = () => countries;

  const getByValue = (value: string) => {
    return countries.find((item) => item.value === value);
  }

  return {
    getAll,
    getByValue
  }
};

export default useCountries;

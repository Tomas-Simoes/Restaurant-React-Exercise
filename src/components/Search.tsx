import { Fragment, useEffect, useState } from "react";
import "../style/Meals/Search.css";

const Search = ({ onSearch }: { onSearch: (textToSearch: string) => void }) => {
  const [textToSearch, setTextToSearch] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextToSearch(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(textToSearch);
    }, 700);

    return () => {
      clearTimeout(timer);
    };
  }, [textToSearch]);

  return (
    <Fragment>
      <input
        type="search"
        name="search"
        className="input-search"
        placeholder="Search"
        onChange={onChangeInput}
        required
      />
    </Fragment>
  );
};

export default Search;

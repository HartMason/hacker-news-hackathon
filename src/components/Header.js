import React from "react";

const Header = (props) => {
  const { setSearchParams, setCategory, category, searchParam, handleSubmit } = props

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchParams(e.target.value)
  };

  const handleOption = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value)

  };


  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchParam} onChange={handleChange} />
        <select value={category} onChange={handleOption}>
          <option value={"story"}>Stories</option>
          <option value={"author"}>Author</option>
          <option value={"comments"}>Comments</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </header>
  );
};

export default Header;

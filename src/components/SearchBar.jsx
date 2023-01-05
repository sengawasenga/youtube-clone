import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSearchSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e7e7e74d",
        backgroundColor: "transparent",
        pl: 2,
        boxShadow: "none",
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="search-bar"
      />
      <IconButton
        type="submit"
        sx={{
          py: "10px",
          px: "20px",
          color: "#dfdfdf",
          borderRadius: "0 20px 20px 0",
          background: "#9999994d",
          borderLeft: "1px solid #e7e7e74d",
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

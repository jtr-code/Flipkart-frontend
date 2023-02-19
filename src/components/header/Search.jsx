import { InputBase, Box, List, ListItem, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProducts } from "../../redux/actions/productActions";

import { Link } from "react-router-dom";

//      <--------------------------------------- styled section starts-------------------------------->

const SearchContainer = styled(Box)(({ theme }) => ({
  background: "#fff",
  width: "38%",
  borderRadius: "2px",
  marginLeft: "10px",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const InputSearchBase = styled(InputBase)(({ theme }) => ({
  paddingLeft: "20px",
  width: "100%",
  fontSize: "unset",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const SearchIconWrapper = styled(Box)`
  color: #2874f0;
  padding: 5px;
  display: flex;
  cursor: pointer;
`;

const ListWrapper = styled(List)(({ theme }) => ({
  position: "absolute",
  background: "#ffff",
  color: "#000",
  marginTop: "35px",
  width: "37%",
  [theme.breakpoints.down("md")]: {
    width: "77%",
  },
}));

//      <--------------------------------------- styled section ends-------------------------------->

const Search = () => {
  const [text, setText] = useState("");

  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getText = (text) => {
    setText(text);
  };
  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products, brands and more"
        onChange={(event) => getText(event.target.value)}
        value={text}
      />

      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && (
        <ListWrapper>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link
                  to={`/product/${product.id}`}
                  onClick={() => setText("")}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;

import { MenuItem } from "@mui/base";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  Pagination,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../context/auth";

function HomePg() {
  const [filters, setFilters] = useState([]);
  const [bookResonse, setBookResonse] = useState({
    pageIndex: 0,
    pageSize: 10,
    totalPages: 1,
    items: [],
    totalItems: 0,
  });

  const authContext = useAuthContext();
  const sortBook = () => {};
  const sortBy = () => {};
  return (
    <div className="">
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          marginTop: "50px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Book Listing
      </Typography>
      <div className="flex items-center justify-center m-6">
        <div className="border-t-2 border-[#f14d54] w-32"></div>
      </div>
      <Grid>
        <Grid item xs={6}>
          <Typography>
            Total<span> - {10} items</span>
          </Typography>
        </Grid>
        <div>
          <TextField
            name="text"
            placeholder="Search..."
            variant="outlined"
            size="small"
            sx={{}}
            onChange={(e) => {
              setFilters({
                ...filters,
                keyword: e.target.value,
                pageIndex: 1,
              });
            }}
          />
        </div>
        <FormControl fullWidth>
          <InputLabel htmlFor="select">Sort By</InputLabel>
          <Select onChange={sortBook} value={sortBy}>
            <MenuItem value="a-z">a - z</MenuItem>
            <MenuItem value="z-a">z - a</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <div>
        <img src="../assets/logo.jpg" alt="Book image" />
        <Typography>Book Name</Typography>
        <span>Book Categories</span>
        <p>Description</p>
        <p>
          <span>MRP{100}</span>
        </p>
        {/* onClick={()=>addToCart(book) */}
        <Button>Add To Cart</Button>
      </div>
      <div>
        <Pagination
          count={"10"}
          page={"1"}
          onChange={(e, newPage) => {
            setFilters({
              ...filters,
              pageIndex: newPage,
            });
          }}
        />
      </div>
    </div>
  );
}

export default HomePg;
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} style={{ display: "flex" }}>
      <Form.Control
        style={{ display: "inline" }}
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="ms-sm-2 me-sm-2"
      ></Form.Control>
      <Button type="submit" variant="outline-success" inline className="p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;

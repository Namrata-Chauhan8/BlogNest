import React, { useState, useContext } from "react";

import {
  styled,
  Box,
  TextareaAutosize,
  Button,
  InputBase,
  FormControl,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import API from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Container = styled(Box)(({ theme }) => ({
  margin: "50px 100px",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));



const StyledFormControl = styled(FormControl)`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;

const InputTextField = styled(InputBase)`
  flex: 1;
  margin: 0 30px;
  font-size: 25px;
  border: 1px solid black;
  margin-top: 20px;
  top: 200;
`;

const Textarea = styled(TextareaAutosize)`
  width: 100%;
  border: none;
  margin-top: 50px;
  font-size: 18px;
  border: 1px solid black;
  &:focus-visible {
    outline: none;
  }
`;

const initialPost = {
  title: "",
  description: "",
  username: "",
  categories: "",
  createdDate: new Date(),
};

const CreatePost = () => {
  const navigate = useNavigate();

  const [post, setPost] = useState(initialPost);

  const { account } = useContext(DataContext);
  const location = useLocation();

  post.categories = location.search?.split("=")[1] || "All";
  post.username = account.username;

  const savePost = async () => {
    try {
      await API.createPost(post);
      navigate("/");
    } catch (error) {
      handleError(error);
    }
  };
  const handleError = (error) => {
    console.error(error);
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };


  return (
    <Container>
      <StyledFormControl>
        <InputTextField
          onChange={(e) => handleChange(e)}
          name="title"
          placeholder="Title"
        />
        <Button
          variant="contained"
          onClick={() => savePost()}
          style={{ marginTop: "20px" }}
          color="primary"
        >
          Publish
        </Button>
      </StyledFormControl>

      <Textarea
        minRows={5}
        placeholder="Tell your story..."
        name="description"
        onChange={(e) => handleChange(e)}
      />
    </Container>
  );
};

export default CreatePost;

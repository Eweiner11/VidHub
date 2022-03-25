import React, { useState} from "react";
import { useDispatch,useSelector } from 'react-redux';
import {setFavoritesList} from "../../actions/index"
import { Modal, Form } from "react-bootstrap";
import Axios from "axios";

const FavoritesModal = (props) => {
  const [show, setShow] = useState(true);
  const [currentWord, ChangeCurrentWord] = useState("");
  const dispatch = useDispatch()
  const favList = useSelector(state=> state.favoritesList)
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    ChangeCurrentWord(e.target.value);
  };


  const handleSubmit = (e, currentWord) => {
    e.preventDefault();
    dispatch(setFavoritesList([...favList,{link:props.link,name:currentWord}]))
    Axios.post("/addFavorite", {
      userName: props.userName,
      link: props.link,
      name: currentWord,
    })
    handleClose();
  };

  return (
    <>
      <Modal
        onSubmit={(e) => handleSubmit(e, currentWord)}
        show={show}
        onHide={handleClose}
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>ADD FAVORITE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nickname:</Form.Label>
              <Form.Control
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Enter Favorites Nickname"
              />
              <Form.Text className="text-muted">10 character max</Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FavoritesModal;
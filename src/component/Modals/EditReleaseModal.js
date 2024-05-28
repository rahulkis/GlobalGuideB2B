import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE_URL } from '../../constants/Api';
import { RELEASE } from '../../constants/AppConstants';

const EditReleaseModal = (props) => {
  console.log({props})
  const { show, onHide, data } = props;
  const [title, setTitle] = useState('');

    // Set the initial title when the data prop changes
    useEffect(() => {
      if (data && data.release_name) {
        setTitle(data.release_name);
      }
    }, [data]);

  const handleEditRelease = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_BASE_URL + RELEASE.EDIT_RELEASE_BY_ID.replace("{id}", data.release_id), { name: title });
      if (response.status === 200) {
        onHide();
        setTitle('')
      }
    } catch (err) {
      console.error(err);
      if (err.response) {
        console.error(err.response.data.message);
      }
    }
  };

  const handleClose = () => {
    setTitle('');
    onHide();
  };

  return (
    <Modal className="edit-heading-modal"  show={show} onHide={onHide} centered style={{color:'black'}}>
      <Modal.Header closeButton>
        <Modal.Title className='text-color'>Update Release Title</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleEditRelease}>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{color: 'black'}}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button className='custom_outline_btn'  onClick={handleClose}>
            Cancel
          </Button>
          <Button  className='custom_btn' type="submit">
            Update
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default EditReleaseModal;

const { InputGroup, Form, Modal, Button } = require("react-bootstrap");
import styles from "@/styles/common/Header.module.css";
import { FiSearch } from "react-icons/fi";
function SearchModel(props) {
  return (
    <Modal {...props} size="sm" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>Search</Modal.Header>
      <Modal.Body>
        <div>
          <Form.Control
            aria-label="First name"
            value={props.value}
            onChange={props.change}
            onKeyDown={props.keydown}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default SearchModel;

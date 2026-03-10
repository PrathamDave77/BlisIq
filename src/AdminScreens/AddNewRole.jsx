import React, { useState } from "react";
import Select from "../Base/Components/Input/Select.jsx";
import Inputfields from "../Base/Components/Input/Inputfields.jsx";
import Textareainputfield from "../Base/Components/Input/Textareainputfield.jsx";
import Modal from "../Base/Components/Modal/Modal.jsx";

const AddNewRole = () => {
  const [showSiteModal, setShowSiteModal] = useState(true);

  return (
    <Modal
      isOpen={showSiteModal}
      onClose={() => setShowSiteModal(false)}
      title="New role"
      subtitle="Create a custom role by defining its name and permissions."
      buttonText="Continue"
      width="50vw"
    >
      <Select size="md" searchable placeholder="Admin" />

      <Inputfields
        size="md"
        label="Role name"
        placeholder="E.g. Student mentor"
        required
      />

      <Textareainputfield
        label="Role description"
        placeholder="You can describe about role..."
        required
      />
    </Modal>
  );
};

export default AddNewRole;
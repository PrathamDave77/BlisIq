import React, { useState } from "react";
import Select from "../../Base/Components/Input/Select.jsx";
import Inputfields from "../../Base/Components/Input/Inputfields.jsx";
import Textareainputfield from "../../Base/Components/Input/Textareainputfield.jsx";
import Modal from "../../Base/Components/Modal/Modal.jsx";

const Addnewgroup = ({setAddGroup}) => {
  const [showSiteModal, setShowSiteModal] = useState(true);

  return (
    <Modal
      isOpen={showSiteModal}
      onClose={() => setAddGroup(prev => !prev)}
      title="Create New Group"
      subtitle="Add user in your csr foundation organization"
      buttonText="Continue"
      width="50vw"
    >
      <Select size="md" searchable placeholder="Group name" required/>

      <Inputfields
        size="md"
        label="Group name"
        placeholder="E.g. Student mentor"
        required
      />

      <Textareainputfield
        label="Group description"
        placeholder="You can describe about Group..."
        required
      />
    </Modal>
  );
};

export default Addnewgroup;
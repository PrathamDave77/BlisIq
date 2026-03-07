import React from 'react'
import { useState } from 'react';
import Select from '../Base/Components/Input/Select.jsx';
import Inputfields from '../Base/Components/Input/Inputfields.jsx';
import Textareainputfield from '../Base/Components/Input/Textareainputfield.jsx';
import Modal from "../Base/Components/Modal/Modal.jsx";
import { Close } from '../Base/Creator/Icons/Icons.jsx';
import ModalActions from '../Base/Components/Modal/ModalActions.jsx';

const AddNewRole = () => {
  const [showSiteModal, setShowSiteModal] = useState(true);
  return (
    <div className="bg-(--color-alpha-black-20) backdrop-blur-sm flex p-2.5 justify-center items-center w-full">

      <div className="flex p-xs items-center gap-2.5 shrink-0 rounded-3xl bg-(--color-alpha-black-10) backdrop-blur-sm w-full h-full">

        <div className="flex flex-col items-start flex-1 rounded-2xl border border-border-secondary-alt bg-bg-primary shadow-xs ">
          <Modal isOpen={showSiteModal} onClose={() => setShowSiteModal(false)} title="New Role" subtitle="Create a custom role by defining its name and permissions." buttonText={Close} width="640px">
            <div className="flex px-3xl pt-3xl justify-center items-start gap-md self-stretch h-full w-full">
              <div id="Form" className="flex flex-col items-start justify-center gap-xl flex-1">
                <Select size="md" searchable label="Admin" />
                <Inputfields size="md" label="Role name" required />
                <Textareainputfield label="Role description" required />
              </div>
            </div>
          </Modal>
          <ModalActions variant="Checkbox" Divider />
        </div>

      </div>

    </div>

  )
}

export default AddNewRole

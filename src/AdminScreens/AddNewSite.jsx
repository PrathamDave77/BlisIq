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
            title="Add new site"
            subtitle="Enter the details below to add a new site."
            buttonText="Save"
            width="50vw"
        >
            <Select size="md" searchable label="Site name" placeholder="Enter your site name" required />

            <Select size="md" searchable label="Country" placeholder="Select a country" required />
            <div className="flex gap-xl">
                <Select size="md" searchable label="State" placeholder="Select a state" required />
                <Select size="md" searchable label="City" placeholder="Select a city" required />
            </div>


            <Select size="md" searchable label="Address" placeholder="Enter your Address here" required />

        </Modal>
    );
};

export default AddNewRole;
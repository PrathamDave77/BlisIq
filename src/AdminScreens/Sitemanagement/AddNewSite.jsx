import React, { useState } from "react";
import Select from "../../Base/Components/Input/Select.jsx";
import Inputfields from "../../Base/Components/Input/Inputfields.jsx";
import Textareainputfield from "../../Base/Components/Input/Textareainputfield.jsx";
import Modal from "../../Base/Components/Modal/Modal.jsx";
import {UsePost} from '../../Usefetch.jsx';

const AddNewSite = () => {
    const [showSiteModal, setShowSiteModal] = useState(true);
    const [query, setQuery] = useState({
        siteName: "",
        country: "",
        state: "",
        city: "",
        address: "",
    });

    const handleChange = (field) => (value) => {
        setQuery((prev) => ({...prev,[field]:value}));
    }

    const AddtoSite = () => {
        UsePost({   
            siteName:query.siteName,
            country:query.country,
            state:query.state,
            city:query.city,
            address:query.address,
        });
    };
    return (
        <Modal
            isOpen={showSiteModal}
            onClose={() => setShowSiteModal(false)}
            title="Add new site"
            subtitle="Enter the details below to add a new site."
            buttonText="Save"
            Eventhandler={AddtoSite}
            width="50vw"
        >
            <Select size="md" searchable label="Site name" placeholder="Enter your site name" setQuery={setQuery} required onChange={handleChange("siteName")}/>

            <Select size="md" searchable label="Country" placeholder="Select a country" setQuery={setQuery} required onChange={handleChange("country")}/>
            <div className="flex gap-xl">
                <Select size="md" searchable label="State" placeholder="Select a state" setQuery={setQuery} required onChange={handleChange("state")}/>
                <Select size="md" searchable label="City" placeholder="Select a city" setQuery={setQuery} required onChange={handleChange("city")}/>
            </div>

            <Select size="md" searchable label="Address" placeholder="Enter your Address here" setQuery={setQuery} required onChange={handleChange("address")}/>

        </Modal>
    );
};

export default AddNewSite;
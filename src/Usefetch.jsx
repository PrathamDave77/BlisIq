import React from 'react';
import { useState, useEffect } from 'react';
import api from './Services/Api.js';

export const Usefetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/api/v2/admin/organisation/sites`);
                if (response.data) {
                    setData(response.data.data);
                    setLoading(false);
                }
            }
            catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, []);

    return { data, loading, error }
}

export const UsePost = async ({ siteName, country, state, city, address }) => {
    const siteElement = { address, city, state, country, siteName };

    try {
        // Step 1 — fetch existing sites first
        const existing = await api.get(`/api/v2/admin/organisation/sites`);
        const existingSites = existing.data.data.sites;  // ← array of existing sites
        
        console.log("Existing sites:", existingSites);

        // Step 2 — post existing + new site together
        const senddata = await api.post(`/api/v2/admin/organisation/sites`, {
            siteName,
            country,
            state,
            city,
            address,
        });

        if (senddata.data) {
            console.log("Posted successfully:", senddata.data);
        }

    } catch (err) {
        console.error("Post failed:", err);
    }
};



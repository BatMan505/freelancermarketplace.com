import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            const res = await axios.get("http://localhost:5000/api/services");
            setServices(res.data);
        };
        fetchServices();
    }, []);

    return (
        <div>
            <h1>Available Services</h1>
            {services.map(service => (
                <div key={service._id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    <p>Price: ${service.price}</p>
                    <p>Delivery: {service.deliveryTime}</p>
                    <p>Freelancer: {service.freelancer.name}</p>
                    <p>Skills: {service.freelancer.skills.join(", ")}</p>
                </div>
            ))}
        </div>
    );
}

export default Dashboard;

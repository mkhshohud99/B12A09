import React, { useEffect, useState } from 'react';

const PopulerSection = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [])

    console.log(services)



    return (
        <div className='mt-8 px-[145px]'>
            <div>
                <h3 className='font-bold text-3xl text-center'>Popular pet Section</h3>
                {
                    services.map(service =>
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                    src={service?.image}
                                    alt="Pet Image" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{service?.serviceName}</h2>
                                <div>
                                    <p>Peice: {service?.price}</p>
                                    <p>Ratings: {service?.rating}</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PopulerSection;
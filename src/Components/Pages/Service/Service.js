import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hoks/useHoks';
import ServiceDetails from './ServiceDetails';

const Service = () => {
  useTitle('Services')
    const services = useLoaderData()
    return (
      <div>
        <div className="w-4/5 m-auto">
          <div className="my-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
            {services.map((service) => (
              <ServiceDetails
                key={service._id}
                service={service}
              ></ServiceDetails>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Service;
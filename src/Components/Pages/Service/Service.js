import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hoks/useHoks';
import useServiceLoadData from '../../Hoks/useServicedataLoad';
import ServiceDetails from './ServiceDetails';

const Service = () => {
  useTitle('Services')
    const {service, loading} = useServiceLoadData()
    return (
      <div>
        <div className="w-4/5 m-auto">
          <div className="mb-12 pt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
            {loading ? (
              <div className=" flex justify-center items-center lg:-ml-[150px] w-[100vw] h-[100vh]">
                <div className="w-16 h-16 bg-green-500 rounded-full animate-spin border-4 p-2 border-white border-dashed">
                  <div className="w-full h-full rounded-full bg-white"></div>
                </div>
              </div>
            ) : (
              service?.map((service) => (
                <ServiceDetails
                  key={service._id}
                  service={service}
                ></ServiceDetails>
              ))
            )}
          </div>
        </div>
      </div>
    );
};

export default Service;
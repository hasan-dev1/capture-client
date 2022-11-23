import React from 'react';

const HomePricingPlan = ({plan}) => {
    const {planprice, planname, limit, descryption} = plan;
    return (
      <div className="card mx-auto w-[90%] bg-base-100 rounded shadow-xl hover:text-sky-400">
        <h2 className="text-center border-b-2 py-3 text-2xl font-bold rounded-t-lg">
          {planname}
        </h2>
        <div className="card-body text-center">
          <h2 className=" pt-4 pb-12 ">
            <span className="text-xl">$</span>
            <span className=" text-8xl font-bold">{planprice}</span>{" "}
            <span className='font-bold'>{limit}</span>
          </h2>
          <div className="text-start font-semibold py-6">
            {descryption.map((item, idx) => (
              <li className='py-2' key={idx}>{item}</li>
            ))}
          </div>
          <div className="card-actions justify-end py-8">
            <button className=" bg-emerald-300 text-xl font-bold py-2 rounded border-0 px-2 w-full text-center shadow-lg text-white">
              Purchase
            </button>
          </div>
        </div>
      </div>
    );
};

export default HomePricingPlan;
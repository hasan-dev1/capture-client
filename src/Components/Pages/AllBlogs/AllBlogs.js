import React from 'react';
import useTitle from '../../Hoks/useHoks';

const AllBlogs = () => {
    useTitle('Blog')
    return (
      <div>
        <div className="w-3/5 mx-auto pt-12">
          <div>
            <h3 className="text-4xl font-bold text-center mb-12">
              Importent Questions
            </h3>
          </div>
          <div>
            <h3 className="text-2xl font-bold my-3">
              1. Difference between SQL and NoSQL
            </h3>
            <p className="text-xl my-2 ml-6">
              {" "}
              <strong>Answear</strong> SQL is the programming language used to
              interface with relational databases. (Relational databases model
              data as records in rows and tables with logical links between
              them). NoSQL is a class of DBMs that are non-relational and
              generally do not use SQL.{" "}
            </p>
            <p className="text-xl my-2 ml-6">
              From analysts and engineers to IT decision makers, many are
              familiar with Relational Database Management Systems (RDBMS) and
              the Structured Query Language (SQL) used to interact with them.
              While these terms refer to a decades-old paradigm which remains a
              wide standard, today the sheer variety and depth of database
              systems can be dizzying. What's more, rising volumes of
              unstructured data, availability of storage and processing power,
              and evolving analytic requirements have generated interest in
              fundamentally different technologies.
            </p>
          </div>
          <div className="my-12">
            <h3 className="text-2xl font-bold my-3">
              2. What is JWT, and how does it work?
            </h3>
            <p className="text-xl my-2 ml-6">
              {" "}
              <strong>Answear</strong> JSON Web Token (JWT) is an open standard
              (RFC 7519) that defines a compact and self-contained way for
              securely transmitting information between parties as a JSON
              object. This information can be verified and trusted because it is
              digitally signed.
            </p>
          </div>
          <div className="my-12">
            <h3 className="text-2xl font-bold my-3">
              3. What is the difference between javascript and NodeJS?
            </h3>
            <p className="text-xl my-2 ml-6">
              {" "}
              <strong>Answear</strong> JavaScript is a simple programming
              language that can be used with any browser that has the JavaScript
              Engine installed. Node. js, on the other hand, is an interpreter
              or execution environment for the JavaScript programming language
            </p>
            <p className="text-xl my-2 ml-6">
              JavaScript is a client-side scripting language that is
              lightweight, cross-platform, and interpreted. Both Java and HTML
              include it. Node.js, on the other hand, is a V8-based server-side
              programming language.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold my-3">
              4. How does NodeJS handle multiple requests at the same time?
            </h3>
            <p className="text-xl my-2 ml-6">
              {" "}
              <strong>Answear</strong> How NodeJS handle multiple client
              requests? NodeJS receives multiple client requests and places them
              into EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them.
            </p>
            <p className="text-xl my-2 ml-6">
              How NodeJS handle multiple client requests? NodeJS receives
              multiple client requests and places them into EventQueue. NodeJS
              is built with the concept of event-driven architecture. NodeJS has
              its own EventLoop which is an infinite loop that receives requests
              and processes them.
            </p>
          </div>
        </div>
      </div>
    );
};

export default AllBlogs;
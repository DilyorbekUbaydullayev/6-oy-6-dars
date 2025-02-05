import React from 'react';
import { Oval } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className="flex justify-center mt-10">
     <Oval
  visible={true}
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="oval-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  );
};

export default Loader;
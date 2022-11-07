import React from "react";
import LoaderContainer from "../../containers/LoaderContainer";
import Hennifant from "../../assets/images/Hennifant";

const Loader = () => {
  return <LoaderContainer>{<Hennifant width={250} />}</LoaderContainer>;
};

export default Loader;

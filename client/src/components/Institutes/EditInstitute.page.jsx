import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavInstitute from "./NavInstitute";
import InformationInstitute from "./InformationInstitute";
import StatsInstitute from "./StatsInstitute";
import MainInstituteInformation from "./MainInstituteInformation";
import ListCarrersInstitute from "./ListCarrersInstitute";
export const EditInstitutePage = () => {
    return (
<>
<NavInstitute/>
<MainInstituteInformation/>
<InformationInstitute/>
<StatsInstitute/>
<ListCarrersInstitute/>
</>
    );
};

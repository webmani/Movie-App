import React from "react";
import { SelectedFilters } from "@appbaseio/reactivesearch";


const SelectFilters = () => {
  return <SelectedFilters showClearAll={true} clearAllLabel="Clear filters" />;
};

export default SelectFilters;
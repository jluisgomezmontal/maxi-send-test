import { entries } from "../data/sample.json";
import { PropTypes } from "prop-types";

export const useData = (anyData) => {
  const data = entries
    .filter((entrie) => entrie.releaseYear >= 2010)
    .filter((entrie) => entrie.programType === anyData)
    .slice(0, 20)
    .sort((a, b) => a.title.localeCompare(b.title));
  return [data];
};

useData.propTypes = {
  anyData: PropTypes.object.isRequired,
};

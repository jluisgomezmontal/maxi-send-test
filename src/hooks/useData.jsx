import { entries } from "../data/sample.json";
import { PropTypes } from "prop-types";

export const useData = (anyData, filter, results) => {
  const data = entries
    .filter((entrie) => entrie.releaseYear >= 2010)
    .filter((entrie) => entrie.programType === anyData)
    .slice(0, results)
    .sort((a, b) => a.title.localeCompare(b.title));

  if (filter) {
    return [data.sort((a, b) => a.releaseYear - b.releaseYear)];
  }
  return [data];
};

useData.propTypes = {
  anyData: PropTypes.object.isRequired,
};

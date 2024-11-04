import { Tag } from "./Tag";

/* eslint-disable react/prop-types */
const TagsList = ({ tags }) => {
  const tagsList = tags.map((tag, index) => <Tag key={index} tag={tag} />);
  return <div className="tags">{tagsList}</div>;
};

export { TagsList };

/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, hubHeading }) => {
  return (
    <div className="my-5">
      <p className="text-center">{hubHeading}</p>
      <h1 className="text-center">{heading}</h1>
    </div>
  );
};

export default SectionTitle;

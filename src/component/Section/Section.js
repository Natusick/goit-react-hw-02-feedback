import PropsType from "prop-types";

const Section = ({ title, children }) => {
  return (
    <section>
      {title && <h2> {title} </h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropsType.string,
};

export default Section;

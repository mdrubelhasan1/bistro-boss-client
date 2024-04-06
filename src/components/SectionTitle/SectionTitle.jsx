
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className=" mx-auto md: w-3/12 mb-4 text-center">
          <p className="text-yellow-600">---{subHeading}---</p>  
          <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
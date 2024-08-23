import doctors from "../../assets/img/doctors.png";
const Footer = () => {
  return (
    <div className="w-full text-white uppercase bg-green-900 p-5 bg-green flex-center">
      <div className="w-52 flex flex-col items-start justify-start h-full">
        <h1 className="font-semibold text-2xl mb-5 border-b">bmi calculator</h1>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo alias
          molestiae adipisci similique nesciunt libero mollitia placeat non
          dicta, ex reprehenderit ea harum fugiat odit laboriosam veritatis
          cupiditate nulla optio?
        </span>
      </div>
      <img src={doctors} className="w-1/2" alt="" />
      <span className="w-52">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam porro
        molestiae adipisci sunt error laudantium animi reprehenderit
        necessitatibus magnam obcaecati quibusdam quae voluptatibus nulla
        incidunt libero ea, laborum praesentium.
      </span>
    </div>
  );
};

export default Footer;

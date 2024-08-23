import alisanProfile from "../../assets/img/alisanProfile.jpg";

import corn from "../../assets/img/corn.png";
import pepar from "../../assets/img/pepar.png";
import cucumber from "../../assets/img/cucumber.png";

const Contact = () => {
  return (
    <div className=" w-full h-full container flex-center relative ">
      <div className="w-2/3  bg-slate-200 shadow-xl rounded-xl flex-between">
        <div className="w-2/3 flex items-start mx-10 justify-center flex-col text-left">
          <h1 className="font-semibold font-serif text-green-900 text-2xl ">
            Alisan Khoda Yarlou
          </h1>
          <h2 className="mb-2 font-serif text-sm text-green-900">
            computer science student in Tabriz univercity
          </h2>
          <span className="w-2/3 font-mono text-green-900">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            reprehenderit similique optio velit fugiat laboriosam, voluptate
          </span>
        </div>
        <div className="flex justify-center items-center">
          <img src={alisanProfile} alt="" className="rounded-e-xl w-72" />
        </div>
      </div>
      <div>
        <img
          src={corn}
          className="w-32 blur-sm absolute bottom-10 left-10 animate-element"
        />
        <img
          src={pepar}
          className="w-32 animate-element blur-sm top-25 absolute"
        />
        <img
          src={cucumber}
          className="absolute blur-sm w-32 left-20 top-20 animate-element"
        />
      </div>
    </div>
  );
};

export default Contact;

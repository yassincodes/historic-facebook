import LaptopHeader from "./LaptopHeader";
import PhoneHeader from "./PhoneHeader"

function Header() {


  return (
    <div className="container">
      <div className="phoneHeader">
        <PhoneHeader />
      </div>
      <div className="laptopHeader">
        <LaptopHeader />
      </div>
    </div>
  );
}

export default Header;

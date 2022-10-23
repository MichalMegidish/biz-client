import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <>
      <div className="text-center text-bg-secondary py-2">
        <p> © michal megidish 2022</p>
      </div>
    </>
  );
};

export default Footer;

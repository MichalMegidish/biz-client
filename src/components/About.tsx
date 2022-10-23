import { FunctionComponent } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid fw-light text-center m-5 ">
        <p className="display-5"> Welcome to BUSINESS!</p>
        <div className="row text-center">
          <div className="col-6 ">
            <p>
              The Business website is a business buying and selling platform.
              This platform was established after years of managing transactions
              between businesses (sale, purchase, mergers, sale of shares,
              partnerships, establishment and liquidation of businesses) for
              thousands of customers and in a very wide range of business types.
              From the experience in the field, we learned what data is
              important to buyers during the process of locating the business
              that suits them and how they build the desired business profile
              throughout the process. We understand that the choice of the
              business in which we will invest has important and critical
              factors that we look for: the location of the business, fixed
              costs (rent, property tax, management fees, royalties...)
              adaptation of the business space to our needs now and in the
              foreseeable future, how many talented and effective employees the
              business has at the time of replacement Ownership, seniority,
              stability, good suppliers, repeat customers, proven and effective
              advertising and marketing channels, sales turnover, gross profit,
              operating profit, net profit. How much time does the business
              require from the business owners in managing and developing the
              business? What salary do they attract for their work in the
              business? How much potential can be realized without huge
              investments still unrealized? Why is this business an exceptional
              business opportunity compared to other "off the shelf" businesses,
              etc. We also learned that potential buyers go through a long
              learning process themselves and can need a significant time
              investment that sellers want to minimize as much as possible. We
              deeply understood the confidentiality and sensitivity required
              during the sale of a business in order to minimize the damage to
              it during the process. We understand what it means to expose the
              process too early for the customers, employees, suppliers and
              competitors and we know that things need to be presented in the
              most accurate way and that you still do not reveal too early the
              specific business we are talking about. We are present almost
              everywhere business trading takes place and we have built this
              platform so that it can help anyone who uses it, even if they are
              selling a business, buying a business or brokering a business in
              the most efficient way. We open a "personal area" for every system
              registrant where he can see the sales offers he posted, the
              businesses he was interested in, and the question and answer he
              has with the other party. The platform is currently open to
              everyone and we invite you to use it and give us any feedback that
              can help in using it in the future.
            </p>
          </div>
          <div className="container  col-5">
            <img
              src="https://cloudinary.hbs.edu/hbsit/image/upload/s--EmT0lNtW--/f_auto,c_fill,h_375,w_750,/v20200101/6978C1C20B650473DD135E5352D37D55.jpg"
              alt=""
              style={{ width: "100%" }}
            />{" "}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

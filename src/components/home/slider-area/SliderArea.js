'use client';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import ReactTyped from 'react-typed';


const SliderArea = () => {
  return (
    < div className="slider-area slider-style-1 bg-transparent variation-2 height-750" >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1 mt_md--40 mt_sm--40">
            <div className="inner text-start">
              <center><h1 className="title theme-gradient display-two">Development <br /> made<br /> {" "}
                <ReactTyped
                  strings={[
                    "Effortless.",
                    "Accessible.",
                    "Affordable.",
                  ]}
                  typeSpeed={80}
                  backSpeed={5}
                  backDelay={1000}
                  loop
                />
              </h1></center>
              <center><p className="description">We help our clients succeed by creating stunning digital experiences, at a fraction of the price of our competition.</p></center>
              <center><div className="button-group">
                <Link className="btn-default btn-medium btn-border round btn-icon" href="/portfolio">Previous Work <i className="icon"><FiArrowRight /></i></Link>
                <Link className="btn-default btn-medium btn-border round btn-icon" href="/contact">Contact Us <i className="icon"><FiArrowRight /></i></Link>
              </div></center>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="thumbnail">
              {/* <MyIcon /> */}
              <img src="/hero.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </ div>
  );
};

export default SliderArea;
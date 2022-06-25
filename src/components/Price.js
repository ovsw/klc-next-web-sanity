import Link from "next/dist/client/link";
import { Nav, Tab } from "react-bootstrap";

const Price = () => {
  return (
    <Tab.Container defaultActiveKey="monthly">
      <Nav
        as="ul"
        className="nav nav-tabs style_1 border-0 justify-content-center justify-content-lg-end wow fadeInRight"
      >
        {/* <Nav.Item as="li">
          <Nav.Link
            eventKey="monthly"
            href="#monthly"
            className="nav-link mb-0 border-0 thm-btn bg-thm-color-one  btn-rectangle "
            data-toggle="tab"
          >
            Monthly <i className="fal fa-chevron-right ml-2" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            eventKey="yearly"
            href="#yearly"
            className="nav-link mb-0 border-0 thm-btn bg-thm-color-one btn-rectangle"
            data-toggle="tab"
          >
            Yearly <i className="fal fa-chevron-right ml-2" />
          </Nav.Link>
        </Nav.Item> */}
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="monthly">
          <div className="row no-gutters justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="plan_box active wow fadeInDown">
                <h4 className="plan_title">Happy Trails</h4>
                <p className="plan_subtext">
                  Quis autem veleum iure reprehenderit qui in ea voluptate velit
                  esse
                </p>
                <h2 className="plan_price">$150/mo</h2>
                <ul className="about_list style_2 mb-xl-30">
                  <li>1 Monthly Session</li>
                  <li>Unlimited Email Assistance</li>
                  <li>Parenting resources</li>
                  <li>Monthly Connecting Event</li>
                  <li>Discounts on Classes/Events</li>
                  <li>Cancel Anytime</li>
                </ul>
                <Link href="/contact">
                  <a className="thm-btn bg-thm-color-two-light thm-color-one btn-rectangle">
                    Select Package <i className="fal fa-chevron-right ml-2" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="plan_box wow fadeInUp">
                <h4 className="plan_title">Explorer</h4>
                <p className="plan_subtext">
                  Quis autem veleum iure reprehenderit qui in ea voluptate velit
                  esse
                </p>
                <h2 className="plan_price">$900</h2>
                <ul className="about_list style_2 mb-xl-30">
                  <li>3 Month Package 6 Sessions</li>
                  <li>2 Sessions / month</li>
                  <li>1 hr Sessions</li>
                  <li>Unlimited Emails</li>
                  <li>Parent Updates</li>
                  <li>Customizable Schedule</li>
                </ul>
                <Link href="/contact">
                  <a className="thm-btn bg-thm-color-two-light thm-color-one btn-rectangle">
                    Select Package <i className="fal fa-chevron-right ml-2" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="plan_box wow fadeInDown">
                <h4 className="plan_title">Trailblazer</h4>
                <p className="plan_subtext">
                  Quis autem veleum iure reprehenderit qui in ea voluptate velit
                  esse
                </p>
                <h2 className="plan_price">$1620</h2>
                <ul className="about_list style_2 mb-xl-30">
                  <li>3 Month Package 6 Sessions</li>
                  <li>2 Sessions / month</li>
                  <li>1 hr Sessions</li>
                  <li>Unlimited Emails</li>
                  <li>Parent Updates</li>
                  <li>Customizable Schedule</li>
                </ul>
                <Link href="/contact">
                  <a className="thm-btn bg-thm-color-two-light thm-color-one btn-rectangle">
                    Select Package <i className="fal fa-chevron-right ml-2" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="yearly">
          <div className="row no-gutters justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="plan_box wow fadeInUp">
                <h4 className="plan_title">Basic Plan</h4>
                <p className="plan_subtext">
                  Quis autem veleum iure reprehenderit qui in ea voluptate velit
                  esse
                </p>
                <h2 className="plan_price">$29.92</h2>
                <ul className="about_list style_2 mb-xl-30">
                  <li>Business Consulting</li>
                  <li>Professional Trainings</li>
                  <li>Video Tutorials</li>
                  <li>Marketing Strategy</li>
                </ul>
                <Link href="/contact">
                  <a className="thm-btn bg-thm-color-two-light thm-color-one btn-rectangle">
                    Select Package <i className="fal fa-chevron-right ml-2" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="plan_box active wow fadeInDown">
                <h4 className="plan_title">Standard Plan</h4>
                <p className="plan_subtext">
                  Quis autem veleum iure reprehenderit qui in ea voluptate velit
                  esse
                </p>
                <h2 className="plan_price">$49.92</h2>
                <ul className="about_list style_2 mb-xl-30">
                  <li>Business Consulting</li>
                  <li>Professional Trainings</li>
                  <li>Video Tutorials</li>
                  <li>Marketing Strategy</li>
                </ul>
                <Link href="/contact">
                  <a className="thm-btn bg-thm-color-two-light thm-color-one btn-rectangle">
                    Select Package <i className="fal fa-chevron-right ml-2" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="plan_box wow fadeInUp">
                <h4 className="plan_title">Premium Plan</h4>
                <p className="plan_subtext">
                  Quis autem veleum iure reprehenderit qui in ea voluptate velit
                  esse
                </p>
                <h2 className="plan_price">$99.92</h2>
                <ul className="about_list style_2 mb-xl-30">
                  <li>Business Consulting</li>
                  <li>Professional Trainings</li>
                  <li>Video Tutorials</li>
                  <li>Marketing Strategy</li>
                </ul>
                <Link href="/contact">
                  <a className="thm-btn bg-thm-color-two-light thm-color-one btn-rectangle">
                    Select Package <i className="fal fa-chevron-right ml-2" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default Price;

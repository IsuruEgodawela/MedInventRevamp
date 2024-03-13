import Main from "../components/Main";
import Filtercomp from "../components/Filtercomp";
import WalkingButton from "../components/WalkingButton";
import "./AppointmentsDocV.css";

const AppointmentsDocV = () => {
  return (
    <div className="appointments-doc-v2">
      <div className="rectangle-parent">
        <div className="group-child" />
        <div className="header">
          <div className="search">
            <div className="search-child" />
            <div className="search-appointment-patient">{`Search Appointment, Patient or etc `}</div>
            <img className="search-icon" alt="" src="/search@2x.png" />
          </div>
          <div className="notification-parent">
            <img
              className="notification-icon"
              alt=""
              src="/notification@2x.png"
            />
            <img className="help-icon" alt="" src="/help@2x.png" />
            <div className="rectangle-group">
              <div className="group-item" />
              <div className="johnny-depp-parent">
                <div className="johnny-depp">Johnny Depp</div>
                <div className="cardiologist">Cardiologist</div>
              </div>
              <img className="rectangle-icon" alt="" src="/rectangle@2x.png" />
              <img className="sort-down-icon" alt="" src="/sort-down@2x.png" />
            </div>
          </div>
        </div>
        <div className="rectangle-container">
          <div className="group-inner" />
          <Main />
          <Filtercomp />
          <WalkingButton />
          <div className="appointments-wrapper">
            <b className="appointments">Appointments</b>
          </div>
        </div>
        <div className="group-parent">
          <div className="group-div">
            <div className="rectangle-div" />
            <div className="div">1</div>
          </div>
          <div className="rectangle-parent1">
            <div className="group-child1" />
            <div className="div1">2</div>
          </div>
          <div className="rectangle-parent2">
            <div className="group-child1" />
            <div className="div1">3</div>
          </div>
          <div className="rectangle-parent3">
            <div className="group-child1" />
            <div className="div1">4</div>
          </div>
          <div className="rectangle-parent4">
            <div className="group-child1" />
            <div className="div1">5</div>
          </div>
          <div className="rectangle-parent5">
            <div className="group-child1" />
            <div className="div5">...</div>
          </div>
          <div className="rectangle-parent6">
            <div className="group-child1" />
            <div className="div6">10</div>
          </div>
          <img
            className="expand-arrow-icon"
            alt=""
            src="/expand-arrow@2x.png"
          />
          <img
            className="expand-arrow-icon1"
            alt=""
            src="/expand-arrow@2x.png"
          />
        </div>
      </div>
      <div className="nav">
        <div className="nav-child" />
        <div className="rectangle-parent7">
          <div className="group-child7" />
          <div className="dashboard">Dashboard</div>
          <img
            className="dashboard-layout-icon"
            alt=""
            src="/dashboard-layout@2x.png"
          />
        </div>
        <div className="rectangle-parent8">
          <div className="group-child8" />
          <div className="prescriptions-history">Prescriptions History</div>
          <img
            className="dashboard-layout-icon"
            alt=""
            src="/hand-with-a-pill@2x.png"
          />
        </div>
        <div className="rectangle-parent9">
          <div className="group-child9" />
          <div className="appointments1">Appointments</div>
          <img
            className="person-calendar-icon"
            alt=""
            src="/person-calendar@2x.png"
          />
        </div>
        <div className="rectangle-parent10">
          <div className="group-child10" />
          <div className="my-patients">My Patients</div>
          <img
            className="dashboard-layout-icon"
            alt=""
            src="/workspace@2x.png"
          />
        </div>
        <div className="rectangle-parent11">
          <div className="group-child11" />
          <div className="reports">Reports</div>
          <img
            className="dashboard-layout-icon"
            alt=""
            src="/health-graph@2x.png"
          />
        </div>
        <div className="rectangle-parent12">
          <div className="group-child12" />
          <div className="reports">My Clinics</div>
          <img className="hospital-3-icon" alt="" src="/hospital-3@2x.png" />
        </div>
        <div className="rectangle-parent13">
          <div className="group-child13" />
          <img className="group-icon" alt="" src="/group-11@2x.png" />
          <div className="medicare-parent">
            <div className="medicare">Medicare</div>
            <div className="katubedda">Katubedda</div>
          </div>
          <img
            className="expand-arrow-icon2"
            alt=""
            src="/expand-arrow@2x.png"
          />
        </div>
        <div className="group-container">
          <div className="rectangle-parent14">
            <div className="group-child14" />
            <div className="settings">Settings</div>
            <img
              className="dashboard-layout-icon"
              alt=""
              src="/settings@2x.png"
            />
          </div>
          <div className="rectangle-parent15">
            <div className="group-child15" />
            <div className="logout">Logout</div>
            <img
              className="dashboard-layout-icon"
              alt=""
              src="/logout-rounded@2x.png"
            />
          </div>
        </div>
        <div className="medinvent">MedInvent</div>
      </div>
      <nav className="sidebar">
        <div className="logo">
          <b className="medinvent1">MedInvent</b>
          <img className="minimizeicon" alt="" src="/minimizeicon.svg" />
        </div>
        <div className="clinicswitch">
          <div className="clinicswitch-child" />
          <img className="dp-icon" alt="" src="/dp@2x.png" />
          <img
            className="expand-arrow-icon3"
            alt=""
            src="/expand-arrow@2x.png"
          />
          <div className="text">
            <div className="medicare">Medicare</div>
            <div className="katubedda1">Katubedda</div>
          </div>
        </div>
        <div className="option">
          <div className="bar">
            <img className="dashboardicon" alt="" src="/dashboardicon@2x.png" />
            <div className="dashboard1">Dashboard</div>
          </div>
          <div className="bar1">
            <div className="bar-child" />
            <img
              className="appointmentsicon"
              alt=""
              src="/appointmentsicon@2x.png"
            />
            <div className="appointments2">Appointments</div>
          </div>
          <div className="bar2">
            <div className="bar-item" />
            <img
              className="mypatientsicon"
              alt=""
              src="/mypatientsicon@2x.png"
            />
            <div className="mypatients">My Patients</div>
          </div>
          <div className="bar3">
            <div className="bar-item" />
            <img
              className="mypatientsicon"
              alt=""
              src="/myreportsicon@2x.png"
            />
            <div className="myreports">My Reports</div>
          </div>
          <div className="bar4">
            <div className="bar-item" />
            <img
              className="mypatientsicon"
              alt=""
              src="/myclinicsicon@2x.png"
            />
            <div className="myclinics">My Clinics</div>
          </div>
        </div>
        <div className="option1">
          <div className="bar5">
            <img className="logouticon" alt="" src="/settings@2x.png" />
            <div className="setting">Settings</div>
          </div>
          <div className="bar6">
            <img className="logouticon" alt="" src="/logouticon@2x.png" />
            <div className="setting">Logout</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppointmentsDocV;

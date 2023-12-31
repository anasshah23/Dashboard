import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

import './Assets/css/Sun.css';
import './Assets/css/Sun.min.css';
import './Assets/css/nucleo.css';
import Mycomponent from "./mychat";
// import './Assets/js/plugins/chartjs.min.js';
// import './Assets/js/plugins/perfect-scrollbar.min.js';
// import './Assets/js/plugins/smooth-scrollbar.min.js';
// import './Assets/js/core/bootstrap.min.js';
// import './Assets/js/core/popper.min.js';
import { Helmet } from 'react-helmet';

// the main function starts from here
function Dashboard() {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart = null;
    const ctx = chartRef.current;

    if (ctx) {
      if (chart !== null) {
        chart.destroy();
      }

      chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Mobile apps',
              tension: 0.4,
              pointRadius: 0,
              borderColor: '#11CDEF',
              backgroundColor: 'rgb(17, 205, 239, 0.01)', // Adjust the color and transparency as needed
              borderWidth: 2,
              fill: true,
              data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
              maxBarThickness: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          interaction: {
            intersect: false,
            mode: 'index',
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              min: 0,
              max: 500,
              ticks: {
                stepSize: 100,
              },
              grid: {
                borderDash: [10], // or [1] for a solid line
              },
            },
          },
        },
      });
    }

    return () => {
      if (chart !== null) {
        chart.destroy();
      }
    };
  }, []);

  // Chart Script XXXXX
  return (
    <div class="g-sidenav-show bg-gray-100">
      <div className="aaa"></div>
      <div class="min-height-300 bg-primary position-absolute w-100"></div>
      {/* Sidebar -> -> -> */}
      <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4" id="sidenav-main">
        <div id="sidenav-scrollbar"  />
        <div className="sidenav-header">
          <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
          <a className="navbar-brand m-0" href="#" target="_blank">
            <img src={require('./Assets/img/download.png')} className="navbar-brand-img h-100" />
            <span className="ms-1 font-weight-bold">Argon Dashboard 2</span>
          </a>
        </div>
        <hr className="horizontal dark mt-0" />
        <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Tables</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-credit-card text-success text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Billing</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-app text-info text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Virtual Reality</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-world-2 text-danger text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">RTL</span>
              </a>
            </li>
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account pages</h6>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-single-02 text-dark text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Profile</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-single-copy-04 text-warning text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Sign In</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-collection text-info text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidenav-footer mx-3">
          <div className="card card-plain shadow-none" id="sidenavCard">
            <img className="w-50 mx-auto" src={require('./Assets/img/illustrations/rocket-white.png')} alt="sidebar_illustration" />
            <div className="card-body text-center p-3 w-100 pt-0">
              <div className="docs-info">
                <h6 className="mb-0">Need help?</h6>
                <p className="text-xs font-weight-bold mb-0">Please check our docs</p>
              </div>
            </div>
          </div>
          <a href="#" target="_blank" className="btn btn-dark btn-sm w-100 mb-3">Documentation</a>
          <a className="btn btn-primary btn-sm mb-0 w-100" href="#" type="button">Upgrade to pro</a>
        </div>
      </aside>
      {/* Sidebar XXXXXXX */}
      <main class="main-content position-relative border-radius-lg ">
        {/* Navbar -> -> -> */}
        <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur" data-scroll="false">
          <div class="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li class="breadcrumb-item text-sm"><a class="opacity-5 text-white" href="javascript:;">Pages</a></li>
                <li class="breadcrumb-item text-sm text-white active" aria-current="page">Dashboard</li>
              </ol>
              <h6 class="font-weight-bolder text-white mb-0">Dashboard</h6>
            </nav>
            <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
              <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                <div class="input-group">
                  <span className="input-group-text text-body">
                    <i className="fas fa-search" aria-hidden="true"></i>
                  </span>
                  <input type="text" className="form-control" placeholder="Type here..." />
                </div>
              </div>
              <ul class="navbar-nav  justify-content-end">
                <li class="nav-item d-flex align-items-center">
                  <a href="javascript:;" class="nav-link text-white font-weight-bold px-0">
                    <i class="fa fa-user me-sm-1"></i>
                    <span class="d-sm-inline d-none">Sign In</span>
                  </a>
                </li>
                <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
                  <a href="javascript:;" class="nav-link text-white p-0" id="iconNavbarSidenav">
                    <div class="sidenav-toggler-inner">
                      <i class="sidenav-toggler-line bg-white"></i>
                      <i class="sidenav-toggler-line bg-white"></i>
                      <i class="sidenav-toggler-line bg-white"></i>
                    </div>
                  </a>
                </li>
                <li class="nav-item px-3 d-flex align-items-center">
                  <a href="javascript:;" class="nav-link text-white p-0">
                    <i class="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                  </a>
                </li>
                <li class="nav-item dropdown pe-2 d-flex align-items-center">
                  <a href="javascript:;" class="nav-link text-white p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa fa-bell cursor-pointer"></i>
                  </a>
                  <ul class="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                    <li class="mb-2">
                      <a class="dropdown-item border-radius-md" href="javascript:;">
                        <div class="d-flex py-1">
                          <div class="my-auto">
                            <img src={require('./Assets/img/team-1.jpg')} className="avatar avatar-sm me-3" alt="user image" />

                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="text-sm font-weight-normal mb-1">
                              <span class="font-weight-bold">New message</span> from Laur
                            </h6>
                            <p class="text-xs text-secondary mb-0">
                              <i class="fa fa-clock me-1"></i>
                              13 minutes ago
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="mb-2">
                      <a class="dropdown-item border-radius-md" href="javascript:;">
                        <div class="d-flex py-1">
                          <div class="my-auto">
                            <img src={require("./Assets/img/small-logos/logo-spotify.svg").default} className="avatar avatar-sm bg-gradient-dark  me-3 " alt="user image" />
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="text-sm font-weight-normal mb-1">
                              <span class="font-weight-bold">New album</span> by Travis Scott
                            </h6>
                            <p class="text-xs text-secondary mb-0">
                              <i class="fa fa-clock me-1"></i>
                              1 day
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item border-radius-md" href="javascript:;">
                        <div class="d-flex py-1">
                          <div class="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                            <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"></svg>
                            <title>credit-card</title>
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                <g transform="translate(1716.000000, 291.000000)">
                                  <g transform="translate(453.000000, 454.000000)">
                                    <path class="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                    <path class="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="text-sm font-weight-normal mb-1">
                              Payment successfully completed
                            </h6>
                            <p class="text-xs text-secondary mb-0">
                              <i class="fa fa-clock me-1"></i>
                              2 days
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar XXXXXX */}
        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p class="text-sm mb-0 text-uppercase font-weight-bold">Today's Money</p>
                        <h5 class="font-weight-bolder">
                          $53,000
                        </h5>
                        <p class="mb-0">
                          <span class="text-success text-sm font-weight-bolder">+55%</span>
                          since yesterday
                        </p>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div class="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                        <i class="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p class="text-sm mb-0 text-uppercase font-weight-bold">Today's Users</p>
                        <h5 class="font-weight-bolder">
                          2,300
                        </h5>
                        <p class="mb-0">
                          <span class="text-success text-sm font-weight-bolder">+3%</span>
                          since last week
                        </p>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div class="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                        <i class="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p class="text-sm mb-0 text-uppercase font-weight-bold">New Clients</p>
                        <h5 class="font-weight-bolder">
                          +3,462
                        </h5>
                        <p class="mb-0">
                          <span class="text-danger text-sm font-weight-bolder">-2%</span>
                          since last quarter
                        </p>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div class="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                        <i class="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p class="text-sm mb-0 text-uppercase font-weight-bold">Sales</p>
                        <h5 class="font-weight-bolder">
                          $103,430
                        </h5>
                        <p class="mb-0">
                          <span class="text-success text-sm font-weight-bolder">+5%</span> than last month
                        </p>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div class="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                        <i class="ni ni-cart text-lg opacity-10" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-lg-7 mb-lg-0 mb-4">
              <div class="card z-index-2 h-100">
                <div class="card-header pb-0 pt-3 bg-transparent">
                  <h6 class="text-capitalize">Sales overview</h6>
                  <p class="text-sm mb-0">
                    <i class="fa fa-arrow-up text-success"></i>
                    <span class="font-weight-bold">4% more</span> in 2023
                  </p>
                </div>
                <div class="card-body p-3">
                  <div class="chart" >
                      <Mycomponent/>
                    {/* <div style={{ width: '400px', height: '300px', marginLeft: '20px' , border:'2px solid red' }}> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit aliquam ut repellendus odio libero explicabo, labore aliquid facilis officiis nulla recusandae quos autem placeat voluptatum. Ducimus labore inventore deserunt nulla.
                    </p>
                    
                    <canvas  class="chart-canvas" style={{ width: '200px', height: '500px', marginLeft: '20px' , border:'2px solid red' }}> hghghj ghjgj</canvas></div> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="card card-carousel overflow-hidden h-100 p-0">
                <div id="carouselExampleCaptions" class="carousel slide h-100" data-bs-ride="carousel">
                  <div class="carousel-inner border-radius-lg h-100">
                    <div class="carousel-item h-100 active" >
                      <img src={require('./Assets/img/carousel-1.jpg')}  alt="" />
                      <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                        <div class="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                          <i class="ni ni-camera-compact text-dark opacity-10"></i>
                        </div>
                        <h5 class="text-white mb-1">Get started with Argon</h5>
                        <p>There’s nothing I really wanted to do in life that I wasn’t able to get good at.</p>
                      </div>
                    </div>
                    <div class="carousel-item h-100">
                    <img src={require('./Assets/img/carousel-2.jpg')}  alt="" />
                      <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                        <div class="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                          <i class="ni ni-bulb-61 text-dark opacity-10"></i>
                        </div>
                        <h5 class="text-white mb-1">Faster way to create web pages</h5>
                        <p>That’s my skill. I’m not really specifically talented at anything except for the ability to learn.</p>
                      </div>
                    </div>
                    <div class="carousel-item h-100">
                    <img src={require('./Assets/img/carousel-3.jpg')}  alt="" />
                      <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                        <div class="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                          <i class="ni ni-trophy text-dark opacity-10"></i>
                        </div>
                        <h5 class="text-white mb-1">Share with us your design tips!</h5>
                        <p>Don’t be afraid to be wrong because you can’t learn anything from a compliment.</p>
                      </div>
                    </div>
                  </div>
                  <button class="carousel-control-prev w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-lg-7 mb-lg-0 mb-4">
              <div class="card ">
                <div class="card-header pb-0 p-3">
                  <div class="d-flex justify-content-between">
                    <h6 class="mb-2">Sales by Country</h6>
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table align-items-center ">
                    <tbody>
                      <tr>
                        <td class="w-30">
                          <div class="d-flex px-2 py-1 align-items-center">
                            <div>
                              <img src={require('./Assets/img/icons/flags/US.png')} alt="Country flag" />
                            </div>
                            <div class="ms-4">
                              <p class="text-xs font-weight-bold mb-0">Country:</p>
                              <h6 class="text-sm mb-0">United States</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <p class="text-xs font-weight-bold mb-0">Sales:</p>
                            <h6 class="text-sm mb-0">2500</h6>
                          </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <p class="text-xs font-weight-bold mb-0">Value:</p>
                            <h6 class="text-sm mb-0">$230,900</h6>
                          </div>
                        </td>
                        <td class="align-middle text-sm">
                          <div class="col text-center">
                            <p class="text-xs font-weight-bold mb-0">Bounce:</p>
                            <h6 class="text-sm mb-0">29.9%</h6>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="w-30">
                          <div class="d-flex px-2 py-1 align-items-center">
                            <div>
                            <img src={require('./Assets/img/icons/flags/DE.png')} alt="Country flag" />
                            </div>
                            <div class="ms-4">
                              <p class="text-xs font-weight-bold mb-0">Country:</p>
                              <h6 class="text-sm mb-0">Germany</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <p class="text-xs font-weight-bold mb-0">Sales:</p>
                            <h6 class="text-sm mb-0">3.900</h6>
                          </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <p class="text-xs font-weight-bold mb-0">Value:</p>
                            <h6 class="text-sm mb-0">$440,000</h6>
                          </div>
                        </td>
                        <td class="align-middle text-sm">
                          <div class="col text-center">
                            <p class="text-xs font-weight-bold mb-0">Bounce:</p>
                            <h6 class="text-sm mb-0">40.22%</h6>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="w-30">
                          <div class="d-flex px-2 py-1 align-items-center">
                            <div>
                            <img src={require('./Assets/img/icons/flags/GB.png')} alt="Country flag" />
                            </div>
                            <div class="ms-4">
                              <p class="text-xs font-weight-bold mb-0">Country:</p>
                              <h6 class="text-sm mb-0">Great Britain</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <p class="text-xs font-weight-bold mb-0">Sales:</p>
                            <h6 class="text-sm mb-0">1.400</h6>
                          </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <p class="text-xs font-weight-bold mb-0">Value:</p>
                            <h6 class="text-sm mb-0">$190,700</h6>
                          </div>
                        </td>
                        <td class="align-middle text-sm">
                          <div class="col text-center">
                            <p class="text-xs font-weight-bold mb-0">Bounce:</p>
                            <h6 class="text-sm mb-0">23.44%</h6>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="w-30">
                          <div class="d-flex px-2 py-1 align-items-center">
                            <div>
                            <img src={require('./Assets/img/icons/flags/BR.png')} alt="Country flag" />
                            </div>
                            <div class="ms-4">
                              <p class="text-xs font-weight-bold mb-0">Country:</p>
                              <h6 class="text-sm mb-0">Brasil</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <p class="text-xs font-weight-bold mb-0">Sales:</p>
                            <h6 class="text-sm mb-0">562</h6>
                          </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <p class="text-xs font-weight-bold mb-0">Value:</p>
                            <h6 class="text-sm mb-0">$143,960</h6>
                          </div>
                        </td>
                        <td class="align-middle text-sm">
                          <div class="col text-center">
                            <p class="text-xs font-weight-bold mb-0">Bounce:</p>
                            <h6 class="text-sm mb-0">32.14%</h6>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="card">
                <div class="card-header pb-0 p-3">
                  <h6 class="mb-0">Categories</h6>
                </div>
                <div class="card-body p-3">
                  <ul class="list-group">
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div class="d-flex align-items-center">
                        <div class="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                          <i class="ni ni-mobile-button text-white opacity-10"></i>
                        </div>
                        <div class="d-flex flex-column">
                          <h6 class="mb-1 text-dark text-sm">Devices</h6>
                          <span class="text-xs">250 in stock, <span class="font-weight-bold">346+ sold</span></span>
                        </div>
                      </div>
                      <div class="d-flex">
                        <button class="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i class="ni ni-bold-right" aria-hidden="true"></i></button>
                      </div>
                    </li>
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div class="d-flex align-items-center">
                        <div class="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                          <i class="ni ni-tag text-white opacity-10"></i>
                        </div>
                        <div class="d-flex flex-column">
                          <h6 class="mb-1 text-dark text-sm">Tickets</h6>
                          <span class="text-xs">123 closed, <span class="font-weight-bold">15 open</span></span>
                        </div>
                      </div>
                      <div class="d-flex">
                        <button class="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i class="ni ni-bold-right" aria-hidden="true"></i></button>
                      </div>
                    </li>
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div class="d-flex align-items-center">
                        <div class="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                          <i class="ni ni-box-2 text-white opacity-10"></i>
                        </div>
                        <div class="d-flex flex-column">
                          <h6 class="mb-1 text-dark text-sm">Error logs</h6>
                          <span class="text-xs">1 is active, <span class="font-weight-bold">40 closed</span></span>
                        </div>
                      </div>
                      <div class="d-flex">
                        <button class="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i class="ni ni-bold-right" aria-hidden="true"></i></button>
                      </div>
                    </li>
                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
                      <div class="d-flex align-items-center">
                        <div class="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                          <i class="ni ni-satisfied text-white opacity-10"></i>
                        </div>
                        <div class="d-flex flex-column">
                          <h6 class="mb-1 text-dark text-sm">Happy users</h6>
                          <span class="text-xs font-weight-bold">+ 430</span>
                        </div>
                      </div>
                      <div class="d-flex">
                        <button class="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i class="ni ni-bold-right" aria-hidden="true"></i></button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

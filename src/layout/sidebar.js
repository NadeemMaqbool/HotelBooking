import React, { Component } from 'react';

export default class sidebar extends Component {
    render() {
        return (
            <div>
  {/* Main Sidebar Container */}
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="index3.html" className="brand-link" style={{height: '58px'}}>
      <img src={process.env.PUBLIC_URL + '/dist/img/logo2.png'} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          
          
          <li className="nav-item">
            <a href="/cities" className="nav-link">
              <i className="nav-icon fas fa-city" />
              <p>
                Cities
                {/* <span className="right badge badge-danger">New</span> */}
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/hotels" className="nav-link">
            <i className="nav-icon fas fa-concierge-bell"></i> 
            
              <p>
                Hotels
                {/* <span className="right badge badge-danger">New</span> */}
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/hotels" className="nav-link">
            <i className="nav-icon fas fa-door-open"></i> 
            
              <p>
                Rooms 
                {/* <span className="right badge badge-danger">New</span> */}
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/hotels" className="nav-link">
            <i className="nav-icon fas fa-user-check"></i> 
            
              <p>
                Bookings 
                {/* <span className="right badge badge-danger">New</span> */}
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/hotels" className="nav-link">
            <i className="nav-icon fas fa-wifi"></i> 
            
              <p>
                Ameneties 
                {/* <span className="right badge badge-danger">New</span> */}
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/hotels" className="nav-link">
            <i className="nav-icon fas fa-print"></i> 
            
              <p>
                Reports 
                {/* <span className="right badge badge-danger">New</span> */}
              </p>
            </a>
          </li>
          
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}

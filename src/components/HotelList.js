import React from 'react';
import Hotel from './../components/Hotel';
import {Link} from 'react-router-dom';

const HotelList = props => {
    if(props.hotels.length === 0){
        return (
            <div>
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="center">
                                        <div class="card-body">
                                            <div class="alert alert-danger alert-dismissible">
                                                <button type="button" class="close"></button>
                                                Sorry, Looks like there is no data to show
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        
                    </section>
                </div>
            </div>
        )

    }
    return (
            <div>
                <div className="content-wrapper">
    <section className="content-header">
      <div className="container-fluid">
              <div className="row">
  <div className="col-12">
    <div className="card card-secondary">
      <div className="card-header ">
        <h2 className="card-title"><strong>Hotels</strong></h2>
        <div className="card-tools">
          <div className="input-group input-group-sm" style={{width: 180}}> 
          <Link className="btn btn-dark btn-md btn-flat" to='/hotel/new'>
            Add New Hotel <i class="fas fa-plus-circle"></i>
          </Link>
          </div>
        </div>
      </div>
      {/* /.card-header */}
      <div className="card-body table-responsive p-0">
          
        <table className="table table-head-fixed">
          <thead>
            <tr>
              <th colspan='2' >Name</th>
              <th colspan='2'>City</th>
              <th colspan='2'>Address</th>
              <th>Star</th>
              <th colspan='2'>Desc</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { props.hotels.map(hotel => (

                    <Hotel key={hotel.id}    
                            name={hotel.name}
                            city={hotel.city}
                            address={hotel.address}
                            stars={hotel.stars}
                            description={hotel.description}
                            status={hotel.status} />
                            ))}
            
          
          
          </tbody>
        </table>
      </div>
      {/* /.card-body */}
    </div>
    {/* /.card */}
  </div>
</div>
</div>
</section></div>
                </div>


    )
    
}

export default HotelList;


import React from 'react'
import City from './../components/City';
import {Link} from 'react-router-dom';

const CityList = props => {
    if(props.cities.length === 0){
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
                                            <button className="btn btn-primary btn-md btn-flat"> Add New City<i class="fas fa-plus-circle"></i></button>
                                        
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
        <h2 className="card-title"><strong>Cities</strong></h2>
        <div className="card-tools">
          <div className="input-group input-group-sm" style={{width: 180}}>
            <Link className="btn btn-dark btn-md btn-flat" to='/city/new'>
                Add New City <i class="fas fa-plus-circle"></i>
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
              <th colspan='2'>Country</th>
              <th colspan='2'>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { props.cities.map(city => (

                    <City key={city.id}    
                            name={city.name}
                            country={city.country}
                            description={city.description}
                            status={city.status} />
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

export default CityList;

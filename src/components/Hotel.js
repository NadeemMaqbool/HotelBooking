import React from 'react';

const Hotel = props => {
    
    return ( 
        <tr>
            <td colspan='2'>{props.name}</td>
            <td colspan='2'>{props.city}</td>
            <td colspan='2'>{props.address}</td>
            <td>{props.stars} <i class="fas fa-star"></i></td>
            <td colspan='2'>{props.description}</td>
            
            <td>
                <a type="button" class="btn-sm btn-danger btn-flat">
                    <i class="fas fa-info-circle"></i>
                </a> &nbsp;
                <a type="button" class="btn-sm btn-danger btn-flat">
                <i class="fas fa-pencil-alt"></i>
                </a>&nbsp;
                <a type="button" class="btn-sm btn-danger btn-flat">
                    <i class="far fa-trash-alt"></i>
                </a>
            </td>
        </tr>
    )
}

export default Hotel;
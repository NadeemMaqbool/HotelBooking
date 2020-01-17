import React from 'react';

const City = props => {

    return ( 
        <tr>
            <td colspan='2'>{props.name}</td>
            <td colspan='2'>{props.country}</td>
            <td colspan='2'>{props.description}</td>
            <td><span className="badge badge-success">{props.status}</span></td>
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

export default City;
import React, { useEffect, useState } from 'react';

const OrderRow = ({order,handleDelete,handleStatusUpdate}) => {
  const {_id,serviceName,price,email,customer,services, status}=order;
  const [orderService,setOrderService] =useState({});

  useEffect(()=>{
    fetch(`http://localhost:5000/services/${services}`)
    .then(res=>res.json())
    .then(data => setOrderService(data))
  },[services]) 




  return (
    
      <tr>
        <th>
          <label>
           <button onClick={()=>handleDelete(_id)} className='btn btn-ghost'>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-24 h-24">
               {
               orderService?.img &&  
               <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
            <div>
              <div className="font-bold">{customer}</div>
              <div className="text-sm opacity-50">{serviceName}</div>
            </div>
          </div>
        </td>
        <td>
      {/* {price} */}
          <br/>
          <span className="badge badge-ghost badge-sm">{price}</span>
        </td>
        <td>{email}</td>
        <th>
          <button onClick={()=>handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status?status : 'pending'}</button>
        </th>
      </tr>
    
  );
};

export default OrderRow;
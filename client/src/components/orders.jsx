import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`http://localhost:3001/Shopistan/viewOrders/${localStorage.getItem('sellerId')}`,{
       
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
      setOrders(response.data);
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    }
  };

  const handleOrderClick = (orderId) => {
    setSelectedOrderId(orderId);
  };
   
   
  const handleUpdateStatus = async () => {
    const token = localStorage.getItem('token');
    
    console.log(token);
    try {
      await axios.put(`http://localhost:3001/Shopistan/updateOrderStatus/${selectedOrderId}`, 
        {orderStatus: 'shipped',},
       {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        
       
      });
      fetchOrders(); // Refresh orders after updating status
      setSelectedOrderId(null);
    } catch (error) {
      console.error('Failed to update order status:', error);
    }
  };

  return (
    <div >
      <h2 className='mt-5 text-success'>Orders Cart</h2>
      <MDBTable striped style={{width:'70%',margin:'auto',border:'black'}}>
        <MDBTableHead className='bg-success bg-opacity-50'>
          <tr>
            <th>Order ID</th>
            <th>Product ID</th>
            <th>Seller ID</th>
            <th>Customer ID</th>
            <th>Order Status</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {orders.map((order) => (
            <tr  key={order.orderId} onClick={() => handleOrderClick(order.orderId)}>
              <td>{order.orderId}</td>
              <td>{order.productID}</td>
              <td>{order.sellerId}</td>
              <td>{order.customerId}</td>
              <td>{order.orderStatus}</td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      {selectedOrderId && (
        <div>
          <h4>Selected Order ID: {selectedOrderId}</h4>
          <MDBBtn color="primary" onClick={handleUpdateStatus}>
            Update Status to Shipped
          </MDBBtn>
        </div>
      )}
    </div>
  );
};

export default Orders;

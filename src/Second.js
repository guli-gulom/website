import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Second() {
  return (
    <>
    <div className="container-fluid">
    <p>Device</p>
        <div className="container">
     <div className="row py-4">
     <div className='col-md-3'>
               
               <label htmlFor="number">Car's number</label> <br />
               <input type="text" id='number'/> <br />
              </div>
              <div className='col-md-3'>
                 <label htmlFor="number">Bank</label> <br /> 
              <select>
                <option value="---"></option>
              </select>
              </div>
             
             <div className="col-md-2">
             <button className='btn1'><i class="fa-solid fa-magnifying-glass"></i> Search</button>
             </div>
             <div className="col-md-2">
             <button className='btn2'><i class="fa-solid fa-plus plus1"></i> Attach</button>
             </div>
             <div className="col-2"></div>
     </div>
          <div className="row py-4">
     <div className="col-md-2 col-2">
        <button className='btn3'>POS devices</button>
    </div>
    <div className="col-md-2 col-2">
        <button className='btn1'>ATM devices</button>
    </div>
    <div className="col-1"></div>
     <div className="col-md-3">
     <div>
             <label htmlFor="number">Model</label> <br /> 
          <select>
            <option value="---"></option>
          </select>
          </div>
     </div>
     <div className="col-2"></div>
     <div className="col-md-2">
        <button className='btn4 me-2'><i class="fa-solid fa-plus plus2"></i></button>
        <button className='btn5'><i class="fa-solid fa-trash"></i></button>
     </div>
    
     </div>
    
    
        </div>
        
      
      <table className='table table-striped table-bordered hover'>
            <thead className='text-white'>
                <tr>
                    <th>#</th>
                    <th>Type</th>
                    <th>Model</th>
                    <th>Car's Number</th>
                    <th>Bank</th>
                    <th>Device status</th>
                    <th>History</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
              <td>7771</td>
                
                <td>ATM</td>
                    <td>NCR 6622</td>
                    <td>test8</td>
                    <td>00309 Ishtihon D., "AGROBANK"  ATB ISHTIHON BRANCH</td>
                    <td>In working condition</td>
                    <td><i class="fa-solid fa-clock-rotate-left"></i> History of the device</td>
                    <td><button className='btn btn-primary '><i class="fa-solid fa-pencil"></i></button></td>
                </tr>
                <tr>
              <td>7771</td>
                
                <td>ATM</td>
                    <td>CMT</td>
                    <td>X</td>
                    <td></td>
                    <td>In working condition</td>
                    <td><i class="fa-solid fa-clock-rotate-left"></i> History of the device</td>
                    <td><button className='btn btn-primary '><i class="fa-solid fa-pencil"></i></button></td>
                </tr>
                <tr>
              <td>7771</td>
                
                <td>ATM</td>
                    <td>DIEBOLDNIXDORF C2XXX</td>
                    <td>XXX</td>
                    <td></td>
                    <td>In working condition</td>
                    <td><i class="fa-solid fa-clock-rotate-left"></i> History of the device</td>
                    <td><button className='btn btn-primary '><i class="fa-solid fa-pencil"></i></button></td>
                </tr>
                </tbody>
        </table>
     
    <div className="row py-3">
    <div className="col-md-10 offset-1 text-center">
     
      
        <button className='btn btn-primary btn-lg px-4 '>10 <i class="fa-solid fa-caret-down"></i></button>
       
        
        <button className='btn btn-light ms-2'><i class="fa-solid fa-angles-left"></i></button>
        <button className='btn btn-light ms-2'>776</button>
        <button className='btn btn-light ms-2'>777</button>
        <button className='btn btn-primary ms-2'>778</button>
        <button className='btn btn-light ms-2'><i class="fa-solid fa-angles-right"></i></button>
        <button className='btn btn-light ms-2 px-4'>All: 7773</button>

    
    
    </div>
    </div>
    </div>
    </>
  )
}

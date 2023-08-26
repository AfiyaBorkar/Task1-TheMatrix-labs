import React from 'react'
import "./Contentitems.css"
export default function ContentitemsTwo(props) {
    console.log(props.data?.pairCreatedAt)
    console.log(props.name)
  return (
    <div>
       
        <div class="p-card content-type">
            {props.name=="Basic Info" &&
            <div class="p-card__content">
                <p>
                    Basic Info
                </p>
                
                <table class="p-table--mobile-card" aria-label="Example of table transforming into mobile cards on small screens">
 
  <tbody>
    <tr>
      <td >Pair Created at</td>
      <td>{props.data?.pairCreatedAt}</td>
      </tr>
      <tr>
      <td >Symbol</td>
      <td>{props.data?.baseToken?.symbol}</td>
      </tr>
      <tr>
      <td >Dex Id</td>
      <td>{props.data?.dexId}</td>

      </tr>
      <tr>
      <td >Pair Address</td>
      <td>{props.data?.pairAddress}</td>
      </tr>

  </tbody>
</table>
   
  
            
            </div>
}


{props.name=="Base Token" &&
            <div class="p-card__content">
                <p>
                    Base Token
                </p>
                
                <table class="p-table--mobile-card" aria-label="Example of table transforming into mobile cards on small screens">
 
  <tbody>
    <tr>
      <td >Name</td>
      <td>{props.data?.baseToken?.name}</td>
      </tr>
      <tr>
      <td >Symbol</td>
      <td>{props.data?.baseToken?.symbol}</td>
      </tr>
      <tr>
      <td >Address</td>
      <td>{props.data?.baseToken?.address}</td>

      </tr>
      
  </tbody>
</table>
   
  
            
            </div>
}

{props.name=="Quote Token" &&
            <div class="p-card__content">
                <p>
                Quote Token
                </p>
                
                <table class="p-table--mobile-card" aria-label="Example of table transforming into mobile cards on small screens">
 
                <tbody>
    <tr>
      <td >Name</td>
      <td>{props.data?.quoteToken?.name}</td>
      </tr>
      <tr>
      <td >Symbol</td>
      <td>{props.data?.quoteToken?.symbol}</td>
      </tr>
      <tr>
      <td >Address</td>
      <td>{props.data?.quoteToken?.address}</td>

      </tr>
      
  </tbody>
</table>
   
  
            
            </div>
}

{props.name=="Price" &&
            <div class="p-card__content">
                <p>
                    Price
                </p>
                
                <table class="p-table--mobile-card" aria-label="Example of table transforming into mobile cards on small screens">
 
  <tbody>
    <tr>
      <td >Price Native</td>
      <td>{props.data?.priceNative}</td>
      </tr>
      <tr>
      <td >Price USD</td>
      <td>{props.data?.priceUsd}</td>
      </tr>
     
     

  </tbody>
</table>
   
  
            
            </div>
}
        </div>
  
    </div>
  )
}

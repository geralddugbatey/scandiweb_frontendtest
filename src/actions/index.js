import {useQuery,gql} from '@apollo/client'
import {InMemoryCache,ApolloClient} from '@apollo/client'
import styled from 'styled-components'



const client = new ApolloClient({
    uri:"http://localhost:4000/",
  cache: new InMemoryCache()
  })



const get_categories = gql`
query{
  categories{
    name
  }
}

`

const get_priceslabels =gql`
query{
  categories{
    products{
      prices{
        currency{
          label
  symbol
  
}
      }
    }
  }

}


`

const get_allproducts = gql`

query{
  categories{
    products{
      gallery
      inStock
      id
      name
      description
      prices{
        amount
        currency{
         label 
  symbol
  
}
      }
      attributes{
        name
        type
        items{
          displayValue
          value
        }
      }
      
    }
  }
}

`


const get_prices=gql`


query{
categories{
  
  products{
prices{
  amount
currency{
  symbol
  
}

}
  }
}

}

`



export const fetchCategories = () => async dispatch =>{
    
    const a = await    client.query({
        query:get_categories
    })

    const b = await a.data
  
    



dispatch({

    type:'FETCH_CATEGORIES',
    data:b

})    

}


export const GetPrices = ()=> async dispatch=>{

  const a = await    client.query({
    query:get_priceslabels
})

const b = await a.data





dispatch({

type:'GET_PRICESALL',
data:b

})  

}


export const setCount = (num)=> dispatch=>{


dispatch({
  type:'SET_COUNT',
  data:num
})

}



export const getProducts = () => async dispatch =>{
    
    const query_products = await    client.query({
        query:get_allproducts
    })

    const products  = await query_products.data

    const query_category = await client.query({
      query:get_categories
  })

  const category = await query_category.data





dispatch({

    type:'GET_ALLPRODUCTS',
    data:{
      products,
      category
    }

})   


}
export const getTechProducts = () => async dispatch =>{
    
  const query_products = await    client.query({
    query:get_allproducts
})

const products  = await query_products.data

const query_category = await client.query({
  query:get_categories
})

const category = await query_category.data





dispatch({

    type:'GET_TECHPRODUCTS',
    data:{
      products,
      category
    }

})   


}


export const getClothesProducts = () => async dispatch =>{
    
  const query_products = await    client.query({
    query:get_allproducts
})

const products  = await query_products.data

const query_category = await client.query({
  query:get_categories
})

const category = await query_category.data



dispatch({

  type:'GET_CLOTHESPRODUCTS',
  data:{
    products,
    category
  }

})   


}


export const getPrices=()=>async dispatch=>{


  const a = await    client.query({
    query:get_prices
})

const b = await a.data




dispatch({

type:'GET_PRICES',
data:b

}) 


}



export const getItemToCart= (item)=> dispatch=>{

  dispatch({
    type:'GET_ITEMTOCART',
    data:item
  })

}


export const getCartItem = (item) => dispatch=>{

  dispatch({
    type:'GET_CARTITEM',
    data:item
  })
}



export const closeDisplay = (item)=>dispatch =>{

  dispatch({
    type:'CLOSE_DISPLAY',
    data:item
  })
}

export const Reset = (item)=>dispatch =>{

  dispatch({
    type:'RESET',
    data:item
  })
}
export const intoAttribute = (item)=>dispatch =>{

  dispatch({
    type:'INTO_ATTRIBUTES',
    data:item
  })
}
export const clearAttribute = ()=>dispatch =>{

  dispatch({
    type:'CLEAR_ATTRIBUTES',
    data:[]
  })
}


export const Increase = (item)=>dispatch =>{

  dispatch({
    type:'INCREASE',
    data:item
  })
}

export const Decrease = (item)=>dispatch =>{

  dispatch({
    type:'DECREASE',
    data:item
  })
}

export const ReplaceAttribute=(item)=>dispatch=>{

  dispatch({
    type:'REPLACE_ATTRIBUTE',
    data:item
  })
}

export const UpdateCount = (item) =>dispatch=>{
  dispatch({
    type:'UPDATE_COUNT',
    data:item
  })
}

export const getTotal = (item) =>dispatch=>{
  dispatch({
    type:'GET_TOTAL',
    data:item
  })
}


export const clear = ()=>dispatch=>{

dispatch({
  type:'CLEAR'
})
}
export const BannerDisplay = ({bannerValue,bannerActive})=>dispatch =>{

    dispatch({
      type:'BANNER_DISPLAY',
      data:{
        bannerValue,
        bannerActive
      }
    })

}

export const quantity=(item)=>dispatch=>{
  dispatch({
    type:'QUANTITY',
    data:item
  })

}

export const PassToCart=(item)=>dispatch=>{
  dispatch({
    type:'PASSTO_CART',
    data:item
  })
}



export const change=()=>dispatch=>{
  dispatch({
    type:'CHANGE',
    
  })

}

export const clearCartItem = ()=>dispatch=>{

  dispatch({
    type:'CLEAR_ITEM',
    
  })
}


export const CartSwitch=(item)=>dispatch=>{

  dispatch({
    type:'CART_SWITCH',
    data:item
  })
}
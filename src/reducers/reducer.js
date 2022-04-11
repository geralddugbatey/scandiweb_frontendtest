


const initialState={
  cartswitch:false,
  change1:false,
  quantity:0,
  symbols:[],
  getPrices:[],
  getCategories:[],
  getAllProducts:{
    name:'',
    products:[]
  },
  getTechProducts:{
    name:'',
    products:[]
  },
  getClothesProducts:{
    name:'',
    products:[]
  },
  count:1,
  price_index:0,
  cart:[],
  cartItem:{},
  flick:false,
  banner:{
    active:false,
    value:''
  },
  reset:true,
  attributes_cart:[],
  total_price:[]
}


const itemReducer =(state=initialState,action)=>{

  switch(action.type){

    case 'FETCH_CATEGORIES':
    
        return {
          ...state,
      
         getCategories: action.data.categories}
    

    case 'GET_ALLPRODUCTS':
         
        return {
          ...state,
         getAllProducts: {
          name: action.data.category.categories[0].name,
         products: action.data.products.categories[0].products}}

     case 'GET_PRICESALL'  :
      const symbol= update(action.data.categories[0].products[0].prices)
       return{
         ...state,
         symbols:symbol,
         getPrices:action.data.categories[0].products[0].prices
       }  

    case 'GET_TECHPRODUCTS':
  
        return {
          ...state,
         getTechProducts: {
          name: action.data.category.categories[2].name,
         products: action.data.products.categories[2].products}}

         case 'GET_CLOTHESPRODUCTS':
 

          return {
            ...state,
           getClothesProducts: {
            name: action.data.category.categories[1].name,
           products: action.data.products.categories[1].products}}
  


    case 'SET_COUNT':

      return{
        ...state,
        count:action.data

      }
    
    case 'CHANGE':
      return{
        ...state,
        change1:!state.change1
      }

    case 'QUANTITY':
      if(action.data=="increase"){

        return{
          ...state,
          quantity:quantityIncrease(state.quantity)
        }
      }

      return{
        ...state,
        quantity:quantityDecrease(state.quantity)
      }



    
    case 'CART_SWITCH':

      return{
        ...state,
        cartswitch:action.data

      }
    
     case 'CLEAR':
       return{
         ...state,
         total_price:[]
       } 
     case 'CLEAR_ITEM':
       return{
         ...state,
         cartItem:{}
       } 
      case 'UPDATE_COUNT':

      return{
        ...state,
        price_index:action.data
      }


      case 'GET_ITEMTOCART':
        if(check(state.cart,action.data)){
          return state
        }
        return {
          ...state,
          cart: [ ...state.cart, action.data ]
          };
          
        case 'GET_CARTITEM':
          return{

            ...state,
            cartItem:action.data
          }

        
        

          case 'CLOSE_DISPLAY':
            return{
              ...state,
              flick:action.data
            }
          case 'RESET':
            return{
              ...state,
              reset:action.data
            }

          case 'BANNER_DISPLAY':
            return{
              ...state,
         
              banner:{
                active:action.data.bannerActive,
                value:action.data.bannerValue,
              }
            }

            case 'INCREASE':
              const a =increase(state.cart,action.data)
              return{
                ...state,
                cart:a
              }
                
            case 'DECREASE':
        
              return{
                ...state,
                cart:decrease(state.cart,action.data)
              }
                
              case 'GET_TOTAL':
                 return{
                   ...state,
                   total_price:total(state.cart,state.total_price)
                 } 

            case 'INTO_ATTRIBUTES':
              return{
                ...state,
                attributes_cart:state.attributes_cart.concat(action.data)
              }
            case 'CLEAR_ATTRIBUTES':
              return{
                ...state,
                attributes_cart:[]
              }

              case 'REPLACE_ATTRIBUTE':

              return{
                ...state,
                attributes_cart:replace(state.attributes_cart,action.data)
              }

              case 'PASSTO_CART':
                return{
                  ...state,
                  cart:passto(state.cart,action.data)
                }
                

    
    default:
        return state
    
  }
}


const check=(items,data)=>{


  if(items.some(i => i.id=== data.id)){
      return true
  } else{
      return false
  }


}


const increase=(items,i)=>{
 
  let a=[]
  const w=i.quantity+1
  i.price.map((t,index)=>{
    const r = i.orignal_prices[index].amount *w
    const m = {
      amount:r
    }
    a.push(m)
  })
  

  let a1
  const filteredArray = items.map((t,index)=>{
        if(t.name == i.name){
          a1=index
          return index
        }
  })

  items[a1].quantity=w
  items[a1].price=a
  
  return items

}


const decrease=(items,i)=>{
 


  let a=[]
  const w=i.quantity -1

  

  i.price.map((t,index)=>{
    const r = i.orignal_prices[index].amount *w
    const m = {
      amount:r
    }
    a.push(m)
  })
  

  let a1
  const filteredArray = items.map((t,index)=>{
        if(t.name == i.name){
          a1=index
          return index
        }
  })

  items[a1].quantity=w
  items[a1].price=a

  if(items[a1].quantity==0){

    const filteredArray = items.filter((t)=>{
          return t.id!==i.id
    })


    return filteredArray

  
  }
  
  return items

}

const passto=(items,data)=>{
  let a
  const filteredArray = items.map((i,index)=>{
        if(i.name == data.name){
          a=index
          return index
        }
  })

items[a] =data

return items
}

const replace =(items,data)=>{


  let a
  const filteredArray = items.map((i,index)=>{
        if(i.name == data.name){
          a=index
          return index
        }
  })

items[a] =data

return items



}


const update=(items)=>{
  const a=[]
  items.map((i)=>{
    a.push(i.currency.symbol)
  })
return a
}


const total= (items,data)=>{

  
  
  let c =data



  items.map((i,index)=>{
    i.orignal_prices.map((t,index2)=>{
      

      if(index==0){
        c[index2] = i.price[index2].amount
      }
        
          
          
          
        else{
          c[index2] = (c[index2] + (i.quantity*t.amount))

        }

      

      
        
     
       

      
      
    
    })
  })


  return c
}


const quantityIncrease=(item)=>{

  const a = item + 1

  return a
}

const quantityDecrease=(item)=>{



  const a = item - 1

  if(a<1){
    return 0
  }

  return a
}



export default itemReducer
import React, { Component } from 'react'
import { Over, Box, Filler1, Font} from './elements'
import { connect } from 'react-redux';
import {intoAttribute,ReplaceAttribute,getCartItem, PassToCart,change} from '../../actions/index'


function mapStateToProps(state) {
    return {
        products:state.getAllProducts,
        price_index:state.price_index,
        cart: state.cartItem,
        cartItem: state.cart,
        attributes_cart:state.attributes_cart,
        change1:state.change1
    };
}


function mapDispatchToProps(dispatch){


    return{
      
        intoAttribute: (item)=>dispatch(intoAttribute(item)),
        ReplaceAttribute: (item)=>dispatch(ReplaceAttribute(item)),
        getCartItem: (item)=>dispatch(getCartItem(item)),
        PassToCart: (item)=>dispatch(PassToCart(item)),
        change: ()=>dispatch(change())
    }
}


class Filler extends Component {

    constructor(props){
        super(props)
        this.state={
            name:'',
            price:'',
            id:'',
            quantity:0,
            symbol:'',
            attributes:{},
            length:0

        }
    }

finaldata(cart_details,name,type,value)
{
  

    

    
    const a ={
        name,
        type,
        value,
   

    }
if(this.inCart(cart_details.a1)){

    this.double(cart_details,a)
}

else{
    if(this.props.attributes_cart.length==0){
   
        this.setState(prevState=>({
            attributes:a
        }),async()=>{
          
          await this.props.intoAttribute(this.state.attributes)
         
          const item = {
            name:cart_details.a1.name,
                 symbol:cart_details.a1.price,
                 price:cart_details.a1.price,
                 image:cart_details.a1.image,
                 orignal_prices:cart_details.a1.price,
                 id:cart_details.a1.id,
                 quantity:cart_details.a1.quantity,
                 attributes_length:cart_details.a1.attributes_length,
             attributes_cart:this.props.attributes_cart,
             inStock:cart_details.a1.inStock
            }
            
            this.props.getCartItem(item)


        
        })
        
        



    }

    else{

        const filterCheck= this.props.attributes_cart.filter((i)=>{
            return i.name == a.name
        })

        if(filterCheck.length!=0){

            this.double(cart_details,a)

        }

        else{

            this.double1(cart_details,a)

        }
        
    }




}

}

inCart(data){
    if(this.props.cartItem.some(i => i.id=== data.id)){
        return true
    } 
    else{
        return false
    }
}


async double(cart_details,a){

  await this.props.ReplaceAttribute(a)
  const item = {
    name:cart_details.a1.name,
         symbol:cart_details.a1.price,
         price:cart_details.a1.price,
         image:cart_details.a1.image,
         id:cart_details.a1.id,
         orignal_prices:cart_details.a1.price,
         quantity:cart_details.a1.quantity,
         attributes_length:cart_details.a1.attributes_length,
     attributes_cart:this.props.attributes_cart,
     inStock:cart_details.a1.inStock
    }
    
   await this.props.PassToCart(item)
   this.props.change()


    }
   
async double1(cart_details,a){

  await this.props.intoAttribute(a)
  const item = {
    name:cart_details.a1.name,
         symbol:cart_details.a1.price,
         price:cart_details.a1.price,
         image:cart_details.a1.image,
         orignal_prices:cart_details.a1.price,
         id:cart_details.a1.id,
         quantity:cart_details.a1.quantity,
         attributes_length:cart_details.a1.attributes_length,
     attributes_cart:this.props.attributes_cart,
     inStock:cart_details.a1.inStock
    }
    
    this.props.getCartItem(item)
    

    }
   

    render() {
        return (
            <>
            <Over>
              {
                  this.props.attributes.map((i,index)=>(
                        <div key={index}>
                                           <p>{i.name}</p>
                                           <Filler1>

                                           {
                                               i.items.map((t,index)=>(
                                                <Box key={index}
                                                onClick={()=>{
                                                    this.finaldata(this.props.cart_details,i.name,i.type,t.value)
                                                }}
                                                color={i.type=="swatch"?t.value:'black'}><Font
                                                font={i.type=="swatch"?t.value:'white'}
                                                size={t.displayValue=="Extra Large" ? true : false}
                                                >{t.displayValue}</Font></Box>
                                               ))
                                           }

                                           </Filler1>
                                        

                        </div>
   
                    
                  ))
              }

       
               
            </Over>
          
            </>
        )
    }
}



export default connect(
    mapStateToProps,mapDispatchToProps
)(Filler);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearAttribute,CartSwitch, quantity, getClothesProducts,setCount,getItemToCart,closeDisplay,fetchCategories,BannerDisplay,getCartItem } from '../../actions/index';
import {Img, Display,Cover} from '../SubComponents/elements'
import Info from '../SubComponents/Info'
import img from '../images/Vector.png'
import './sa.css'
function mapStateToProps(state) {
    return {
        products:state.getClothesProducts.products,
        price_index:state.price_index,
        cart: state.cart,
        flick:state.flick,
        name:state.getClothesProducts.name,
        attributes_cart:state.attributes_cart,


    };
}

function mapDispatchToProps(dispatch){


    return{
        getProducts:()=>dispatch(getClothesProducts()),
        setCount: (num)=>dispatch(setCount(num)),
        clearAttribute: ()=>dispatch(clearAttribute()),
        getCartItem: (item)=>dispatch(getCartItem(item)),
        getItemToCart: (item)=>dispatch(getItemToCart(item)),
        closeDisplay: (item)=>dispatch(closeDisplay(item)),
        BannerDisplay: (item)=>dispatch(BannerDisplay(item)),
        fetchCategories: ()=>dispatch(fetchCategories()),
        CartSwitch: (item)=>dispatch(CartSwitch(item)),
        quantity: (item)=>dispatch(quantity(item))
        
    }
}


class Clothes extends Component {


    constructor(){
        super()
        this.state={
            info:[],
            name:'',
            att:[],
            price:[],
            symbol:'',
            description:'',
            tick:false,
            open:false,
            cart_details:{},
            flick:false
        }
    }

componentDidMount(){
    this.props.getProducts()
        
        
    

}


async send(data){
    this.props.clearAttribute()


    const price1=[]

    data.prices.map((i)=>{
        price1.push(i.amount)
    })

    this.setState({
        info:data.gallery,
        name:data.name,
        att:data.attributes,
        symbol:data.prices[this.props.price_index].currency.symbol,
        price:price1,
        description:data.description,
        tick:true,

    })
    this.props.setCount(0)
    this.props.closeDisplay(true)

    const a1 ={

        name : data.name,
        image:data.gallery[0],
        symbol:data.prices,
        price:data.prices,
        orignal_prices:data.prices,
        quantity:1,
        id:data.id,
        attributes_length:data.attributes.length,
        inStock:data.inStock
    
    }

    

    if(a1.attributes_length==0){
      
      await  this.props.getCartItem(a1)
    }

else{
    this.setState({
        cart_details:{a1}
    })
}
  
}

inCart(data){
    if(this.props.cart.some(i => i.id=== data.id)){
        return true
    } 
    else{
        return false
    }
}


async cartlist(data){

    this.props.clearAttribute()


    const a ={

        name : data.name,
        image:data.gallery[0],
        symbol:data.prices,
        price:data.prices,
        orignal_prices:data.prices,
        quantity:1,
        id:data.id,
        attributes_length:data.attributes.length,
        inStock:data.inStock
    
    }





if(data.attributes.length==0){

    if(!this.inCart(a)){
        await this.props.getItemToCart(a)
        await this.props.quantity("increase")
    }
    


}


else{

    const bannerDetails={
        bannerValue:'Select Product Attributes',
        bannerActive:true
    }

    this.props.BannerDisplay(bannerDetails)


    setTimeout(() => {
        bannerDetails.bannerActive=false

        this.props.BannerDisplay(bannerDetails)
        
    }, 2000);

  


   
    this.send(data)
   
}




}

    render() {


        return (
            <div className='s' onClick={()=>{
                this.props.CartSwitch(false)
            }}>
               <div className="categoryDiv"> <h1>{this.props.name.toUpperCase()}</h1></div>
            <div className="grid">
                {
                    this.props.products.map((i,index)=>(
                            <div key={index} className="view" onMouseOver={()=>{
                                this.setState({
                                    open:true
                                })
                            }}>
                                <div className="ro">
                                    <div className={i.inStock ? 'circle' : 'none'} onClick={()=>{
                                        this.cartlist(i)
                                    }}>
                                        <Img src={img}/>
                                    </div>
                                    <Cover display={i.inStock ? true : false} ><p>OUT OF STOCK</p></Cover>
                                <img src={i.gallery[0]}/>
                                </div>
                                <div className="price">

                    <p>{i.name}</p>
                    <p>{i.prices[this.props.price_index].currency.symbol}{i.prices[this.props.price_index].amount}</p>
                                    <Display
                                    onClick={()=>{
                                        this.send(i)
                                    }}
                                    ><p>Display</p></Display>
                                    </div>

                            </div>
                    ))
                }
                
            </div>

            <Info  data={this.state.info} name={this.state.name} att={this.state.att} price={this.state.price} symbol={this.state.symbol} tick={this.state.tick} description={this.state.description} cart_details={this.state.cart_details}/>
          
            </div>
        );
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(Clothes);
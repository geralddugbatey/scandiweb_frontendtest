import React, { Component } from 'react';

import { connect } from 'react-redux'
import { Arrow, First ,Div,Images,Tabs,Slider,Slide,Overlay, Attribute, Button,P} from './elements';
import {setCount,getTotal, quantity,closeDisplay,clearAttribute,BannerDisplay,getItemToCart} from '../../actions/index'
import Filler from './Filler'
import '../MainComponents/sa.css'
function mapStateToProps(state) {
    return {
        count:state.count,
        price_index:state.price_index,
        flick:state.flick,
        cartItem:state.cartItem,
        symbols:state.symbols,
        cart:state.cart,
        change1:state.change1
    };
}


function mapDispatchToProps(dispatch){


    return{
      
        setCount: (num)=>dispatch(setCount(num)),
        closeDisplay: (item)=>dispatch(closeDisplay(item)),
        clearAttribute: ()=>dispatch(clearAttribute()),
        BannerDisplay: (item)=>dispatch(BannerDisplay(item)),
        getItemToCart: (item)=>dispatch(getItemToCart(item)),
        getTotal: (item)=>dispatch(getTotal(item)),
        quantity: (item)=>dispatch(quantity(item))
      
    }
}




class Info extends Component {
    constructor(props) {
        super(props);
       this.state={
           gallery:[],
           name_product:'',
           attribues:[],
           price:[],
           symbol:'',
           description:'',
           tick:false,
           cart_details:{}
          
       }
    }
   
    static getDerivedStateFromProps(props, state){
        
         return{
             gallery:props.data,
             name_product:props.name,
             attributes:props.att,
             price:props.price,
             symbol:props.symbol,
             description:props.description,
             tick:props.tick,
             cart_details:props.cart_details
         }

    
     
    }

    roll(num){
       this.props.setCount(num)
    }

    

    regextest(text){

        const b=/</
        
        const result = b.test(text)

        return result
    }

    parseHTML(text) {
        return {__html: text};
      }

    close(){
        this.props.closeDisplay(false)
        this.props.clearAttribute()
      
     } 


inCart(data){
    if(this.props.cart.some(i => i.id=== data.id)){
        return true
    } 
    else{
        return false
    }
}


     async itemToCart(data){
   
    if(data.name){
       if(data.inStock){
            if(data.attributes_length==0){
     
                if(!this.inCart(data)){
                    this.props.getItemToCart(data)
                    await this.props.quantity("increase")
                }
                
            }
            else{

                    if(data.attributes_cart.length==data.attributes_length){

                        if(!this.inCart(data)){
                            this.props.getItemToCart(data)
                            await this.props.quantity("increase")
                        }
                 
              
                    }

                    else{

                        const bannerDetails={
                            bannerValue:`Select All ${data.name} Attributes`,
                            bannerActive:true
                        }
                    
                        this.props.BannerDisplay(bannerDetails)
                    
                    
                        setTimeout(() => {
                            bannerDetails.bannerActive=false
                    
                            this.props.BannerDisplay(bannerDetails)
                            
                        }, 2000);

                    }

            }
   
      
      

       }

       else{

        const bannerDetails={
            bannerValue:'Out Of Stock',
            bannerActive:true
        }
    
        this.props.BannerDisplay(bannerDetails)
    
    
        setTimeout(() => {
            bannerDetails.bannerActive=false
    
            this.props.BannerDisplay(bannerDetails)
            
        }, 2000);
       }

    }
       else{
   
        const bannerDetails={
            bannerValue:'Select Attributes',
            bannerActive:true
        }
    
        this.props.BannerDisplay(bannerDetails)
    
    
        setTimeout(() => {
            bannerDetails.bannerActive=false
    
            this.props.BannerDisplay(bannerDetails)
            
        }, 2000);
       }

       

       
        
     }
      
    render() {
     
        return (
           <Div flick={this.props.flick}>
               <Arrow flick={this.props.flick} onClick={()=>{
                  this.close()
               }}/>
               <First>
                   <Tabs>
                       {
                           this.state.gallery.map((i,index)=>(
                             <Images key={index} onClick={()=>{
                                    this.roll(index)
                             }}>
                                 <img src={i}></img>
                             </Images>
                           ))
                       }

                   </Tabs>
                   <Overlay>
                   <Slider style={{ transform: `translate3d(${-(this.props.count) * 100}%, 0, 0)` }}>

{
      this.state.gallery.map((i)=>(

         <Slide>

             <img src={i}/>

         </Slide>
      )
      )
}

</Slider>
                   </Overlay>

                 <Attribute>
<h1 className="h1">{this.state.name_product}</h1>
               

                     <Filler  cart_details={this.state.cart_details}
                        attributes={this.state.attributes} />

                <P tick={this.state.tick}><strong>PRICE</strong></P>
                   <p>{this.props.symbols[this.props.price_index]}{this.state.price[this.props.price_index]}</p>
                <Button tick={this.state.tick}
                onClick={()=>{
                    this.itemToCart(this.props.cartItem)
                }}
                ><p>ADD TO CART</p></Button>
                <div className="inside">
                {
                    this.regextest(this.state.description) ? <div dangerouslySetInnerHTML={this.parseHTML(this.state.description)} /> : <p>{this.state.description}</p>
                }
                </div>
                 </Attribute>

               </First>

           </Div>
        );
    }
}


export default connect(
    mapStateToProps,mapDispatchToProps
)(Info);
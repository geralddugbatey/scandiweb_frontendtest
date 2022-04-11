import React, { Component } from 'react';
import { connect } from 'react-redux';
import {UpdateCount,Increase,Decrease, BannerDisplay, clearCartItem, closeDisplay,clearAttribute, getTotal,clear,quantity,change} from '../../actions/index'
import '../MainComponents/sa.css'
import {  Heading,FirstDiv,SecondDiv,Plus,Pic,Add,LinkC,Bottom,Att,AttBox,Final,FButton,FButton1 ,P1, } from './elements';
function mapStateToProps(state) {
    return {
            cartItems : state.cart,
            price_index:state.price_index,
            total_price:state.total_price,
            symbols:state.symbols,
            change1:state.change1
    };
}

function mapDispatchToProps(dispatch) {
    return {
        UpdateCount: ()=>dispatch(UpdateCount()),
        Increase: (item)=>dispatch(Increase(item)),
        Decrease: (item)=>dispatch(Decrease(item)),
        BannerDisplay: (item)=>dispatch(BannerDisplay(item)),
        getTotal: ()=>dispatch(getTotal()),
        closeDisplay: (item)=>dispatch(closeDisplay(item)),
        clearAttribute: ()=>dispatch(clearAttribute()),
        clear: ()=>dispatch(clear()),
        clearItem: ()=>dispatch(clearCartItem()),
        quantity: (item)=>dispatch(quantity(item)),
       
        change: ()=>dispatch(change()),
       

      
    };
}

class Cart extends Component {

    constructor(props){
        super(props)
        this.state={
            prices:false
        }
    }

  


  success(){
    const bannerDetails={
        bannerValue:'SUCCESS!',
        bannerActive:true
    }

    this.props.BannerDisplay(bannerDetails)


    setTimeout(() => {
        bannerDetails.bannerActive=false

        this.props.BannerDisplay(bannerDetails)
        
    }, 1800);

  }
    
    async decresePrice(data){

    

            await  this.props.Decrease(data)
            await this.props.quantity("decrease")
            if(this.props.cartItems.length==0){
                    await this.props.clear()
                    await this.props.clearAttribute()
                    await this.props.clearItem()
                    
            }
          this.setState({
              prices:true
          })
    
          this.props.change()

        

        
      
    }

   async increasePrice(data,num){

    if(num==0){
        await  this.props.Increase(data)
        await this.props.quantity("increase")
        this.setState({
            prices:true
        })
        this.props.change()
    }

    else{
        this.success()
    }
       
     
    }
   render() {
    this.props.getTotal()

        return (
            <>
          
          <div>
    {
        this.props.cartItems.length==0 ? <div className="empty">
            <h1>No Items</h1>
            </div>:

            <div>
           <Heading>
                    <p><span>My Bag</span>, {this.props.cartItems.length} {this.props.cartItems.length
                    >1?'items':'item'
                    }</p>
                            </Heading>
                          <div className="overall">
{
                    this.props.cartItems.map((i,index)=>(
                        <div key={index} className="bag">
                            <FirstDiv>
            
                            <p>{i.name}</p> 
                            <p>{i.symbol[this.props.price_index].currency.symbol}{i.price[this.props.price_index].amount.toFixed(2)}</p>
                            {
                                i.attributes_length==0?<div></div> :
                                <Att>
                                    {
                                         i.attributes_cart.map((t,index)=>(
                                            <div className="att" key={index}>
                                            <p>{t.name}</p>
                                            {
                                                t.type=="swatch"?
                                                <AttBox border1={t.type=="swatch"?t.value : "black"} color={t.type=="swatch"?t.value : "#fff"}>
                                           
                                            </AttBox>
                                            :
                                            <AttBox border1={t.type=="swatch"?t.value : "black"} color={t.type=="swatch"?t.value : "#fff"}>
                                            <P1 color={t.type=="swatch"?t.value : "black"}>{t.value}</P1>
                                            </AttBox>
                                            }
                                       
                                           
                                            </div>
            
                                        ))
                                    }
                                </Att>
                            }
                            </FirstDiv>
                          
                            <SecondDiv>
                               
                               
                                <Plus>
                                    <Add height="20px" width="20px" onClick={
          ()=>{
              this.increasePrice(i,0)
          }
      }><p>+</p></Add>
                                    <p>{i.quantity}</p>
                                    <Add  height="20px" width="20px" onClick={()=>{
          this.decresePrice(i)
      }}><p>-</p></Add>
                                </Plus>
                                <Pic height="150px" width="150px">
                                    <img src={i.image}/>
                                </Pic>
                               
                            </SecondDiv>
                        </div>
                    ))
                }
                </div>
                <Bottom>
                    <p><span>Total</span></p>   <p>{this.props.symbols[this.props.price_index]} {this.props.total_price[this.props.price_index].toFixed(2)}</p>
                </Bottom>
                <div className="final">
                <Final>
                     <LinkC to="/cart">
                    <FButton 
                    >
                        <p>VIEW BAG</p>
                    </FButton>
                    </LinkC>
              
                    <FButton1>
                    <p onClick={
          ()=>{
              this.increasePrice({},1)
          }

                    }>
                     CHECK OUT   
                        </p>
                    </FButton1>
                  
                   
                
                </Final>
      </div>
            </div>


    }
    
                
            </div>
    
               
                  
        
        
      
      
          </>
        );
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(Cart);
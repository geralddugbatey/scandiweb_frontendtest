import React, { Component } from 'react';
import { connect } from 'react-redux';
import {UpdateCount,Increase,Decrease,getTotal,clear, change,quantity} from '../../actions/index'
import '../MainComponents/sa.css'
import { CartPageDiv,Right,Left,Plus,Pic,Add,LinkC,Bottom,Att,AttBox,Final,FButton,FButton1 ,P1, Att1,} from './elements';
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
        getTotal: ()=>dispatch(getTotal()),
        clear: ()=>dispatch(clear()),
        quantity: (item)=>dispatch(quantity(item)),
        change: ()=>dispatch(change()),

      
    };
}


class Cartpage extends Component {

    constructor(props){
        super(props)
        this.state={
            prices:false
        }
    }


    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.change1 !== this.props.change1) {
    //         this.forceUpdate()
    //     }
    //  }

  

   
 async s(data){

        await  this.props.Decrease(data)
        await this.props.quantity("decrease")
        if(this.props.cartItems.length==0){
                await this.props.clear()
        }
      this.setState({
          prices:true
      })
      this.props.change()
    }

   async priceRender(data){
       
      await  this.props.Increase(data)
      await this.props.quantity("increase")
      this.setState({
          prices:true
      })
      this.props.change()
    }

    render() {
 
        return (
            <>
            {
                this.props.cartItems.length==0 ?
                <div className="s">
 <div className="empty">
                <h1>No Items</h1>
                </div>
                </div>
                :
                <div className="s">
             
                <div className="categoryDiv"> <h1>CART</h1></div>
     
       <div className="cartPage">

       {
                this.props.cartItems.map((i,index)=>(
                    <CartPageDiv>
                           <Left>
                           <p className="name">{i.name}</p> 
                       <p className="priece">{i.symbol[this.props.price_index].currency.symbol}{i.price[this.props.price_index].amount.toFixed(2)}</p>
                       {
                           i.attributes_length==0?<div></div> :
                           <Att1>
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
                           </Att1>
                       }
                           </Left>
                           <Right>
                           <Plus>
                               <Add
                               onClick={
                                   ()=>{
                                       this.priceRender(i)
                                   }
                               }
                                height="40px" width="40px">
                                   <p className="plus">+</p>
                               </Add>
                <p>{i.quantity}</p>
                               <Add onClick={()=>{
     this.s(i)
 }} height="40px" width="40px">
                                   <p className="plus">-</p>
                               </Add>

                           </Plus>
                           <Pic height="170px" width="170px">
                               <img src={i.image}/>
                           </Pic>
                           </Right>

                    </CartPageDiv>

                ))

}
       </div>

       </div>

            }

            </>
          
        );
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(Cartpage);
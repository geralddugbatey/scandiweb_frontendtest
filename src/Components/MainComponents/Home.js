import React, { Component } from "react";
import { connect } from "react-redux";
import { CartSwitch, fetchCategories, change,closeDisplay,clearAttribute, GetPrices,UpdateCount} from "../../actions/index";
import "./sa.css";
import { Header, Click, LinkP, Background, Drop, MediaHeader,MediaLink, ArrowPriceMedia, ArrowPrice,Dot , Drop1, MediaClick, Background1, Drop2 } from "../SubComponents/elements";
import img from "../images/svg 19.png";
import img1 from "../images/Vector1.png";
import img2 from "../images/Vector3.png";
import Cart from "../SubComponents/Cart";
function mapStateToProps(state) {
  return {
    all: state.getCategories,
    prices_all:state.getPrices,    
     price_index:state.price_index,
     symbols:state.symbols,
     cartswitch:state.cartswitch,
     quantity:state.quantity
  };
}

function mapDispatchToProps(dispatch) {
  return {
      UpdateCount: (item)=>dispatch(UpdateCount(item)),
      fetchCategories: ()=>dispatch(fetchCategories()),
      GetPrices: ()=>dispatch(GetPrices()),
      CartSwitch: (item)=>dispatch(CartSwitch(item)),
      closeDisplay: (item)=>dispatch(closeDisplay(item)),
      clearAttribute: ()=>dispatch(clearAttribute()),
      change: ()=>dispatch(change())
    
  };
}


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index1: 0,
      turn:false,
      turn1:false,
      setQ:false
    };
  }

  componentDidMount() {
    this.props.fetchCategories();
    this.props.GetPrices()
  }

  className(index) {
    this.setState({
      index1: index,
    });
  }

  checkCart(){
    if(this.state.turn1){
      this.setState({
        turn1:false
      })
    }
    this.props.CartSwitch(!this.props.cartswitch)
  }
  checkCart1(){
    if(this.state.turn2){
      this.setState({
        turn2:false
      })
    }
    this.props.CartSwitch(!this.props.cartswitch)
  }

  checkSymbolCart(){
    if(this.props.cartswitch){
      this.props.CartSwitch(false)
    }
    this.setState({
      turn1:!this.state.turn1
    })
  }
  checkSymbolCart1(){
    if(this.props.cartswitch){
      this.props.CartSwitch(false)
    }
    this.setState({
      turn2:!this.state.turn2
    })
  }

  close(){
    this.props.closeDisplay(false)
    this.props.clearAttribute()
  
 } 

  check(name) {
    if (name == "all") {
      return "/";
    }
    const a = "/" + name;
    return a;
  }


  changeSymbol(index){
   this.props.UpdateCount(index)
  }
  render() {

    return (
      <Header>
        <div className="ontop">
        <div className="ss1">
        <MediaHeader>
          <div className="first">
          {this.props.all.map((i, index) => (
            <MediaLink 
            className={
              this.check(i.name) == window.location.pathname
                ? "Mediaactive"
                : ""
            }>
              <MediaClick
              key={index}
              onClick={() => {
                this.className(index);
                this.close()
              }}
              to={i.name == "all" ? "/" : `/${i.name}`}>
            <p  className={
                    this.check(i.name) == window.location.pathname
                      ? "pp activ"
                      : "pp"
                  }
            >{i.name.toUpperCase()}</p> 
              </MediaClick>
        
            </MediaLink>

         ))}
      
          </div>
        

          <div className="second">
            <Background1>
              <img src={img} />
            </Background1>
          </div>


          <div className="third">
                <p>{this.props.symbols[this.props.price_index]}</p>
         <ArrowPriceMedia onClick={()=>{
           this.checkCart1()
         }} turn={this.props.cartswitch}/>
         <div onClick={()=>{
           this.checkSymbolCart1()
         }} className='img1'>
           <Dot send={this.props.quantity==0?false:true}>
               <p>{this.props.quantity}</p> 
            
           </Dot>
         <img  src={img1}/>
         <img className="dot" src={img2}/>
         <img className="dot1" src={img2}/>
         </div>
                  <Drop2 turn2={this.state.turn2}>

                    {
                      this.state.turn2 ? <Cart /> : null
                    }

          
                  </Drop2>
                  <Drop turn={this.props.cartswitch}>
{
  this.props.prices_all.map((i,index)=>(
    <div className="symbols" onClick={()=>{
      this.changeSymbol(index)
      this.props.CartSwitch(false)
      this.props.change()
    }}>
      <p>{i.currency.symbol} {i.currency.label}</p>
    </div>
  ))
}
                  </Drop>


          </div>
        </MediaHeader>
        </div>
        <div className="ss">
        {this.props.all.map((i, index) => (
            <div
            className={
              this.check(i.name) == window.location.pathname
                ? "linkDiv active"
                : "linkDiv"
            }
            >
              <Click
                key={index}
                onClick={() => {
                  this.className(index);
                  this.close()
                }}
                to={i.name == "all" ? "/" : `/${i.name}`}
              >
                <LinkP
                  className={
                    this.check(i.name) == window.location.pathname
                      ? "pp activ"
                      : "pp"
                  }
                >
                  {i.name.toUpperCase()}
                </LinkP>
              </Click>
            </div>
          ))}

          <div className="in1">
            <Background>
              <img src={img} />
            </Background>
          </div>


          <div className="cartDiv">
                <p>{this.props.symbols[this.props.price_index]}</p>
         <ArrowPrice onClick={()=>{
           this.checkCart()
         }} turn={this.props.cartswitch}/>
         <div onClick={()=>{
           this.checkSymbolCart()
         }} className='img'>
           <Dot send={this.props.quantity==0?false:true}>
               <p>{this.props.quantity}</p> 
            
           </Dot>
         <img  src={img1}/>
         <img className="dot" src={img2}/>
         <img className="dot1" src={img2}/>
         </div>
                  <Drop1 turn1={this.state.turn1}>

                    {
                      this.state.turn1 ? <Cart /> : null
                    }

          
                  </Drop1>
                  <Drop turn={this.props.cartswitch}>
{
  this.props.prices_all.map((i,index)=>(
    <div className="symbols" onClick={()=>{
      this.changeSymbol(index)
      this.props.CartSwitch(false)
    }}>
      <p>{i.currency.symbol} {i.currency.label}</p>
    </div>
  ))
}
                  </Drop>


          </div>
        </div>
        </div>
       
      </Header>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);

import { Component } from "react";


class Modal extends Component  {
   componentDidMount(){
       window.addEventListener('keydown', this.hendlKeyDown)
   
   }
   componentWillUnmount(){
    window.removeEventListener('keydown', this.hendlKeyDown)
   }
   hendlKeyDown= e =>{
    if( e.code === 'Escape'){
            this.props.showModal()
        } 
   }
    render() {
        const {img} = this.props;
      
        return (  
            <div  onClick={this.props.clouseModal} className="Overlay">
              <div className="Modal">
                 <img src={img.largeImageURL} alt={img.tags} />
              </div>
           </div>
        )
    }
}
export default Modal;
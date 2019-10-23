import React from 'react';
import SentMessageBox from '../components/SentMessageBox';

export class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      subject: '',
      message: '',
      hasSent: false
    }
   
  this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
    }
  
  handleSubmit(e){
    e.preventDefault();
    this.setState({
      name: '',
      subject: '',
      message: '',
      hasSent: true
    }, () => { setTimeout(() => {
      this.setState({hasSent:false});
    }, 2000)}
                 );
  }
  render(){
    
    const { hasSent } = this.state;
    
    return (
      <div>
      {hasSent ? ( <SentMessageBox /> ) 
: (
    <form className="contact-form-container" onSubmit={this.handleSubmit}>
        
          <input type="text" value={this.state.name} placeholder="Full Name" 
          name='name' className="contact-input" onChange={this.handleChange} required />
       
           <input type="text" value={this.state.subject} placeholder="Subject" 
           className="contact-input" name='subject' onChange={this.handleChange} required />
         
           <textarea placeholder="Your Message" name='message' value={this.state.message} 
           className="contact-input" onChange={this.handleChange}  required />
        
        <button className="button submit-button" value="Submit">Send!</button>
          
      </form>
      )
  }
        </div>
  )
  }
}

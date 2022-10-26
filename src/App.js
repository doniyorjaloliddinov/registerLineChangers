import React, { Component } from 'react';

class App extends Component {
    state = {
        next:1,
        mode:false,
    }

    modeChange = () => {
        this.setState(
            {
                mode: !this.state.mode
            }
        );
    }

    Next = (next) => {
        this.setState({
            next: next
        });
    }

    render() {
        const {next,mode} = this.state;
        return (
            <div className={mode ? 'bg-dark' : 'bg-light'}>
                <div className='container py-4'>
                    <img onClick={ ()=> this.modeChange()} src={mode ? './img/sunny.png' : './img/moon.png'} className='mode-change-img my-1' height={45} width={45} />
                    <div className='way-controller d-flex align-items-center'>
                        <div className='first-circle rounded-5'></div>
                        <div className='first-step-line all-step-lines'></div>
                        <div className='second-circle all-small-circles rounded-5'></div>

                        <div style={next==2 || next==3 ? {background:'blue'} : {background: 'rgb(148, 148, 170)'}} className='second-step-line all-step-lines'></div>

                        <div className='third-circle all-small-circles rounded-5'></div>

                        <div style={next==3 ? {background:'blue'} : {background: 'rgb(148, 148, 170)'}} className='third-step-line all-step-lines'></div>

                        <div className='fouth-circle all-small-circles rounded-5'></div>
                    </div>

                    <div className='row mt-5 ' >
                            <div style={next  == 1 ? {display:'flex'} : {display:'none'} } class="wrapper my-5  col-4 offset-4">
                                <div  class="card-body">
                                    <h5 style={mode ? {color:'white'} : {color:'black'}} class="card-title text-center">Little info</h5>
                                    {/* <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                     */}
                                    <input style={mode ? {background: 'black'} : {background:'white'}} className='input my-3' type={"text"} placeholder={'Name'}/>
                                    <input style={mode ? {background: 'black'} : {background:'white'}} className='input my-3' type={"password"} placeholder={'Password'}/>
                                    <a onClick={()=> this.Next(2)} href="#" class="btn btn-primary">Next</a>
                                </div>
                            </div> 

                            <div style={next  == 2 ? {display:'flex'} : {display:'none'} } class="wrapper my-5 col-4 offset-4">
                                <div  class="card-body">
                                    <h5 style={mode ? {color:'white'} : {color:'black'}} class="card-title">Card title2</h5>
                                    <input style={mode ? {background: 'black'} : {background:'white'}} className='input my-3' type={"number"} placeholder={'+998975480027'}/>
                                    <input style={mode ? {background: 'black'} : {background:'white'}} className='input my-3' type={"password"} placeholder={'Repeat password'}/>
                                    <a onClick={()=> this.Next(1)} href="#" class="btn btn-primary mx-4">End</a>
                                    <a onClick={()=> this.Next(3)} href="#" class="btn btn-primary">Next</a>
                                </div>
                            </div> 

                            <div style={next  == 3 ? {display:'flex'} : {display:'none'} } class="wrapper my-5 col-4 offset-4">
                                <div  class="card-body">
                                    <h5 style={mode ? {color:'white'} : {color:'black'}} class="card-title">Verification of your humanity</h5>
                                    <p style={mode ? {color:'white'} : {color:'black'}} class="card-text">Choose a traffic light</p>
                                    <br/>
                                    <img className='test-img' src='./img/traffic-lights.png' alt='traffic light' width={35} height={45}/>
                                    <img className='test-img' src='./img/mers.jpg' alt='Mercedes' width={35} height={45}/>
                                    <img className='test-img' src='./img/trees.png' alt='Trees' width={35} height={45}/>
                                    <br/>
                                    <br/>
                                    <a onClick={()=> this.Next(2)}  href="#" class="btn btn-primary mx-4">End</a>
                                </div>
                            </div> 

                    
                    </div>
                </div>
            </div>
        );
    }
}

export default App;








// import React, { Component } from 'react';

// class App extends Component {
//     state = {
//         next:1,
//     }

//     Next = (next) => {
//         this.setState({
//             next: next
//         });
//     }

//     render() {
//         const {next} = this.state;
//         return (
//             <div>
//                 <div className='container py-4'>
//                     <div className='way-controller d-flex align-items-center'>
//                         <div className='first-circle rounded-5'></div>
//                         <div className='first-step-line all-step-lines'></div>
//                         <div className='second-circle all-small-circles rounded-5'></div>

//                         <div style={next==2 || next==3 ? {background:'blue'} : {background: 'rgb(148, 148, 170)'}} className='second-step-line all-step-lines'></div>

//                         <div className='third-circle all-small-circles rounded-5'></div>

//                         <div style={next==3 ? {background:'blue'} : {background: 'rgb(148, 148, 170)'}} className='third-step-line all-step-lines'></div>

//                         <div className='fouth-circle all-small-circles rounded-5'></div>
//                     </div>

//                     <div >
//                             <div style={next  == 1 ? {display:'flex'} : {display:'none'} } class="wrapper">
//                                 <div  class="card-body">
//                                     <h5 class="card-title">List1</h5>
//                                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                     <a onClick={()=> this.Next(2)} href="#" class="btn btn-primary">Next</a>
//                                 </div>
//                             </div> 

//                             <div style={next  == 2 ? {display:'flex'} : {display:'none'} } class="wrapper">
//                                 <div  class="card-body">
//                                     <h5 class="card-title">Card title    2</h5>
//                                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                     <a onClick={()=> this.Next(1)} href="#" class="btn btn-primary mx-4">End</a>
//                                     <a onClick={()=> this.Next(3)} href="#" class="btn btn-primary">Next</a>
//                                 </div>
//                             </div> 

//                             <div style={next  == 3 ? {display:'flex'} : {display:'none'} } class="wrapper">
//                                 <div  class="card-body">
//                                     <h5 class="card-title">Card title     3</h5>
//                                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                     <a onClick={()=> this.Next(2)}  href="#" class="btn btn-primary mx-4">End</a>
//                                 </div>
//                             </div> 

                    
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default App;
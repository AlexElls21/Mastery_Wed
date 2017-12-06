import React, { Component } from 'react';
import BrowsingSecret from './BrowsingSecret';
import axios from 'axios';


export default class Browsing extends Component{
    constructor(){
        super()
        this.state = {
            secretWord: 'Goodbye',
            animal:[{
                animal_id: '',
                animal_type:'',
                animal_img:''
            },
            {
                animal_id: '',
                animal_type: '',
                animal_img: ''
            }],
            edit: false,
            newName: '',
            name: '',
            img:''        }
        this.deleteAnimal = this.deleteAnimal.bind(this)
        this.updateAnimal = this.updateAnimal.bind(this)
        this.createAnimal = this.createAnimal.bind(this)
        
    }

    componentWillMount(){
        axios.get(`/api/get`).then( response => {
            console.log(response)
            this.setState({
                animal: response.data
            })
        })
    }

    // componentDidMount(){
    //     console.log(this.state.animal)
    // }

    deleteAnimal(id) {
        axios.delete(`/api/delete/${id}`).then( res =>{
            console.log('done')
        })
    }

    updateAnimal(id, name){
        axios.put(`/api/update/${id}/${name}`)
    }

    createAnimal(addName, addImg){
        const added = {
            name: addName,
            img: addImg
        }
        axios.post('/api/add', added).then(response => {
            console.log('added')
        })
    }

    render(){
        console.log(this.state)
        console.log(this.state.edit)
        return(
            <div>
                <h1>PET MEET</h1>
                <div>{this.state.edit ?  <div> editing </div> : <div>not editing</div> }
                    <h2>{this.state.animal[0].animal_type}</h2>
                    <img src={this.state.animal[0].animal_img} alt="image"/>
                    <button onClick={() => this.deleteAnimal(this.state.animal[0].animal_id)}>delete</button>
                    <button onClick={() => this.setState({
                        edit: !this.state.edit
                    })}>Edit</button>
                </div>
                {this.state.edit ?  <div> editing </div> : <div><input type='text' placeholder={this.state.animal[0].animal_type} onChange={e => {this.setState({
                    newName: e.target.value
                })}}></input>
                    <img src={this.state.animal[0].animal_img} alt="image"/>
                    <button onClick={() => this.updateAnimal(this.state.animal[0].animal_id, this.state.newName)}>update</button>
                     </div> }                
                <div>
                    <h2>add new animal</h2>
                    <input type="text" placeholder='animal type' value={this.state.name} onChange={(e) => this.setState({
                        name: e.target.value
                    })}></input>
                    <input type="text" placeholder='img' value={this.state.img} onChange={(e) => this.setState({
                        img: e.target.value
                    })} ></input>
                    <button onClick={() => this.createAnimal(this.state.name, this.state.img) } >submit</button>
                    
               </div>
                
            </div>

        )
    }
}
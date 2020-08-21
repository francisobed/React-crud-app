import React, {useState} from 'react';
import './App.css';
import Details from './Details'
import Form from './Form'

export default () => {

  const [state, setState] = useState({
    records:[{
      firstname: 'Catrina',
      lastname: 'Simi',
      country: 'janet'
    },
    {
      firstname: 'Tina',
      lastname: 'Folanke',
      country: 'Winifred'
    },
    {
      firstname: 'qween',
      lastname: 'Sandra',
      country: 'Clementina'
    }],
    form: {
      firstname: '',
      lastname: '',
      country: ''
    }
  
  });

const handleChange = (e) => {
    setState({
      ...state,
      form: {
        ...state.form,
        [e.target.id]: e.target.value
      }
    })
}

const handleSubmit = () => {
  if(state.form.firstname === '' || state.form.lastname === '' || state.form.country === ''){
    return false
  }
  setState({
     records:[...state.records, state.form],
     form: {...state.form, firstname:'', lastname:'',country:''}
   })

 }
 
const handleDelete = (index) => {
  const newArray = [...state.records];
  newArray.splice(index, 1);
  setState({...state,records: newArray});

};
    return (
    <div className="App">
      <h1>Welcome to My Form App</h1>
      <Details records={state.records} handleDelete={handleDelete}/>
      <Form form={ state.form } handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
 }
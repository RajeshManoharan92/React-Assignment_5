import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './index.css';
import Grid from '@mui/material/Grid';
import { Table, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import RadioGroup from '@mui/material/RadioGroup';
import { useState } from 'react';



function CRUD() {

  const [array, setarray] = useState({
    result: []
  })

  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Email, setEmail] = useState('')
  const [Gender, setGender] = useState('')
  const [Courses, setCourses] = useState('React')

  const [formvalue, setformvalue] = useState({
    error: {
      FirstName: "",
      LastName: "",
      Email: "",
      Gender: "",
    }
  })

  const handlesubmit = (e) => {
    e.preventDefault();

    var error = { ...formvalue.error }
    if (FirstName === "") {
      error.FirstName = 'FirstName Required'
      setformvalue({ error })
      return

    }

    if (LastName === "") {
      error.LastName = 'Last Name Required'
      setformvalue({ error })
      return

    }

    if (Email === "") {
      error.Email = 'Email Required'
      setformvalue({ error })
      return

    }

    if (Gender === "") {
      error.Gender = 'Gender Required'
      setformvalue({ error })
      return
    }

    var data = {
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      Gender: Gender,
      Courses: Courses,
    }

    var result = [...array.result];
    result.push(data);
    setarray({ result })
    setFirstName('')
    setLastName('')
    setEmail('')
    setGender('')
  };

  const handleFNChange = async (e) => {
    var error = { ...formvalue.error }
    if (e.target.value === "") {
      error[e.target.name] = `${e.target.name} Required`
    }
    else {
      error[e.target.name] = '';
    }
    setformvalue({ error })
    setFirstName(e.target.value)
  }

  const handleLNChange = async (e) => {
    var error = { ...formvalue.error }
    if (e.target.value === "") {
      error[e.target.name] = `${e.target.name} Required`
    }
    else {
      error[e.target.name] = '';
    }
    setformvalue({ error })
    setLastName(e.target.value)

  }

  const handleEMChange = async (e) => {
    var error = { ...formvalue.error }
    if (e.target.value === "") {
      error[e.target.name] = `${e.target.name} Required`
    }
    else {
      error[e.target.name] = '';
    }
    setformvalue({ error })
    setEmail(e.target.value)

  }

  const handleCUChange = async (e) => {
    var error = { ...formvalue.error }
    if (e.target.value === "") {
      error[e.target.name] = `${e.target.name} Required`
    }
    else {
      error[e.target.name] = '';
    }
    setformvalue({ error })
    setCourses(e.target.value)
  }

  const handleGeChange = async (e) => {
    var error = { ...formvalue.error }
    if (e.target.value === "") {
      error[e.target.name] = `${e.target.name} Required`
    }
    else {
      error[e.target.name] = '';
    }
    setformvalue({ error })
    setGender(e.target.value)
  }

  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar >
              <span className="Box">Controlled Form Using function</span>
            </Toolbar>
          </AppBar>
        </Box>
      </div> <br></br>
      <form onSubmit={(e) => handlesubmit(e)}>
        <div>
          <label >First Name</label> &nbsp;
          <span className='input1'>
            <TextField type='text' name='FirstName' label="First Name" variant="standard"
              value={FirstName} onChange={handleFNChange} ></TextField> <br />
          </span>

          <span style={{ color: 'red' }}> {formvalue.error.FirstName} </span>
        </div> <br></br>
        <div>
          <label >Last Name</label> &nbsp;
          <span className='input2'>
            <TextField type='text' name='LastName' label="Last Name" variant="standard"
              value={LastName} onChange={(e) => handleLNChange(e)} ></TextField> <br />
          </span>

          <span style={{ color: 'red' }}> {formvalue.error.LastName} </span>
        </div> <br></br>
        <div>
          <label >E-mail</label> &nbsp;
          <span className='input3'>
            <TextField type='email' name='Email' label="Email" variant="standard"
              value={Email} onChange={(e) => handleEMChange(e)} ></TextField> <br />
          </span>

          <span style={{ color: 'red' }}> {formvalue.error.Email} </span>
        </div> <br></br>
        <div>
          <label > Gender</label> &nbsp;
          <span className="gender" >
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel className="gender" name="Gender"
                  value='Female'
                  onChange={(e) => handleGeChange(e)} control={<Radio />} label="Female" />
                <FormControlLabel name="Gender"
                  value='Male'
                  onChange={(e) => handleGeChange(e)} control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl> <br></br>
            <span style={{ color: 'red' }}> {formvalue.error.Gender} </span>
          </span> <br></br>
          <label >Courses</label>  &nbsp;
          <div className='select' style={{ display: 'inline-block' }}>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Form.Select aria-label="Default select example" name='Courses'
                  value={Courses}
                  onChange={(e) => handleCUChange(e)}
                  className='courses'>
                  <option value="React">React</option>
                  <option value="Node Js">Node Js</option>
                  <option value="Mongo DB">Mongo DB</option>
                </Form.Select>
              </Grid>
            </Grid>

          </div>
        </div> <br></br>
        <div className='Submitbutton'>
          <Button type="submit" variant="contained" >submit</Button> &nbsp;
        </div>
      </form>

      <div className="grid">
        <Grid container spacing={2}>
          <Grid xs={8}>
            <Table striped bordered hover variant="primary" border='1'>
              <thead>
                <tr>
                  <td> First Name </td>
                  <td> Last Name </td>
                  <td> Email </td>
                  <td> Gender </td>
                  <td> Courses </td>
                </tr>
              </thead>
              <tbody>
                {array.result.map((row) => (
                  <tr key={row.id}>
                    <td> {row.FirstName} </td>
                    <td> {row.LastName} </td>
                    <td> {row.Email} </td>
                    <td> {row.Gender} </td>
                    <td> {row.Courses} </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Grid>
        </Grid>
      </div>
    </>
  )
}


export default CRUD;

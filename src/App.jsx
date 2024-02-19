import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';



function App() {
  const [ pamount, setPamount ] = useState(0)
  const [ rate, setRate ] = useState(0)
  const [ time, setTime ] = useState(0)

  const [validpamount, setValidpamount]= useState(false)
  const [validrate, setValidrate]= useState(false)
  const [validtime, setValidtime]= useState(false)

  const submitted = (e) => {
    e.preventDefault()
    console.log(pamount, rate, time)
    console.log(typeof(pamount))
    const pattern=/^[1-9][0-9]*$/
    if(!pamount.match(pattern)){
      // alert("Invalid Principle Amount")
      setValidpamount(true)
    }
    if(!rate.match(/^[1-9][0-9]{0,1}$/)){
      // alert("Invalid Rate")
      setValidrate(true)
    }
    if(!time.match(/^[1-9][0-9]{0,1}$/)){
      // alert("Invalid Duration")
      setValidtime(true)
    }
  }
  return (
    <>
      <div className='w-100 bg-dark d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
        <div className='bg-light w-50 shadow-rounded p-5'>
          <h4>Simple Interest Calculator</h4>
          <div className='d-flex justify-content-center p-5 border shadow mt-3' style={{ backgroundColor: 'yellow' }}>
            ₹ 1000
          </div>
          <form onSubmit={(e)=>{submitted(e)}}>
            <div className='mt-2'>
              <TextField id="outlined-basic" onChange={(e) => { setPamount(e.target.value) }} style={{ width: '100%' }} label="₹ Principle amount" variant="outlined" />
            {
              validpamount &&
              <div className='text-danger'>
                Invalid Principle Amount
              </div>
            }
            </div>
            <div className='mt-2'>
              <TextField id="outlined-basic" onChange={(e) => { setRate(e.target.value) }} style={{ width: '100%' }} label="% Rate" variant="outlined" />
              {
              validrate &&
              <div className='text-danger'>
                Invalid Rate
              </div>
            }
            </div>
            <div className='my-2'>
              <TextField id="outlined-basic" onChange={(e) => { setTime(e.target.value) }} style={{ width: '100%' }} label="Time" variant="outlined" />
              {
              validtime &&
              <div className='text-danger'>
                Invalid time
              </div>
            }
            </div>
            <Stack spacing={2} direction={'row'}>
              <Button variant='contained' type='submit' className='bg-dark' style={{ height: '50px', width: '50%' }}>SUBMIT</Button>
              <Button variant='contained' className='bg-info' style={{ height: '50px', width: '50%' }}>RESET</Button>
            </Stack>
          </form>
        </div>

      </div>
    </>
  )
}

export default App

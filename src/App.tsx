import { FormEvent, useState } from "react"
import AccountForm from "./AccountForm"
import AddressForm from "./AddressForm"
import useMultiStepForm from "./useMultiStepForm"
import UserForm from "./UserForm"

type FormData = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  age: number,
  street: string,
  city: string,
  state: string,
  zip: string
}

const INITIAL_DATA:FormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  age:0,
  street:'',
  city: '',
  state: '',
  zip: ''
}

const App = () => {
  const [data,setData] = useState(INITIAL_DATA)

  const updateFormData = (fields:Partial<FormData>) => {
    setData(prev => {
      return {...prev,...fields}
    })
  }

  const {currentStepIndex, steps, step, isFirstStep, isLastStep, back,next} = useMultiStepForm([
    <UserForm {...data} updateFormData={updateFormData}/>,
    <AddressForm {...data} updateFormData={updateFormData}/>,
    <AccountForm {...data} updateFormData={updateFormData}/>
  ])

  const submitForm = (e: FormEvent) => {
    e.preventDefault()
    if(!isLastStep) return next()
    alert("Account created")
  
  }



  return (
    <div style={{position: "relative", background: "white", border: "1px solid black", padding: "2rem", margin:"2rem", borderRadius: ".5rem"}}>
      <form action="" onSubmit={submitForm}>
        <div style={{position: "absolute", top: ".5rem", right:".5rem"}}>
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "flex-end",
          gap: ".5rem"
        }}>
          {!isFirstStep &&<button type="button" onClick={back}>Back</button>}
         <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  )
}

export default App
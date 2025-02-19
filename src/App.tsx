import { FormEvent } from "react"
import AccountForm from "./AccountForm"
import AddressForm from "./AddressForm"
import useMultiStepForm from "./useMultiStepForm"
import UserForm from "./UserForm"

const App = () => {
  const {currentStepIndex, steps, step, isFirstStep, isLastStep, back,next} = useMultiStepForm([<UserForm />,<AddressForm />, <AccountForm />])
  const submitForm = (e: FormEvent) => {
    e.preventDefault()
    next()
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
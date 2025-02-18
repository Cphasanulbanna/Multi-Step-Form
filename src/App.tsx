import AccountForm from "./AccountForm"
import AddressForm from "./AddressForm"
import useMultiStepForm from "./useMultiStepForm"
import UserForm from "./UserForm"

const App = () => {
  const {currentStepIndex, steps, step, isFirstStep, isLastStep, back,next} = useMultiStepForm([<UserForm />,<AddressForm />, <AccountForm />])
  return (
    <div style={{position: "relative", background: "white", border: "1px solid black", padding: "2rem", margin:"2rem", borderRadius: ".5rem"}}>
      <form action="">
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
         <button type="button" onClick={next}>{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  )
}

export default App
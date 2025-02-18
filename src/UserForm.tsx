import FormWrapper from "./FormWrapper"

const UserForm = () => {
  return (
    <FormWrapper title="User Details">
    <label htmlFor="">First Name</label>
    <input type="text" required autoFocus />
    <label htmlFor="">Last Name</label>
    <input type="text" required />
    <input type="number" min={1} required />
    </FormWrapper>
  )
}

export default UserForm
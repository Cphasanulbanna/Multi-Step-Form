import FormWrapper from "./FormWrapper"

const AccountForm = () => {
  return (
    <FormWrapper title="Address Details">
    <label htmlFor="">Email</label>
    <input type="email" required autoFocus />
    <label htmlFor="">Password</label>
    <input type="password" required />
    </FormWrapper>
  )
}

export default AccountForm
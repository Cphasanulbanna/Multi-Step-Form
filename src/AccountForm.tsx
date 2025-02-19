import FormWrapper from "./FormWrapper"

type AccountData = {
  email: string,
  password: string
}

type AccountFormProps = AccountData & {
  updateFormData: (field: Partial<AccountData>) => void
}

const AccountForm = ({email,password, updateFormData}: AccountFormProps) => {
  return (
    <FormWrapper title="Address Details">
    <label htmlFor="">Email</label>
    <input type="email" required autoFocus value={email} onChange={(e) => updateFormData({email: e.target.value})}/>
    <label htmlFor="">Password</label>
    <input type="password" required value={password} onChange={(e) => updateFormData({password: e.target.value})} />
    </FormWrapper>
  )
}

export default AccountForm
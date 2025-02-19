import FormWrapper from "./FormWrapper"

type UserData = {
    firstName: string,
    lastName: string,
    age: number,
}

type UserFormProps = UserData & {
    updateFormData: (field: Partial<UserData>) => void,
}

const UserForm = ({firstName, lastName, age, updateFormData}: UserFormProps) => {
  return (
    <FormWrapper title="User Details">
    <label htmlFor="">First Name</label>
    <input type="text" required autoFocus value={firstName} onChange={(e) => updateFormData({firstName: e.target.value})}/>
    <label htmlFor="">Last Name</label>
    <input type="text" required value={lastName} onChange={(e) => updateFormData({lastName: e.target.value})}/>
    <label htmlFor="">Age</label>
    <input type="number" min={1} required value={age} onChange={(e) => updateFormData({age: Number(e.target.value)})}/>
    </FormWrapper>
  )
}

export default UserForm
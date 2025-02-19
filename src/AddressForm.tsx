import FormWrapper from "./FormWrapper"

type AddressData = {
    street: string
    city: string
    state: string
    zip: string
}

type AddressFormProps = AddressData & {
    updateFormData: (field: Partial<AddressData>) => void
}

const AddressForm = ({street, city, state, zip, updateFormData}:AddressFormProps) => {
  return (
    <FormWrapper title="Address Details">
    <label htmlFor="">Street</label>
    <input type="text" required autoFocus value={street} onChange={(e) => updateFormData({street: e.target.value})} />
    <label htmlFor="">City</label>
    <input type="text" required value={city} onChange={(e) => updateFormData({city: e.target.value})}/>
    <label htmlFor="">State</label>
    <input type="text" required value={state} onChange={(e) => updateFormData({state: e.target.value})}/>
    <label htmlFor="">Zip</label>
    <input type="text" required value={zip} onChange={(e) => updateFormData({zip: e.target.value})}/>
    </FormWrapper>
  )
}

export default AddressForm
import Input from "../Input/Input"

const Form = (props) => {
    const { items, increase, decrease, formNo } = props
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            increase()
        }}>
            {items.map(
                item => <Input key={item.name} {...item} setValue={props.setValue} />
            )}

            <div className="formButtons">
                <button onClick={decrease} type="button" disabled={formNo === 1}>Prev</button>
                <button disabled={formNo === 5}>{formNo === 4 ? 'Submit' : 'Next'}</button>
            </div>

        </form>
    )
}

export default Form

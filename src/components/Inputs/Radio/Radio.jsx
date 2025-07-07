import "./Radio.css"

const Radio = ({
  radio_options,
  field,
  onChange
}) => {
  return (
    <div style={{ width: '280px', height: '30px', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
      {radio_options.map((item) => {
        return (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
            <input
              className='multi-input-custom'
              id={item}
              value={item}
              type="radio"
              name={field}
              onChange={onChange}
            />
            <label className="radio-label" for={item}> {item} </label>
          </div>
        )
      })}
    </div>
  )
}

export default Radio;
import { useMediaQuery } from "react-responsive"

export default function GenderSelect({ handleRegisterChange, genderError }) {
    const view1 = useMediaQuery({
        query: ('min-width: 539px')
      })
      const view2 = useMediaQuery({
        query: ('min-width: 539px')
      })
      const view3 = useMediaQuery({
        query: '(min-width: 11270px)',
      })
  return (
    <div className="reg_grid" style={{ marginBottom: `${genderError && !view3 && '70px'}` }}>
                    <label htmlFor='male'>
                        Male
                        <input type='radio' name='gender' value='male' id="male" onChange={handleRegisterChange} />
                    </label>
                    <label htmlFor='female'>
                        Female
                        <input type='radio' name='gender' value='female' id="female" onChange={handleRegisterChange} />
                    </label>
                    <label htmlFor='custom'>
                        Custom
                        <input type='radio' name='gender' value='custom' id="custom" onChange={handleRegisterChange} />
                    </label>
                    {genderError && (
                        <div className="input_error">
                        <div className="error_arrow_bottom"></div>
                        {genderError}</div>)}
                </div>
  )
}

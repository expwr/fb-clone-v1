import './style.css';
import { ErrorMessage, useField } from 'formik'
import { useMediaQuery } from 'react-responsive'

export default function RegisterInput({ placeholder, bottom, ...props }) {
    const [field, meta] = useField(props);
    const view1 = useMediaQuery({
      query: ('min-width: 539px')
    })
    const view2 = useMediaQuery({
      query: ('min-width: 539px')
    })
    const view3 = useMediaQuery({
      query: '(min-width: 11270px)',
    })
    const test1 = view3 && field.name === 'first_name'
    const test2 = view3 && field.name === 'last_name'
  return (
    <div className='input_wrap register_input_wrap'>
      <input className={meta.touched && meta.error ? 'input_error_border': ''} style={{ width: `${view1}`}} placeholder={placeholder} {...field} {...props} type={field.type} name={field.name} />
      {meta.touched && meta.error && (
      <div className={view2 ? 'input_error input_error_desktop' : 'input_error'} style={{ transform: 'translateY(2px)', left: `${test1 ? '-107%' : test2 ? '107%' : ''}` }}>
        {
            meta.touched && meta.error && <ErrorMessage name={field.name} />
        }
        {
            meta.touched && meta.error && (
              <div className={view3 && field.name !== 'last_name' ? 'error_arrow_left' : 'error_arrow_bottom'}>
                
              </div>
            ) 
        }
    </div>
    )}
      { meta.touched && meta.error && (
        <i className='error_ico' style={{top: `${!bottom && !view3 ? '63%' : '15px'}` }}></i>
      )
       } 
    </div>
  )
}

import { Field, ErrorMessage } from 'formik'
import styles from './InputForm.module.css'

export default function InputForm({grow, name, type = '', label, required, ...props }) {

    return (
        <div className={styles.container} style={grow && {flexGrow: '.2'}}>
            <Field 
                className={styles.input}
                name={name} 
                type={type} {...props} 
                placeholder={label || name}
            />
            <div className={styles.aviso}>
                <ErrorMessage name={name}>
                    {(msg) => <div className={styles.errorMessage}>{msg}</div>}
                </ErrorMessage>
            </div>
        </div>
    )
}
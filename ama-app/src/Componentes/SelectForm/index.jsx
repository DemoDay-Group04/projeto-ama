import { useField, ErrorMessage } from "formik";
import styles from './SelectForm.module.css'

export default function SelectForm({...props}) {
    const {field, meta} = useField(props)
    console.log(field)

    return(
        <>
            <select
                className={styles.select}
                {...field}
                {...props}
            />
            <div className={styles.aviso}>
                <ErrorMessage name="profissao">
                    {(msg) => <div className={styles.errorMessage}>{msg}</div>}
                </ErrorMessage>
            </div>
        </>
    )
}
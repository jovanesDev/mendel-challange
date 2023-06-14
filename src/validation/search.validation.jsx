import * as Yup from 'yup'

export const searchValidationSchema = Yup.object().shape({
    search: Yup.string()
        .min(3, 'El campo debe tener al menos 3 caracteres')
        .required('El campo es requerido'),
})


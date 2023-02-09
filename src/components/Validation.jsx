const Validation = (values) => {

    let errors={}

    const regex1 = new RegExp('^[._]')

    const regex2 = new RegExp('^(?=.{6,16}$)(?!.*[_.]{2})[a-zA-Z0-9._]')

    const regex3 = new RegExp(/\S+@\S+\.\S+/)

    const regex4 = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])')

    const regex5 = new RegExp('^(?=.{8,16}$)')

    if (!values.username) {
        errors.username="Username shouldn't be empty"
    } else if (regex1.test(values.username)) {
        errors.username="Username shouldn't start with a special character "
    } else if (!regex2.test(values.username)) {
        errors.username="Username length must be 6-16 characters and two special characters shouldn't be used consecutively"
    } else {
        errors.usernames="No"
    }

    if (!values.email) {
        errors.email="Email shoudn't be empty"
    } else if (!regex3.test(values.email)) {
        errors.email="Invalid Email"
    } else {
        errors.emails="No"
    }

    if (!values.password) {
        errors.password="Password shouldn't be empty"
    } else if (!regex4.test(values.password)) {
        errors.password="Password must be an alphanumeric string which includes atleast one upper-case alphabet, one lower-case alphabet, one digit and one special character"
    } else if (!regex5.test(values.password)) {
        errors.password="Password length must be 8-16 characters"
    } else {
        errors.passwords="No"
    }

    if (!values.confirmPassword) {
        errors.confirmPassword="This field is required"
    } else if (values.confirmPassword!==values.password) {
        errors.confirmPassword="Mismatch. Kindly check input fields"
    } else {
        errors.confirm="No"
    }

  return errors
}

export default Validation

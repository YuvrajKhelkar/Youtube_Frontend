const name = document.querySelector("#name")
const phone = document.querySelector("#phone")
const email = document.querySelector("#email")

const validateData = ()=> {
    if(name.value.trim()==="") {
        alert("Name cannot be empty!")
        return false
    }
    if(isNaN(Number(phone.value))) {
        alert("Phone should be a number!")
        return false
    }
    if(phone.value.trim().length!==10) {
        alert("Mobile should be 10 digits long")
        return false
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(email.value.trim())) {
        alert("Please enter a valid email")
        return false
    }

    alert("You have signed up successfully!")
    return true
}
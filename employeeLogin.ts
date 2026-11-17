function employeeLogin(username: string, password: string) {
    if (username === "ganesh" && password === "12345") {
        console.log("Login Successful");
    } else {
        console.log("Invalid Username or Password");
    }
}

employeeLogin("ganesh", "12345");
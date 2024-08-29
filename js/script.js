//       id
task_1 = document.getElementById('task-1')
task_2 = document.getElementById('task-2')
task_1_output = document.getElementById('task-1-output')
task_2_output = document.getElementById('task-2-output')
task_3_name = document.getElementById('name')
task_3_email = document.getElementById('email')
task_3_password = document.getElementById('password')
task_3_email_log = document.getElementById('loginemail')
task_3_password_log = document.getElementById('loginpassword')
task_4_title = document.getElementById('title')
task_4_director = document.getElementById('director')
task_4_year = document.getElementById('year')
task_4_rating = document.getElementById('rating')
//        1.
const bankAccount = {
    ownerName:'Name',
    accountNumber:'123',
    balance: 123,
    deposit(){
        this.balance += Number.parseFloat(task_1.value)
        task_1_output.textContent = 'Баланc: ' + this.balance
    },
    withdraw(){
        if(this.balance >= Number.parseFloat(task_1.value)){
            this.balance -= Number.parseFloat(task_1.value)
            task_1_output.textContent = 'Баланc: ' + this.balance
        }
        else{
            task_1_output.textContent = 'Недостатньо коштів'
        }
    }
}
//           2. 

const weather = {
    temperature: 'N/A',
    humidity: 0.5 + '%',
    windSpeed: 15 + 'km/h',
    tempCheck(){ 
        this.temperature = Number.parseFloat(task_2.value)

        if(this.temperature < 0){
            task_2_output.textContent = 'Температура нижче 0 градусів Цельсія'
            return true
        } 
        else{
            task_2_output.textContent = 'Температура вище або дорівнює 0 градусів Цельсія'
            return false
        }
    }
}
//          3.
const user = {
    name: 'name',
    email: 'email@gmail.com',
    password: '123',
    login(){
        if (task_3_email_log.value == this.email && this.password == task_3_password_log.value){
            console.log('Успішний логін')
        }
        else{
            console.log('Неправельний пароль чи емейл')
        }
    },
    register(){
        this.name = task_3_name.value
        this.email = task_3_email.value
        this.password = task_3_password.value
        console.log('Успішна регестрація ' + this.name + ' ' + this.email + ' ' + this.password)
    }
}
//         4.
const movie = {
    title: 'Harry Potter',
    director: 'David Yates',
    year:'2001-2011',
    rating: 10,
    checkRating(){
        task_4_title.textContent = this.title
        task_4_director.textContent = this.director
        task_4_year.textContent = this.year
        task_4_rating.textContent = this.rating
        if (this.rating > 8){
            task_4_title.style.color = 'green'
            return true
        }
        else{
            task_4_title.style.color = 'red'
            return false
        }
    }
} 
console.log(movie.checkRating()) 
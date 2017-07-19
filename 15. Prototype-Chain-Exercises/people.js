class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
        this.currentResposibility = 0;
    }

    work() {
        if (this.currentResposibility == this.tasks.length) {
            this.currentResposibility = 0;
        }

        console.log()

        this.currentResposibility++;
    }

    collectSalary() {

    }
}

class Junior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push(`${this.name} is working on a simple task.`)
    }
}

class Senior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push(`${this.name} is working on a complicated task.`)
        this.tasks.push(`${this.name} is taking time off work.`)
        this.tasks.push(`${this.name} is supervising junior workers.`)
    }
}

class Manager extends Employee {
    constructor(name, age, divident) {
        super(name, age);
        this.divident = divident;
        this.tasks.push(`${this.name} scheduled a meeting.`)
        this.tasks.push(`${this.name} is preparing a quarterly report.`)
    }
}
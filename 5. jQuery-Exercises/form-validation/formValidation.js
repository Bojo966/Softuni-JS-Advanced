/// <reference path="E:\js-core\Softuni-JS-Advanced\node_modules\@types\jquery\index.d.ts" />

function validate() {
    $('#submit').click(validateFields)
    $('#company').change(toggleCompanyInfo)
    let companyInfoVisible = false

    function validateFields(event) {
        event.preventDefault()
        validateUsernameElement()
        validatePasswordElement()
        validatePasswordConfirmElement()
        validatePasswordsEquality()
        validateEmailElement()

        let isCompanyElement = $('#company')

        if (isCompanyElement.val()) {
            validateCompanyNumber()
        }
    }

    function validateUsernameElement() {
        let usernameElement = $('#username')
        usernameElement.css('border-color', 'none')
        let pattern = /^[a-zA-Z0-9]{3, 20}$/g
        if (!pattern.exec(usernameElement.val())) {
            usernameElement.css('border-color', 'red')
        }
    }

    function validatePasswordElement() {
        let passwordElement = $('#password')
        passwordElement.css('border-color', 'none')
        let pattern = /^\w{5,15}$/g
        if (!pattern.exec(passwordElement.val())) {
            passwordElement.css('border-color', 'red')
        }
    }

    function validateEmailElement() {
        let emailElement = $('#email')
        emailElement.css('border-color', 'inherit')
        let pattern = /^(.+@.+\..+)$/g
        if (!pattern.exec(emailElement.val())) {
            emailElement.css('border-color', 'red')
        }
    }

    function validatePasswordConfirmElement() {
        let confirmPasswordElement = $('#confirm-password')
        confirmPasswordElement.css('border-color', 'none')
        let pattern = /^\w{5,15}$/g
        if (!pattern.exec(confirmPasswordElement.val())) {
            confirmPasswordElement.css('border-color', 'red')
        }
    }

    function validatePasswordsEquality() {
        let confirmPasswordElement = $('#confirm-password')
        let passwordElement = $('#password')
        confirmPasswordElement.css('border-color', 'none')
        passwordElement.css('border-color', 'none')

        if (confirmPasswordElement.val() !== passwordElement.val()) {
            confirmPasswordElement.css('border-color', 'red')
            passwordElement.css('border-color', 'red')
        }
    }

    function validateCompanyNumber() {
        let companyNumberElement = $('#companyNumber')
        companyNumberElement.css('border-color', 'none')
        let companyNumberValue = companyNumberElement.val()
        if (companyNumberValue < 1000 || companyNumberValue > 9999) {
            companyNumberElement.css('border-color', 'red')
        }
    }

    function toggleCompanyInfo() {
        let companyInfoElement = $('#companyInfo')

        if (companyInfoVisible) {
            companyInfoVisible = false
            companyInfoElement.css('display', 'none')
        } else {
            companyInfoVisible = true
            companyInfoElement.css('display', 'inline-block')
        }
    }
}
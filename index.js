document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('contact-form');
    let inputFullName = document.getElementById('form-name');
    let inputEmail = document.getElementById('form-email');
    let inputSelectDate = document.getElementById('form-date');
    let inputSelectTime = document.getElementById('form-time');
    let inputMessage = document.getElementById('form-message');
  
    form.addEventListener('submit', handleSubmit);
  
    function handleSubmit(event) {
      event.preventDefault();
  
      let formElements = [
        {
          element: inputFullName,
          properties: {
            value: inputFullName.value,
            successLabel: 'Name was registered',
            errorLabel: 'Name is required and it must have at least 3 letters.',
            condition: inputFullName.value.length > 2,
          },
        },
        {
          element: inputEmail,
          properties: {
            value: inputEmail.value,
            successLabel: `Email ${emai} was registered`,
            errorLabel: 'Please enter a valid email address.',
            condition: !!inputEmail.value,
          },
        },
        {
          element: inputSelectDate,
          properties: {
            value: inputSelectDate.value,
            successLabel: `We will be happy to meet you ${inputSelectDate.value}`,
            errorLabel: 'Please select a date to schedule a meeting',
            condition: !!inputSelectDate.value,
          },
        },
        {
          element: inputSelectTime,
          properties: {
            value: inputSelectTime.value,
            errorLabel: 'Please select time to schedule a meeting',
            condition: inputSelectTime.value !== 'select',
          },
        },
        {
          element: inputMessage,
          properties: {
            value: inputMessage.value,
            successLabel: 'Message was registered',
            errorLabel: 'Message is required and it must have at least 3 words.',
            condition: inputMessage.value.length > 3,
          },
        },
      ];
  
      const resetClass = (element) => {
        // Convert the DOMTokenList to an array
        let classes = [...element.classList];
  
        // Loop through each class
        for (let className of classes) {
          // If the current class is not the one to keep, remove it
          if (className !== 'actionform') {
            element.classList.remove(className);
          }
        }
      };
      const handleSuccess = (element, label = '') => {
        element.querySelector('.form-result').textContent = label;
        element.classList.add('success');
      };
      const handleError = (element, label = '') => {
        element.querySelector('.form-result').textContent = label;
        element.classList.add('error');
      };
      const validateElement = (item) => {
        const { element, properties } = item;
  
        let elementWrapper = element.parentElement;
        resetClass(elementWrapper);
        if (properties.condition) {
          handleSuccess(elementWrapper, properties.successLabel);
        } else {
          handleError(elementWrapper, properties.errorLabel);
        }
      };
  
      formElements.forEach((item) => validateElement(item));
    }
  });
  
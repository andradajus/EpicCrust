type RegistrationInputType = {
    [key: string]: {
      label: string;
      value: string;
      type: string;
    };
  };
  export const RegistrationInput = (): RegistrationInputType => {
        return {
            first_name: {
            label: 'First Name',
            value: 'first_name',
            type: 'text',
            },
            middle_name: {
            label: 'Middle Name',
            value: 'middle_name',
            type: 'text',
            },
            last_name: {
            label: 'Last Name',
            value: 'last_name',
            type: 'text',
            },
            email: {
            label: 'Email',
            value: 'email',
            type: 'email',
            },
            password: {
            label: 'Password',
            value: 'password',
            type: 'password',
            },
            confirmPassword: {
            label: 'Confirm Password',
            value: 'confirm_password',
            type: 'password',
            },
            mobile_number: {
            label: 'Mobile Number',
            value: 'mobile_number',
            type: 'text',
            },
            address: {
            label: 'Address',
            value: 'address',
            type: 'text',
        },
    };
};
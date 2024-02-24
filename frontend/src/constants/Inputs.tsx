type RegistrationInputType = {
    [key: string]: {
    label: string;
    value: string;
    type: string;
    };
  };

type AddPizzaInputType = {
    [key: string]: {
    label: string;
    value: string;
    type: string;
    }
}
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

export const AddPizzaInput = (): AddPizzaInputType => {
    return {
        name: {
            label: 'Name',
            value: 'name',
            type: 'text',
            },
        priceS: {
            label: 'Price (S)',
            value: 'price',
            type: 'number',
            },
        priceM: {
            label: 'Price (M)',
            value: 'price',
            type: 'number',
            },
        priceL: {
            label: 'Price (L)',
            value: 'price',
            type: 'number',
            },
        priceXL: {
            label: 'Price (XL)',
            value: 'price',
            type: 'number',
            },
        image: {
            label: 'Image URL',
            value: 'image',
            type: 'text',
            },
        description: {
            label: 'Description',
            value: 'description',
            type: 'text',
            }
    }
}
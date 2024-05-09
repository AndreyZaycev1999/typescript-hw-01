type UserType = {
    name: string;
    surname: string;
    email: string;
    password: string;
    }

    function createOrUpdateUser(initialValues: Partial<UserType>): UserType {
        const defaultsUser: UserType = {
            name: "",
            surname: "",
            email: "",
            password: "",
        };
        return {...defaultsUser, ...initialValues };
    }

    createOrUpdateUser({
        email: 'user@mail.com',
        password: 'password123'
    });
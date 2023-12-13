interface userState {
    signedUp: boolean;
    verivied: boolean;
    verivied2: boolean;
    isAuth: boolean,
    currentUser: {
        token: string;
        city: string;
        email: string;
        fullname: string;
        gender: string;
        governorate: string;
        id: number
    },
    governorates: [
        {
            id: number;
            governorate_name_ar: string;
        },
    ]
    cities: [
        {
            governorate_id: number;
            city_name_ar: string;
        },
    ]
}

export const initialState: userState = {
    signedUp: false,
    verivied: false,
    verivied2: false,
    isAuth: false,
    currentUser: {
    },
    cities:[],
    governorates:[]
}
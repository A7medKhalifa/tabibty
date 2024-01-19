interface userState {
    done: boolean
    HomeData: {
        topRatedDoctors: [
            {
                _id: any;
                doctorName: any;
                specialization: any;
                degree: any;
                address: any;
                locationUrl: any;
                phone: any;
                workTimes: any;
                price: any;
                isRemoved: any;
                category: any;
            },
        ],
        topRatedLabs: [
            {
                _id: any;
                doctorName: any;
                specialization: any;
                degree: any;
                address: any;
                locationUrl: any;
                phone: any;
                workTimes: any;
                price: any;
                isRemoved: any;
                category: any;
            },
        ]
        latestArticles: [{
            _id: string;
            articleTitle: string;
            author: string
        }]
    }
    Clinics: [
        {
            _id: any;
            doctorName: any;
            specialization: any;
            degree: any;
            address: any;
            locationUrl: any;
            phone: any;
            workTimes: any;
            price: any;
            isRemoved: any;
            category: any;
        },
    ]
    Articles: []
    Saves: [],
    Search: [],
    Favourites: any
    details: any
    reviews: any
    edit: any
    comment: any
}

export const initialState: userState = {
    done: false,
    HomeData: {},
    Clinics: [],
    Articles: [],
    Search: [],
    Saves: [],
    Favourites: {},
    details: {},
    reviews: [],
    edit: undefined,
    comment: ''
}
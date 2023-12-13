interface userState {
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
    Saves: []
}

export const initialState: userState = {
    HomeData: {},
    Clinics: [],
    Articles: [],
    Saves: [],
}
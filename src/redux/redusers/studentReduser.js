const initialState = [
    {
        id:0,
        name: 'DastonDev',
        email: 'daston@gmail.com',
        number: 684651
    },
    {
        id:1,
        name: 'NazirovDev',
        email: 'nazirov@gmail.com',
        number: 3615465
    },
]


const studentReduser = (state=initialState,action) => {
    switch(action.type){
        case "ADD_STUDENT":
            state = [...state, action.payload];
            return state;
        case "UPDATE_STUDENT":
            const updateStudent = state.map(student=> student.id === action.payload.id ? action.payload : student)
            state = updateStudent
            return state;
        case "DELETE_STUDENT":
            const deleteStudent = state.filter(student=> student.id !== action.payload && student)
            state = deleteStudent
            return state;
        default:
            return state;
    }

}

export default studentReduser;
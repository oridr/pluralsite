const courseReducer = (state = [], { type, payload }) => {
	switch(type) {
		case 'CREATE_COURSE':
			return [...state,
				{ ...payload.course }
			];

		default:
			return state;
	}
};

export default courseReducer;

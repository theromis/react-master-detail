import { ExampleState } from './example.model';

export const initialState = new ExampleState({
    0: { id: 0, title: 'Daniel Alastair Kaffee', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    1: { id: 1, title: 'Nathan R. Jessup', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    2: { id: 2, title: 'JoAnne Galloway', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    3: { id: 3, title: 'Jack Ross', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    4: { id: 4, title: 'Jonathan James Kendrick', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    5: { id: 5, title: 'Sam Weinberg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    6: { id: 6, title: 'Harold Dawson', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    7: { id: 7, title: 'Louden Downey', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    8: { id: 8, title: 'Matthew Andrew Markinson', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    9: { id: 9, title: 'Julius Alexander Randolph', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    10: { id: 10, title: 'Private William T. Santiago', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    11: { id: 11, title: 'Jeffrey Owen Barnes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    12: { id: 12, title: 'Carl Edward Hammaker', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    13: { id: 13, title: 'Captain Whitaker', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    14: { id: 14, title: 'Dave Spradling', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    15: { id: 15, title: 'Harry Caesar', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }
}, [
    0, 1, 2, 3, 4,
    5, 6, 8, 9, 10,
    11, 12, 13, 14, 15
]);

export const example = (state = initialState, action: any): ExampleState => {
    switch (action.type) {
        default:
            return state
    }
};
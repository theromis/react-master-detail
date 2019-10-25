export const stubMatchMedia = (isMatch: boolean) => {
    return (query: string): MediaQueryList => {
        return {
            matches : isMatch,
            media: '',
            addListener : function() {},
            removeListener: function() {},
            addEventListener: () => {},
            removeEventListener: () => {},
            onchange: () => {},
            dispatchEvent: (event: Event) => false
        };
    };
}


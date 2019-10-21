import 'index.scss';
import { addParameters, configure } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});
configure(require.context('../src/stories', true, /\.stories\.tsx$/), module);

import { lazy } from 'react';

// import("./MainPage")

export const MainPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        setTimeout(() => resolve(import('./MainPage')), 1500);
    }),
);

import {articles} from "../db";

export const getArticles = () =>
    new Promise((resolve, reject) => {
        if (!localStorage.getItem('articles')) {
            return setTimeout(
                () => reject(new Error('Articles not found')),
                250
            );
        }

        setTimeout(() => resolve(JSON.parse(localStorage.getItem('articles'))), 250);
    });
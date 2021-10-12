import http from '../http';

export const fetchTranslations = (format = 'json') =>
  new Promise(async (resolve) => {
    const [translations, error] = await http.products.getTranslations();

    if (error) resolve([undefined, error]);

    if (format.toLowerCase() === 'csv')
      return resolve([translations, undefined]);

    const csvData = translations
      .replace(/"/g, '')
      .split('\n')
      .map((el) => el.split(','));
    const languages = csvData[0];
    const translationMap = csvData.reduce((output, row, idx) => {
      if (!idx) return output;
      output[row[0]] = row.reduce((result, el, i) => {
        if (!i) return result;
        return Object.assign(result, {
          [languages[i]]: el.length ? el : undefined,
        });
      }, {});

      return output;
    }, {});
    resolve([translationMap, undefined]);
  });

import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const {
      footer_text: footerHtml = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data.attributes;
    console.log(data.attributes);

    //console.log(data.data);

    return {
      footerHtml,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};

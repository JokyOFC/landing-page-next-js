import { Base } from '../Base';
import Head from 'next/head';
// import { useEffect, useState, useRef } from 'react';
// import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';
//import { Loading } from '../Loading';
import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridSection } from '../../components/GridSection';
import { GridImage } from '../../components/GridImage';
import P from 'prop-types';
import config from '../../config';

// import { useLocation } from 'react-router-dom';

export const Home = ({ data }) => {
  const { menu, sections, footerHtml, slug } = data;

  const { logo_text, logo_link, srcImg, links } = menu;

  if (!data) {
    return <PageNotFound />;
  }

  console.log('logo');
  console.log(menu);

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ logo_text, logo_link, srcImg }}
    >
      <Head>
        <title>
          {data.title} | {config.siteName}
        </title>
      </Head>
      {sections.map((section, index) => {
        const { component, __component } = section;
        const key = `${slug}-${index}`;
        // console.log(section);

        if (
          __component === 'section.section-two-columns' ||
          component === 'section.section-two-columns'
        ) {
          //console.log({ ...section });
          return <GridTwoColumn key={key} {...section} />;
        }

        if (
          __component === 'section.section-grid' ||
          component === 'section.section-grid'
        ) {
          console.log({ ...section });
          return <GridSection key={key} {...section} />;
        }

        if (
          __component === 'section.section-grid-text' ||
          component === 'section.section-grid-text'
        ) {
          //console.log({ ...section });
          return <GridContent key={key} {...section} />;
        }
        // console.log({ ...section });
        // console.log({ __component });
        if (
          __component === 'section.section-grid-image' ||
          component === 'section.section-grid-image'
        ) {
          //console.log({ ...section });

          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
};

Home.propTypes = {
  data: P.object,
};

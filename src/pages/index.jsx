// import Head from 'next/head';
import P from 'prop-types';
import config from '../config';

import { mapData } from '../api/map-data';

import axios from 'axios';
import { Home } from '../templates/Home';

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  const raw = await axios.get(
    config.url +
      'api/pages?filters[slug]=' +
      config.defaultSlug +
      '&populate=deep',
  );
  //console.log(raw);s
  const json = await raw.data.data;
  const data = mapData(json)[0];

  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.object,
};

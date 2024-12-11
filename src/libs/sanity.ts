/*************
 *
 * docs:
 * https://www.npmjs.com/package/next-sanity
 * https://www.sanity.io/docs/image-url
 *
 *
 */
import _ from 'lodash';
import { createClient, defineQuery } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

import { publicEnv } from 'src/core/envConfig';

const getClient = () => {
  const projectId = publicEnv().SANITY_PROJECT_ID;
  const dataset = publicEnv().SANITY_DATASET;
  if (!projectId || !dataset) {
    _.error('Fail to get projectId or dataset', projectId, dataset);
    return null;
  }

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2023-06-21', // https://www.sanity.io/docs/api-versioning
    useCdn: true,
  });
  return client;
};

const getImageBuilder = () => {
  const projectId = publicEnv().SANITY_PROJECT_ID;
  const dataset = publicEnv().SANITY_DATASET;
  if (!projectId || !dataset) {
    _.error('Fail to get projectId or dataset', projectId, dataset);
    return null;
  }

  const builder = imageUrlBuilder({
    projectId,
    dataset,
  });
  return builder;
};

export const getBlogList = () => {
  const client = getClient();

  if (!client) return null;

  const postsQuery = defineQuery(
    '*[_type == "post" && defined(slug.current)]{_id, title, subtitle, excerpt, slug, publishedAt}'
  );

  return client?.fetch(postsQuery);
};

export const getBlogBySlug = (slug = '') => {
  const client = getClient();
  const postBySlugQuery = defineQuery(
    '*[_type == "post" && slug.current == $slug][0]'
  );

  return client?.fetch(postBySlugQuery, { slug });
};

export const getSanityImage = (source: any) => {
  if (!source) return '';

  const image = getImageBuilder()?.image(source)?.url();

  return image;
};

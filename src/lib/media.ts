import { getStrapiURL } from "./api";

interface Media {
    data: MultiMedia
}

interface Attributes {
    url: string
}

interface MultiMedia {
    attributes: Attributes,
    id: number
}

export function getStrapiMedia(media: Media) {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}

export function getStrapiMultiMedia(media: MultiMedia) {
  const { url } = media.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}
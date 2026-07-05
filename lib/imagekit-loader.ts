export default function imageKitLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const endpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/eaglebyte";

  // Remove leading slash if present
  let path = src;
  if (path.startsWith("/")) {
    path = path.slice(1);
  }

  // Prepend 'public/' if it's one of your uploaded assets and not already prefixed
  const localAssets = [
    'eaglebyte-logo-transparent.webp',
    'kartik-parmar.webp',
    'v2enterprise.webp',
    'sitaramorganic.webp',
    'hero-bg.webp',
    'hero-bg.jpg'
  ];

  if (localAssets.includes(path) && !path.startsWith('public/')) {
    path = `public/${path}`;
  }

  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  const paramsString = `tr=${params.join(",")}`;

  // If path is an absolute URL, pass it through ImageKit fetch
  if (path.startsWith("http")) {
    return `${endpoint}/${path}?${paramsString}`;
  }

  return `${endpoint}/${path}?${paramsString}`;
}

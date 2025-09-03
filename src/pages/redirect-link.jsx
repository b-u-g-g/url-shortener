
import {storeClicks} from "@/db/apiClicks";
import {getLongUrl} from "@/db/apiUrls";
import useFetch from "@/hooks/use-fetch";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {BarLoader} from "react-spinners";

const RedirectLink = () => {
  const {id} = useParams();

  const {loading, data, fn} = useFetch(getLongUrl, id);

  const {loading: loadingStats, fn: fnStats} = useFetch(storeClicks, {
    id: data?.id,
    originalUrl: data?.original_url,
  });

  useEffect(() => {
    fn();
  }, []);

  useEffect(() => {
    if (!loading && data) {
      fnStats();

      // Redirect after 5 seconds
      setTimeout(() => {
        window.location.href = data.original_url;
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  // Prevent crash if data is null
  if (loading || loadingStats || !data) {
    return null;
  }

  // Return SEO metadata only, no visible content
  return (
    <>
      <head>
        <title>Redirecting to {data.original_url}</title>
        <meta name="description" content={`Redirecting to ${data.original_url}`} />
        <meta name="robots" content="index, follow" />
      </head>
    </>
  );
};

export default RedirectLink;


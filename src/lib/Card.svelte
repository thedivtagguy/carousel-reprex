<script>
  export let data;
  import { timeParse, timeFormat } from "d3";

  const parseDate = timeParse("%Y-%m-%d %H:%M:%S");
  const formatDate = timeFormat("%B %Y");

  // Function to check and format the date
  function formatPublicationDate(date) {
    const parsedDate = parseDate(date);

    if (date && date !== "NULL" && !isNaN(parsedDate)) {
      // Check if parsedDate is a valid date object
      if (parsedDate) {
        return formatDate(parsedDate);
      }
    }
    return "";
  }
</script>

<div class="flex h-full bg-white shadow-sm card w-96">
  {#if data.img_url !== "NULL" && data.img_url !== "" && data.img_url !== null}
    <figure class="flex-none">
      <img
        src={data.img_url}
        alt="Cover for {data.pub_title}"
        class="object-contain w-full h-full"
      />
    </figure>
  {/if}
  <div class="flex flex-col justify-between flex-grow gap-4 card-body">
    <h2
      class="card-title {data.img_url === 'NULL'
        ? 'flex-col-reverse items-start text-xl'
        : 'items-start flex-col-reverse text-[18px]'} gap-2 justify-start"
    >
      {data.pub_title}
      <div class="py-3 badge bg-primary-content">{data.Pub_Type}</div>
    </h2>
    <p class="text-sm">{formatPublicationDate(data.pub_date)}</p>
    <a target="_blank" href={data.pub_url}>
      <button class="btn btn-secondary">Read more</button>
    </a>
  </div>
</div>

<style>
  .card {
    display: flex;
    align-items: flex-start !important;
    justify-content: flex-start !important;
  }
  .card figure {
    padding: 1rem 2rem 0 2rem !important;
    flex-shrink: 1 !important;
    justify-self: flex-start !important;
  }

  .card figure img {
    object-position: 0 0;
  }
</style>

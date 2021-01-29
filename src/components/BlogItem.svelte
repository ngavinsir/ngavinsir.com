<script>
  import tinytime from "tinytime";

  export let title;
  export let date;
  export let categories;
  export let slug;
  export let preview;

  const dateStamp = tinytime("{MMMM} {DD}, {YYYY}");
  let parsedDate = "";

  $: parsedDate = dateStamp.render(new Date(date));
</script>

<a
  rel="prefetch"
  href={`blog/${slug}`}
  style="width: 65ch;"
  class="border-2 border-grayscale-1 rounded-md p-3 sm:p-5 max-w-full">
  <span class="text-lg sm:text-xl text-grayscale-4 font-semibold">
    {categories.join(", ")}
  </span>
  <h2
    class="text-2xl sm:text-3xl text-grayscale-9 font-bold mb-3 sm:mb-6 mt-1 sm:mt-2">
    {title}
  </h2>
  <p
    class="text-grayscale-6 text-lg sm:text-xl font-normal mb-6 sm:mb-12 leading-tight">
    {preview}
  </p>
  <span class="font-bold text-sm sm:text-base text-primary-4">
    {parsedDate}
  </span>
</a>

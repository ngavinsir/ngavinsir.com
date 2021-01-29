<script>
  import tinytime from "tinytime";

  export let title;
  export let date;
  export let categories;
  export let slug;

  const dateStamp = tinytime("{MMMM} {DD}, {YYYY}");
  let parsedDate = "";

  $: parsedDate = dateStamp.render(new Date(date));
</script>

<a
  sapper:prefetch
  href={`blog/${slug}`}
  class="border-2 border-grayscale-1 hover:border-primary-3 rounded-lg p-3 sm:p-5 w-full">
  <span class="text-lg sm:text-xl text-grayscale-4 font-semibold">
    {categories.join(", ")}
  </span>
  <h2
    class="text-2xl sm:text-3xl text-grayscale-9 font-bold mb-4 sm:mb-8 mt-1 sm:mt-2
    leading-tight sm:leading-normal">
    {title}
  </h2>
  <span class="font-bold text-sm sm:text-base text-primary-4">
    {parsedDate}
  </span>
</a>

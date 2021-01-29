<script>
  import tinytime from "tinytime";

  export let title;
  export let date;
  export let categories;

  const dateStamp = tinytime("{MMMM} {DD}, {YYYY}");
  let parsedDate = "";

  $: parsedDate = dateStamp.render(new Date(date));
</script>

<div class="py-8 px-4 sm:px-8 font-inter">
  <div class="max-w-full mx-auto text-center" style="width: 73ch;">
    <span class="font-bold text-sm sm:text-lg text-primary-4">
      {parsedDate}
    </span>
    <h1
      class="text-3xl sm:text-5xl text-grayscale-9 font-bold mb-1 sm:mb-2 mt-4 sm:mt-8">
      {title}
    </h1>
    <span class="text-lg sm:text-2xl text-grayscale-4 font-semibold">
      {categories.join(", ")}
    </span>
  </div>

  <div class="prose sm:prose-lg mx-auto mt-8 sm:mt-16">
    <slot />
  </div>
</div>

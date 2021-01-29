<script context="module">
  export async function preload(_page, _session) {
    const res = await this.fetch(`blog.json`);
    const blogs = await res.json();

    return { blogs };
  }
</script>

<script>
  import BlogItem from "../components/BlogItem.svelte";

  export let blogs;
</script>

<div
  class="flex flex-col mx-auto font-inter pt-2 sm:pt-4 px-3 sm:px-4 max-w-full"
  style="width: 74ch;">
  <h1 class="font-bold text-grayscale-9 text-4xl sm:text-5xl leading-none">
    ngavinsir's blog
  </h1>
  <h2
    class="font-normal text-grayscale-6 text-xl sm:text-2xl max-w-lg leading-none mt-1 sm:mt-2">
    personal stories about full-stack development journey
  </h2>

  <div class="mt-8 sm:mt-16 flex flex-col">
    {#each blogs as blog (blog.slug)}
      <BlogItem {...blog} />
    {/each}
  </div>
</div>

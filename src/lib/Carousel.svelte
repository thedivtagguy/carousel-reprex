<script>
  export let data;
  import Card from "./Card.svelte";
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
</script>

<div class="w-full">
  <Splide
    aria-label="Publications by IOM RDH"
    options={{
      height: "26rem",
      gap: "3rem",
      focus: "center",
      autoWidth: true,
      type: "loop",
      wheel: false,
      pagination: false,
      speed: 500,
      keyboard: true,
      drag: false,
      flickMaxPages: 2,
      flickPower: 400,
    }}
  >
    {#each data as publication}
      <SplideSlide>
        <Card data={publication} />
      </SplideSlide>
    {/each}
  </Splide>
</div>

<style>
  :global(button, [type="button"], [type="reset"], [type="submit"]) {
    background-color: #2b598645;
  }
</style>

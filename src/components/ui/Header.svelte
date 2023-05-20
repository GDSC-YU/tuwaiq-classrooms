<script lang="ts">
  import type { GoogleColor } from "../../data/data";

  import Icon from "@iconify/svelte";
  import DarkMode from "../ui/DarkMode.svelte";

  export let backButtonHref: string;
  export let title: string;
  export let color: GoogleColor;
</script>

<header class={`rounded-b-2xl ${color} p-5`}>
  <div class="flex items-center justify-between">
    <a href={backButtonHref}>
      <Icon
        icon="fa:arrow-left"
        class="h-7 w-7 transition-all duration-200 hover:scale-110 md:h-10 md:w-10"
      />
    </a>
    <p class="text-3xl font-black tracking-wide md:text-4xl">
      {title}
    </p>
    <DarkMode
      Style="h-8 w-8 transition-all duration-200 hover:scale-110 md:h-12 md:w-12"
    />
  </div>
  <slot />
</header>

<script lang="ts">
  export let text: string;
  export let isSelected: boolean;
  export let onClick: () => void;

  let style: string;

  $: {
    style = `text-2xl font-black ${
      isSelected
        ? "text-slate-900 dark:text-white"
        : "text-slate-900/30 hover:scale-110"
    }`;
  }
</script>

<button on:click={onClick} class={style}>
  {text}
</button>

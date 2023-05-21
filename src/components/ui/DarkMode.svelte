<script lang="ts">
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";

  import { isDark } from "../../stores/darkMode";

  export let Style: string;

  onMount(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      isDark.set(true);
    } else {
      document.documentElement.classList.remove("dark");
      isDark.set(false);
    }
  });

  function toggleTheme() {
    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        isDark.set(true);
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        isDark.set(false);
      }
    } else {
      // if no previous local storage data
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        isDark.set(false);
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        isDark.set(true);
      }
    }
  }
</script>

<button type="button" on:click={toggleTheme}>
  <Icon icon="gg:dark-mode" class={`${Style}`} />
</button>

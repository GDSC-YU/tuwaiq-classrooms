<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  export let Style: string;

  const isDark = writable(false);

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

    const toggleDarkIcon = document.getElementById("darkIcon") as HTMLElement;
    const toggleLightIcon = document.getElementById("lightIcon") as HTMLElement;

    // changing the icon depending on the theme
    if ($isDark) {
      toggleLightIcon.classList.remove("hidden");
    } else {
      toggleDarkIcon.classList.remove("hidden");
    }
  });

  function toggleTheme() {
    const toggleDarkIcon = document.getElementById("darkIcon") as HTMLElement;
    const toggleLightIcon = document.getElementById("lightIcon") as HTMLElement;

    // toggle icons inside button
    toggleDarkIcon.classList.toggle("hidden");
    toggleLightIcon.classList.toggle("hidden");

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
  <!-- Moon Icon -->
  <img
    id="darkIcon"
    class={`hidden ${Style}`}
    alt="Moon Icon"
    src="/assets/icons/moon.svg"
  />
  <!-- Sun Icon -->
  <img
    id="lightIcon"
    class={`hidden ${Style}`}
    alt="Sun Icon"
    src="/assets/icons/sun.svg"
  />
</button>

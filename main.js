const { createApp, ref, reactive, computed, watch } = Vue;

createApp({
  setup() {
    // === 語系 ===
    const l = navigator.language || navigator.userLanguage;
    const language = ref(l ? l.toUpperCase() : "EN");
    const base = computed(() => i18n[language.value]);
    document.title = base.value.title;
    watch(language, (val) => (document.title = i18n[val].title));

    const changeLanguage = (lang) => (language.value = lang);

    // === 菜色 ===
    const dishes = reactive(ORIGINAL_DISH);
    const getRandomDish = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const randomDish = ref(getRandomDish(dishes));

    const unselectedDish = computed(() => dishes.filter((d) => !d.selected));
    const selectedDish = computed(() =>
      dishes.filter((d) => d.selected).sort((a, b) => b.index - a.index)
    );

    let i = 0; // 排序用
    const getDish = () => {
      randomDish.value.selected = true;
      randomDish.value.index = i++;
      randomDish.value = getRandomDish(unselectedDish.value);
    };

    // === 記憶 ===
    const remember = ref(false);
    watch(selectedDish, (val) => {
      console.log(remember.value);
      if (!remember.value) return;
      Cookies.set("ewr", val.map((v) => v.id).join(","), { expires: 7 });
    });

    return {
      base,
      language,
      randomDish,
      selectedDish,
      remember,
      changeLanguage,
      getDish,
    };
  },
}).mount("#app");

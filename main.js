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
    // 隨機抽取
    const getRandomDish = (arr) => arr[Math.floor(Math.random() * arr.length)];

    // 加入 Queue
    const addToDishQueue = async (dish) => {
      const blob = await fetch(dish.img).then((rs) => rs.blob());
      const tempUrl = URL.createObjectURL(blob);
      dish.img = tempUrl;
      dish.selected = true;
      dishesQueue.push(dish);
    };

    // 從 Queue 中取得一個 dish
    const getDishFromQueue = () => {
      return dishesQueue.pop();
    };

    const dishes = reactive(ORIGINAL_DISH);
    const dishesQueue = reactive([]);
    const showDish = ref({});
    const unselectedDish = computed(() => dishes.filter((d) => !d.selected));
    const selectedDish = computed(() =>
      dishes.filter((d) => d.selected).sort((a, b) => b.index - a.index)
    );

    // 預先取得三個
    for (let i = 1; i <= 3; i++) {
      const dish = getRandomDish(unselectedDish.value);
      addToDishQueue(dish);
    }
    showDish.value = getDishFromQueue();

    // === 記憶 ===
    const remember = ref(false);
    watch(selectedDish, (val) => {
      if (!remember.value) return;
      Cookies.set("ewr", val.map((v) => v.id).join(","), { expires: 7 });
    });

    return {
      base,
      language,
      showDish,
      selectedDish,
      remember,
      dishesQueue,
      changeLanguage,
      getDish: addToDishQueue,
    };
  },
}).mount("#app");

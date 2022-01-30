import router from "@/router";

const white = ["/login"];

router.beforeEach((to, from, next) => {
  next();
});

router.afterEach(() => {
  const app: HTMLElement | null = document.getElementById("app");
  if (app) {
    app.scrollTo(0, 0);
  }
});

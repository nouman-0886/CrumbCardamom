// All image URLs live here. Swap in real client photos (e.g. /images/hero.jpg) later.
const u = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`
export const images = {
  hero: u('photo-1555507036-ab1f4038808a', 1100),
  story: u('photo-1509440159596-0249088772ff', 900),
  banner: u('photo-1578985545062-69928b1d9587', 1600),
  croissant: u('photo-1555507036-ab1f4038808a', 700),
  tart: u('photo-1519915028121-7d3463d20b13', 700),
  sourdough: u('photo-1585478259715-876acc5be8eb', 700),
  cake: u('photo-1464305795204-6f5bbfc7fb81', 700),
  roll: u('photo-1509365465985-25d11c17e812', 700),
  cookies: u('photo-1558961363-fa8fdf82db35', 700),
  coffee: u('photo-1495147466023-ac5c588e2e94', 700),
  interior: u('photo-1517433670267-08bbd4be890f', 700),
}

# WDAI Portfolio

Nowoczesne portfolio webowe zbudowane w React i Vite. Projekt prezentuje doświadczenie, wybrane realizacje, animacje, elementy 3D oraz formularz kontaktowy, a całość została zaprojektowana jako szybka, czytelna i dobrze wyglądająca strona typu one-page.

## Najważniejsze informacje

- Responsywny układ dopasowany do desktopu i urządzeń mobilnych.
- Sekcje: hero, about, projekty, doświadczenie i kontakt.
- Animacje oparte o GSAP, Motion oraz React Three Fiber.
- Formularz kontaktowy wysyłany przez EmailJS.
- Publikacja przez GitHub Pages.

## Technologie

- React 19
- Vite
- Tailwind CSS 4
- GSAP
- Motion
- Three.js
- React Three Fiber
- @react-three/drei
- EmailJS

## Zawartość projektu

- `src/sections` - główne sekcje strony.
- `src/components` - komponenty wielokrotnego użytku i elementy wizualne.
- `src/constants` - dane dla projektów, sociali i doświadczenia.
- `public/assets` - obrazy, logotypy, materiały projektowe i grafiki.

## Uruchomienie lokalne

1. Sklonuj repozytorium.
2. Zainstaluj zależności:

```bash
npm install
```

3. Uruchom aplikację w trybie developerskim:

```bash
npm run dev
```

4. Otwórz adres podany w terminalu, najczęściej `http://localhost:5173`.

## Dostępne skrypty

```bash
npm run dev
```

Uruchamia lokalny serwer developerski z Vite.

```bash
npm run build
```

Tworzy produkcyjną wersję aplikacji w katalogu `dist`.

```bash
npm run preview
```

Pozwala podejrzeć build produkcyjny lokalnie.

```bash
npm run lint
```

Sprawdza kod przy użyciu ESLint.

```bash
npm run deploy
```

Buduje projekt i publikuje go na GitHub Pages przez `gh-pages`.

## Deploy

Projekt jest przygotowany do wdrożenia na GitHub Pages. Przed publikacją upewnij się, że:

- repozytorium jest poprawnie podpięte do GitHub,
- masz ustawiony zdalny origin,
- dane projektu w repo są aktualne,
- jeśli publikujesz pod inną ścieżką niż `/`, dostosujesz `base` w `vite.config.js`.

## Funkcje projektu

- efektowna sekcja powitalna z animacjami,
- prezentacja projektów i technologii,
- rozbudowana sekcja doświadczenia,
- formularz kontaktowy z ochroną przed spamem,
- spójny, nowoczesny styl wizualny.

## Struktura projektu

```text
src/
	components/
	constants/
	sections/
	App.jsx
	main.jsx
	index.css
public/
	assets/
```

## Kontakt

Jeśli chcesz się skontaktować w sprawie współpracy, najlepiej użyć formularza na stronie lub podpiętych profili społecznościowych z sekcji kontaktowej.

## Autor

Michał Białas

## Licencja

Projekt nie ma obecnie dodanej osobnej licencji.

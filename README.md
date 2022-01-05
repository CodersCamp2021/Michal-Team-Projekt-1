# CodersCamp 2021 - Projekt JavaScript

**CodersCamp (coderscamp.edu.pl) - Największy otwarty kurs programowania webowego**
.Wykorzystanie asynchronicznego JavaScript oraz korzystanie z REST API. <br/> <br/>

# Zespół

- **Mentor: [Michał Miszczyszyn](https://github.com/mmiszy)**
<!-- Dodaj linki -->
- [Justyna Bodurka](https://github.com/justyna-bodurka)
- [Weronika Burzyńska](https://github.com/Weroniika)
- [Mateusz Binięda](https://github.com/Arssin)
- [Krystian Gaczyński](https://github.com/krygacz)
- [Karol Wolski](https://github.com/karol-wolski)
- [Kamil Kantorski](https://github.com/KamiKant)

  <br/>

![start](https://user-images.githubusercontent.com/93389452/148145126-4cb6ed74-f8e3-4611-b707-f0cee17e5c1e.jpg)
<br/> <br/>

# Star Wars Quiz

## Demo

<!-- dodać link -->

Wersja demonstracyjna aplikacji jest dostępna pod tym linkiem -> [DEMO](https://sturdy-journey-761820ff.pages.github.io/) <br/> <br/>

## Założenia projektowe

Celem projektu było stworzenie aplikacji, poprzez odpowiednie wykorzystanie aktualnie nabytej na kursie wiedzy. Sześcioosobowa grupa projektowa, pod okiem mentora, który również stanowi klienta produktu, zdecydowała się na tematykę dotyczącą uniwersum Gwiezdnych Wojen.
<br/>
Niezwykle ważnym aspektem podczas projektu, była styczność ze wspólnym tworzeniem rozwiązań oraz działaniem w grupie. Przyczyniło się to, do rozwoju zdolności nie tylko czysto technicznych, ale również komunikacyjnych zespołu.
<br/> <br/>

## Wykorzystane technologie

- `HTML`
- `CSS`
- `JavaScript`
- `Star Wars Api`
  <br/><br/>

# Wygląd aplikacji

## `Ekran główny` <br/>

![main1](https://user-images.githubusercontent.com/93389452/148151348-18a2130c-9815-4b86-842f-7407be361046.png)<br/><br/>

## `Responsywność` <br/>

![responsive](https://user-images.githubusercontent.com/93389452/148149779-73274f24-7f84-4c17-88fd-570a52652b1e.png)<br/><br/>

## `Przykładowy gameplay` <br/>

![essa1](https://user-images.githubusercontent.com/93389452/148151455-49f2004f-8513-4ee0-b903-f5afc6b4a413.png)<br/><br/>

# Działanie aplikacji

## Ekran startowy

Po uruchomieniu aplikacji zostaje wyświetlony, ekran początkowy, na którym istnieje możliwość wystartowania quizu, sprawdzenia najwyższych wyników, zmiana trybu rozgrywki bądź powrotu do ekranu startowego (poprzez kliknięcie na logo).
<br/>
Na ekranie startowym wyświetlane jest pytanie, oraz zasady, które zmieniają się w zależności od wybranego trybu na pasku nawigacyjnym. Możliwe tryby do wyboru:

- `People`
- `Vehicles`
- `Starships`

Dodatkowo aplikacja jest w pełni responsywna. Więc można się nią cieszyć bez względu na posiadany komputer,telefon czy tablet.
<br/>

## Hall of fame

Jest odzwierciedleniem ekranu, który pokazuje najlepsze zdobyte wyniki, które są zapisane w LocalStorage. Ranking wyświetla trzy pierwsze miejsca, nazwę gracza, oraz ilość prawidłowych odpowiedzi przy danej liczbie pytań.
<br/>

## Rozgrywka

Polega na rozpoznawaniu przez gracza w zależności od trybu - postaci, pojazdów lub statków kosmicznych. Przy rozpoczęciu quizu po lewej stronie wyświetlane, jest losowo wygenerowane zdjęcie ze SWAPI. Zadanie polega na rozpoznaniu nazwy ukazanej postaci fikcyjnej, bądź rzeczy. Gracz udziela jednej z czterech odpowiedzi, po czym przechodzi do następnego pytania. W każdym pytaniu tylko jedna z opcji jest prawidłowa. Poprawna odpowiedź podświetla przycisk na zielono a błędna - na czerwono. Quizz trwa 2 minuty. Czas wyświetlany jest w formie liczbowej, oraz poprzez animowany miecz świetlny na dole ekranu. Po zakończeniu rozgrywki, gracz uzyskuje wynik porównany z wynikiem grającego jednocześnie komputera. Wyświetlana jest wtedy ilość pytań oraz poprawnych odpowiedzi. Istnieje również możliwość dopisania się do rankingu poprzez wprowadzenie nazwy.

# Uruchomienie projektu

Aby uruchomić aplikację na lokalnej maszynie należy:

```
1. Zainstalować zależności za pomocą: npm install
2. Wystartować serwer deweloperski: npm run dev
```

Aplikacja będzie dostępna pod wyświetlonym adresem.

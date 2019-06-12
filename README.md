# react-memory-game

![][david-url]
![][license-url]

A tiny game written in `react-16.1.1`. It's inspired by IgorMinar's [Memory-Game](https://github.com/IgorMinar/Memory-Game). You can view the online demo [here](http://leftstick.github.io/react-memory-game).

> If you are looking for `angular5` version, check it [here](https://github.com/leftstick/angular5-memory-game)

> If you are looking for `vue2` version, check it [here](https://github.com/leftstick/vue-memory-game)

## Components Tree

![](https://raw.githubusercontent.com/leftstick/react-memory-game/master/docs/img/components.png)

## Presentational Components break down

1. `MemoryGame`, the whole game board
2. `Dashboard`, the panel on the top, including "logo", "progress", "best result"
3. `Logo`, on the left of `Dashboard`, showing the game Logo
4. `MatchInfo`, on the center of `Dashboard`, showing the current matching information
5. `Score`, on the right of `Dashboard`, showing the best result
6. `Chessboard`, on the center of `Game`, the playing area
7. `Card`, each card in the `Chessboard`
8. `PlayStatus`, the footer part, displaying current status of game

## File Structure

```
react-memory-game
├── assets
    ├── ...
    └── zeppelin.png
├── helpers
    ├── dva
    ├── gameData
    ├── object
    ├── utils
    └── view
├── layouts
    └── index
├── pages
    ├── game
    │   ├── components
    │   │   ├── Card
    │   │   ├── Chessboard
    │   │   ├── Dashboard
    │   │   ├── Logo
    │   │   ├── MatchInfo
    │   │   ├── PlayStatus
    │   │   └── Score
    │   ├── models
    │   │   └── game
    │   └── index
    ├── document.ejs
    └── index
```

## Want Having a try locally?

```bash
#cloning code
git clone https://github.com/leftstick/react-memory-game.git
cd react-memory-game

#install dependencies
npm install
#start debug server
npm start
```

Now, view the demo at [http://localhost:8080](http://localhost:8080)

## LICENSE

[MIT License](https://raw.githubusercontent.com/leftstick/react-memory-game/master/LICENSE)

[david-url]: https://david-dm.org/leftstick/react-memory-game.png
[license-url]: https://img.shields.io/github/license/leftstick/react-memory-game.svg

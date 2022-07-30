# F1 API

[![GitHub license](https://img.shields.io/github/license/GabrielCrackPro/f1-api?style=for-the-badge)](https://github.com/GabrielCrackPro/f1-api/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](https://github.com/GabrielCrackPro/f1-api/pulls)

An API with F1 2022 season data

> Note: This won´t be completed until the 2022 season ends

## Base URL

## Endpoints

```
GET /api/teams
```

Returns the list of teams in the 2022 season

```
GET /api/teams/:name
```

Returns one specific team by its name

```
GET /api/drivers
```

Returns the list of drivers in the 2022 season

```
GET /api/drivers/:name
```

Returns one specific driver by its name

```
GET /api/races
```

Returns the list of races in the 2022 season

> This is not completed yet

```
GET /api/races/:round
```

Returns one specific race by its round number

```
GET /api/circuits
```

Returns the list of circuits in the 2022 season

```
GET /api/circuits/:id
```

Returns one specific circuit by its id. The id is determined by order in the season

// Как необходимо описать тип CountriesByRegion для корректной типизации?
type Regions = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania';

// Необходимо добавить утилиту Record<Regions, string[]> согласно структуре
type CountriesByRegion = Record<Regions, string[]>

const visitedCountries: CountriesByRegion = {
    Africa: ['Egypt', 'Angola', 'Tunis'],
    America: ['Mexico'],
    Asia: ['India'],
    Europe: ['Spain', 'England', 'Hungary'],
    Oceania: []
}

// Дан тип Country, который будет использоваться в разных целях.

// Мы хотим создать компонент с карточкой,
// где должны выводиться только названия страны, столица и регион.
// Как нам сформировать тип CountryCardProps?

type Country = {
    name: string,
    region: string,
    population: number,
    flag: string,
    capital: string,
    currencies: string[],
    languages: string[],
}

type CountryCardProps = Pick<Country, 'name' | 'capital' | 'region'>

// Мы вновь работаем с типом Country и вновь хотим создать компонент карточки страны,
// но теперь помимо названия, региона и столицы, мы хотим также добавить туда флаг и размер населения.
// Как нам сформировать тип CountryCardProps?

type CountryCardProps1 = Omit<Country, 'currencies' | 'languages'>
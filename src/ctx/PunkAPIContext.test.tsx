import React, { ProviderProps } from 'react'
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { APIContext, PunkAPIContext } from "./PunkAPIContext"

const customRender = (ui: JSX.Element, {providerProps, ...renderOptions}: {providerProps: ProviderProps<any>}) => {
  return render(
    <PunkAPIContext.Provider {...providerProps}>{ui}</PunkAPIContext.Provider>,
    renderOptions
  )
}

test('should use default values', () => {
  render(<PunkAPIContext.Consumer>
      {({loading, beers, favorites}) => `Consumer value => Loading: ${loading} Beers: ${beers.length} Favorites: ${favorites.length}`}
    </PunkAPIContext.Consumer>
  )
  expect(screen.getByText(/Consumer value => /)).toHaveTextContent('Loading: false Beers: 0 Favorites: 0')
})

test('should show value from provider', () => {
  const providerProps = {
    value: {
      loading: false,
      beers: [sampleBeer],
      favorites: [sampleBeer]
    }
  }

  customRender(<PunkAPIContext.Consumer >
      {value => `Consumer value => Beers: ${value.beers} Favorites: ${value.favorites}`}
    </PunkAPIContext.Consumer>, {providerProps})
  expect(screen.getByText(/^Consumer value /)).toHaveTextContent(`Consumer value => Beers: ${[sampleBeer]} Favorites: ${[sampleBeer]}`)
})

export const sampleBeer = {
  "id": 192,
  "name": "Punk IPA 2007 - 2010",
  "tagline": "Post Modern Classic. Spiky. Tropical. Hoppy.",
  "first_brewed": "04/2007",
  "description": "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
  "image_url": "https://images.punkapi.com/v2/192.png",
  "abv": 6.0,
  "ibu": 60.0,
  "target_fg": 1010.0,
  "target_og": 1056.0,
  "ebc": 17.0,
  "srm": 8.5,
  "ph": 4.4,
  "attenuation_level": 82.14,
  "volume": {
    "value": 20,
    "unit": "liters"
  },
  "boil_volume": {
    "value": 25,
    "unit": "liters"
  },
  "method": {
    "mash_temp": [
      {
        "temp": {
          "value": 65,
          "unit": "celsius"
        },
        "duration": 75
      }
    ],
    "fermentation": {
      "temp": {
        "value": 19.0,
        "unit": "celsius"
      }
    },
    "twist": null
  },
  "ingredients": {
    "malt": [
      {
        "name": "Extra Pale",
        "amount": {
          "value": 5.3,
          "unit": "kilograms"
        }
      }
    ],
    "hops": [
      {
        "name": "Ahtanum",
        "amount": {
          "value": 17.5,
          "unit": "grams"
         },
         "add": "start",
         "attribute": "bitter"
       },
       {
         "name": "Chinook",
         "amount": {
           "value": 15,
           "unit": "grams"
         },
         "add": "start",
         "attribute": "bitter"
       },
    ],
    "yeast": "Wyeast 1056 - American Ale™"
  },
  "food_pairing": [
    "Spicy carne asada with a pico de gallo sauce",
    "Shredded chicken tacos with a mango chilli lime salsa",
    "Cheesecake with a passion fruit swirl sauce"
  ],
  "brewers_tips": "While it may surprise you, this version of Punk IPA isn't dry hopped but still packs a punch! To make the best of the aroma hops make sure they are fully submerged and add them just before knock out for an intense hop hit.",
  "contributed_by": "Sam Mason <samjbmason>"
}
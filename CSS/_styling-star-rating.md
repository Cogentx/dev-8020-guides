# Styling Star Rating in CSS | React JSX

## Inside React JSX

```javascript
              <p>
                {`⭐`.repeat(rating)}
                <span style={{ filter: `grayscale(100%)` }}>
                  {`⭐`.repeat(5 - rating)}
                </span>
              </p>
```

## Inside List within React JSX

```javascript
export default function BeersPage({ data }) {
  const allBeers = data.beers.nodes;

  return (
    <>
      <h2>We have {allBeers.length} Beers Available. Dine in Only!</h2>
      <BeerGridStyle>
        {allBeers.map((beer) => {
          const rating = Math.round(beer.rating.average);
          return (
            <SingleBeerStyles key={beer.id}>
              <img src={beer.image} alt={beer.name} />
              <h3>{beer.name}</h3>
              {beer.price}
              <p>
                {`⭐`.repeat(rating)}
                <span style={{ filter: `grayscale(100%)` }}>
                  {`⭐`.repeat(5 - rating)}
                </span>
              </p>
            </SingleBeerStyles>
          );
        })}
      </BeerGridStyle>
    </>
  );
}
```


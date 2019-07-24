# Booth
Open Source voting platform, by the Center for Election Science.

Features:
- Easy social sign on
- Vote on each candidate with 0-10 rating (rendered as stars, with half ratings)
- Results page *can* show the results of your election in multiple formats, such as Score, Approval, IRV, RRV and more.

Goals:
- Demonstrate the impact of voting methods
- Clear and effective user experience
- Reliable and secure results
- Allow for both multi-winner and single winner elections

What Booth is not:
- A forum for voting science debate. Booth is a platform to explore, not to argue.
- A "demo" or research project - Booth should be high quality, and reliable product.
- A substitute for paper ballots where the chance of [APT](https://en.wikipedia.org/wiki/Advanced_persistent_threat) attacks is high.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

A step by step series of examples that tell you how to get a development env running

Ensure you have nodejs+yarn installed.

```
yarn # install packages
yarn start # get going
```

## Running the tests

tbd


## Deployment

tbd

## Built With

Backend + DB is provided by Hasura. Authentication by Auth0. Frontend is React+Apollo

* [3FactorApp](https://3factor.app/) - Keeping it simple
* [React+Apollo](https://www.apollographql.com/docs/react/) - The web framework used
* [Hasura](https://hasura.io) - GraphQL / PostgreSQL DB
* [Auth0](https://auth0.com) - Authentication provider

## Contributing

Please read [code-of-conduct.md](https://github.com/electionscience/Booth/blob/master/code-of-conduct.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Felix Sargent** - *Initial work* - [fsargent](https://github.com/fsargent) | [personal page](https://felixsargent.com)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

